(async function () {
    module.exports = (db) => {
        const playersCollection = db.collection('players'),
            ObjectId = require('mongodb').ObjectID,
            { Router } = require('express'),
            router = Router(),
            { modelFields } = require('./fields');
        /**
         * This route used for get list of players for show in dropdown
         * @param players Selected players id in coma separated string
         */
        router.get('/players', async function (req, res) {
            const { search = '' } = req.query;
            const findQuery = search ? { $text: { $search: search || '' } } : {};
            const players = await playersCollection.find(findQuery).limit(10).toArray();
            res.status(200).send({
                players: players.map((player) => ({
                    label: player['NAME'],
                    value: player._id
                }))
            })
        });
        /**
         * This route used for compare players statistics
         * @param players Selected players id in coma separated string
         */
        router.get('/compare/:players', async function (req, res) {
            const { players = '' } = req.params;
            const playersArray = players.split(',');
            if (playersArray.length < 2) {
                return res.status(400).send({
                    message: 'Please provide at least 2 players for compare'
                });
            }
            const findQuery = {
                _id: {
                    $in: playersArray.map((_id) => ObjectId(_id))
                }
            };
            const playersData = await playersCollection.find(findQuery).toArray();
            const compareData = modelFields.map(({fieldName, displayName}) => {
                const playerDataArray = [];
                playersData.forEach(element => {
                    playerDataArray.push(element[fieldName]);
                });
                return {
                    fieldName,
                    displayName,
                    playerDataArray
                };
            })
            res.status(200).send({
                compareData
            });
        });
        return router
    };
}())
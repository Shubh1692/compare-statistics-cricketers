(function () {
    const { MongoClient } = require('mongodb');
    /**
     * This is used for connect mongo database
     */
    module.exports = async () => {
        const client = await MongoClient.connect(process.env.MONGO_URL || 'mongodb://localhost:27017'),
            db = client.db('cricketplayers');
            db.collection('players').createIndex( { ['NAME']: "text" } );
        return db;
    }
}())


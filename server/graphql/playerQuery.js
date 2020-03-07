(async function () {
    const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql'),
        PlayerModel = require('../model'),
        { playerType, comparePlayerType } = require('./playerType'),
        { modelFields } = require('../fields');
    playerQueryType = new GraphQLObjectType({
        name: 'PlayerQuery',
        fields: () => {
            return {
                players: {
                    args: {
                        search: {
                            type: GraphQLString
                        }
                    },
                    type: new GraphQLList(playerType),
                    resolve: async (root, params) => {
                        const { search } = params;
                        const findQuery = search ? { $text: { $search: search || '' } } : {};
                        const players = await PlayerModel.find(findQuery).limit(10);
                        if (!players) {
                            throw new Error('Error')
                        }
                        return players.map((player) => ({
                            label: player['NAME'],
                            value: player._id
                        }))
                    }
                },
                comparePlayers: {
                    args: {
                        players: {
                            type: new GraphQLList(GraphQLString)
                        }
                    },
                    type: new GraphQLList(comparePlayerType),
                    resolve: async (root, params) => {
                        const { players = '' } = params;
                        console.log("players", players);
                        const findQuery = {
                            _id: {
                                $in: players
                            }
                        };
                        const playersData = await PlayerModel.find(findQuery);
                        console.log(playersData)
                        const compareData = modelFields.map(({ fieldName, displayName }) => {
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
                        return compareData;
                    }
                }
            }
        }
    });
    module.exports = playerQueryType;
}())
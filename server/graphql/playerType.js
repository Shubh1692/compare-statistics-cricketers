(async function () {
    const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } = require('graphql');
    const playerType = new GraphQLObjectType({
        name: 'player',
        fields: () => {
            return {
                label: {
                    type: GraphQLString
                },
                value: {
                    type: GraphQLID
                }
            }
        }
    });
    const comparePlayerType = new GraphQLObjectType({
        name: 'comparePlayer',
        fields: () => {
            return {
                fieldName: {
                    type: GraphQLString
                },
                displayName: {
                    type: GraphQLString
                },
                playerDataArray: {
                    type: new GraphQLList(GraphQLString)
                }
            }
        }
    });
    module.exports = {
        playerType,
        comparePlayerType
    };
}())
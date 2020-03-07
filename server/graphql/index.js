(async function () {
    const { GraphQLSchema } = require('graphql'),
        playersQueryType = require('./playerQuery');
    const playersSchema = new GraphQLSchema({
        query: playersQueryType
    })
    module.exports = playersSchema;
}())
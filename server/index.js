(async function () {
    const express = require('express'),
        path = require('path'),
        cors = require('cors'),
        app = express(),
        graphqlHTTP = require('express-graphql'),
        playersSchema = require('./graphql/index');
    await require('./mongodb')()
    app.use(cors());
    app.use(express.static(path.join(__dirname, "../build")));
    /**
     * This is used set graphql route
     */
    app.use('/graphql', cors(), graphqlHTTP({
        schema: playersSchema,
        rootValue: global,
        graphiql: true
    }));
    /**
     * This is used for set react app if try to unknown route
     */
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });
    /**
     * This is used listen app server on port
     */
    app.listen(process.env.PORT || 3001, function () {
        console.log(`App is running on port ${process.env.PORT || 3001}`);
    });
}())
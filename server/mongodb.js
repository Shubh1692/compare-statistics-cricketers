(function () {
    const { connect } = require('mongoose');
    /**
     * This is used for connect mongo database
     */
    module.exports = async () => {
        await connect(process.env.MONGO_URL || 'mongodb://localhost:27017/cricketPlayers', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}())


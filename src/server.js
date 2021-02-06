// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

// Require external modules
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false
};

// Connect to DB
mongoose
    .connect('mongodb://localhost/car-graphql', options)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

module.exports = fastify;

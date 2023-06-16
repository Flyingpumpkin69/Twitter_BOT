const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey:'g230vajw2wZfFENyBEQKZrIZL',
    appSecret:'ptMTATC9kWiaKnPKEL4CefxLPTbDKrrRJPtuARxtptz6rWHX0P',
    accessToken:'1665216067717718018-kTyS4v9qaE48xknHeeAhHOzNmK5vX0',
    accessSecret:'ecoV4nQwGKOgqx0PGJkVRoCOK1qCuufgfOEnXUulzJGHt',
})

const rwClient = client.readwrite

module.exports = rwClient
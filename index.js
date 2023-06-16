const rwClient = require('./twitterClient');
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v1.tweet('Hello, this is a test!1.');
    } catch (e) {
        throw e; // throw the caught error object
    }
};

const job = new CronJob("* * * * * *", () => {
    console.log('cron job running');
    tweet();
});

job.start();

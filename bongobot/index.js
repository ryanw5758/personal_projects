const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        // change following line to tweet different things, such as grabbing from a database
        await rwClient.v1.tweet("Bongo tweet")
        console.log("successfully tweeted")
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob("0 5 * * *", () => {
    console.log('start cronjob')
    tweet()
})

job.start();
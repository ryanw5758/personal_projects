const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "00dW5Iyo1NHc0WEqxyMcvPYOi",
    appSecret: "VOGEtNp8G9vFAZyRT0fS4KBwx9g7mBcc7HjgwNQIAKdXQIc4Zb",
    accessToken: "1534966529590190080-NNmobPTnoeBt0v2BWsgg0N2NaRgbLN",
    accessSecret: "V0mePlbQKTlS1dszRokuQ8v0O50uyNaQihinU5WxFC3tv"
})

const rwClient = client.readWrite
module.exports = rwClient
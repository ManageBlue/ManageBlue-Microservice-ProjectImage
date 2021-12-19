module.exports = {
    port: process.env.PORT || 5003,
    url: process.env.URL || "http://localhost",
    dbURI: process.env.MONGODB_CLOUD_URI || 'mongodb://localhost/ManageBlue',
    bingApiKey: process.env.BING_API_KEY || 'zou-ni-defaulta',
    secret: process.env.JWT_SECRET || "local development secret"
};
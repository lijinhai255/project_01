console.log('jllllll',process.env.NODE_ENV)

switch(process.env.NODE_ENV){
    case "development":
        // console.log('jllllll')
        module.exports = require("./config/webpack.development.js")
        break;

}
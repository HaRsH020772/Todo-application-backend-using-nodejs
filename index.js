const app = require('./app');

//* setting up the enviroment configuration
require("dotenv").config();

//* connection method of mongodb
let connectionMethod = require('./config/db');

if(connectionMethod().then((data) => {
    global.db = data;
}).catch(err => console.log(err)))
{
    app.listen(process.env.PORT, () => {
        console.log(`Server is up and running at port ${process.env.PORT}`);
    })
}

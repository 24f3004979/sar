# Making DB Setup
Make mongod running into the system along with mongo setup for the project
    Initialize the basic schema for the project and import them with the mongo DB units
    
    Model Initialization files
        Initiates JS object json based schema for given dataset
        Initiate the mongo connection with the dataset
        Export the model with name

        ```
        js

        const mongos = require('mongoose');
        
        const UserSchema = new mongoose.Schema({
            // Json data structure for the given information
        })

        module.exports = mongooose.model('user', UserSchema);

        ```
Making Information flow with such models with the given framework

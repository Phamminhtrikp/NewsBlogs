const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: string, required: true},
    firstName: {type: String},
    lastName: {type: String},
    numberPhone: {type: String},
    role: {type: String, default: 'user'},

}, {timestamps: true});




module.exports = UsersSchema;
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String
},
email: {
    required: true,
    type: String
},
password: {
    required: true,
    type: String
},
phone: {
    required: true,
    type: String
},
address: {
    required: true,
    type: String
},
city: {
    required: true,
    type: String
},
state: {
    required: true,
    type: String
},
zip: {
  required: true,
  type: String
}
});
module.exports = mongoose.model("User", userSchema);
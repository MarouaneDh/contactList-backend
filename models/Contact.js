const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
});
module.exports = Contact = mongoose.model("contact", contactSchema);

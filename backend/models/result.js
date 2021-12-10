const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

resultSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

resultSchema.set("toJSON", {
  virtuals: true,
});

exports.Result = mongoose.model("Result", resultSchema);

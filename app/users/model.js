const mongoose = require("mongoose");
let usersSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus di isi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus di isi"],
    },
    password: {
      type: String,
      require: [true, "Kata sandi harus di isi"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor telepon harus di isi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", usersSchema);

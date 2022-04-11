const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;
let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus di isi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus di isi"],
      maxlength: [225, "Panjang nama harus antara 5 - 225 karakter"],
      minlength: [5, "Panjang nama harus antara 5 - 225 karakter"],
    },
    username: {
      type: String,
      require: [true, "Username harus di isi"],
      maxlength: [225, "Panjang usernama harus antara 5 - 225 karakter"],
      minlength: [5, "Panjang usernama harus antara 5 - 225 karakter"],
    },
    password: {
      type: String,
      require: [true, "Kata sandi harus di isi"],
      maxlength: [225, "Panjang password harus antara 5 - 225 karakter"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor telepon harus di isi"],
      maxlength: [13, "Panjang no hp harus antara 9 - 13 karakter"],
      minlength: [9, "Panjang no hp harus antara 9 - 13 karakter"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (error) {
      throw error;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);

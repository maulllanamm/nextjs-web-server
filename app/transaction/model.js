const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "Nama game harus di isi"],
      },
      category: {
        name: {
          type: String,
          require: [true, "Nama game harus di isi"],
        },
        _id: {
          type: String,
          require: [true, "Nama game harus di isi"],
        },
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "Nama coin harus di isi"],
      },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah coin harus di isi"],
      },
      price: {
        type: Number,
      },
    },
    historyPayment: {
      name: {
        type: String,
        require: [true, "Nama harus di isi"],
      },
      type: {
        type: String,
        require: [true, "Tipe pembayaran harus di isi"],
      },
      bankName: {
        type: String,
        require: [true, "Nama bank harus di isi"],
      },
      noRekening: {
        type: String,
        require: [true, "Nomor rekening harus di isi"],
      },
    },
    name: {
      type: String,
      require: [true, "Nama harus di isi"],
      maxlength: [225, "Panjang nama harus antara 5 - 225 karakter"],
      minlength: [5, "Panjang nama harus antara 5 - 225 karakter"],
    },
    acountUser: {
      type: String,
      require: [true, "Nama akun harus di isi"],
      maxlength: [225, "Panjang nama harus antara 5 - 225 karakter"],
      minlength: [5, "Panjang nama harus antara 5 - 225 karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: {
        type: String,
        require: [true, "Nama player harus di isi"],
      },
      phoneNumber: {
        type: Number,
        require: [true, "Nomor HP harus di isi"],
        maxlength: [13, "Panjang no hp harus antara 9 - 13 karakter"],
        minlength: [9, "Panjang no hp harus antara 9 - 13 karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transaction", transactionSchema);

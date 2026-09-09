const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Follower is required"],
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Followee is required"],
    },
  },
  {
    timestamps: true, //tells when the document was created in DB and also when it was updated for the last time
  },
);

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;

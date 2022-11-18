const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let calData = new Schema(
  {
    contactName: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    eventName: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    contactPhone: {
      type: Number,
      required: true,
      trim: true,
      default: "",
    },
    contactEmail: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    eventAddress: [
      {
        street: { type: String, required: true, trim: true, default: "" },
        city: { type: String, required: true, trim: true, default: "" },
        state: { type: String, required: true, trim: true, default: "" },
        zipcode: { type: Number, required: true },
      },
    ],
    eventTime: {
      type: Number,
      required: true,
      trim: true,
      default: "",
    },
    eventDate: {
      type: Date,
      required: true,
      trim: true,
      default: "",
    },
    eventDescription: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    eventImage: [
      {
        image: { type: String, required: false },
        refId: { type: mongoose.Types.ObjectId, required: false },
      },
    ],
    isLiked: {
      type: Boolean,
      required: false,
    },
    isOverlaped: {
      type: Boolean,
      required: false,
    },
    isApproved: {
      type: Boolean,
      required: false,
    },
    eventLink: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
  },
  { collection: "Calander" }
);

module.exports = mongoose.model("calander", calData);


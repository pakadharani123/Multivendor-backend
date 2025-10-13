const mongoose = require("mongoose");

const firmSchema = new mongoose.Schema(
  {
    firmName: {
      type: String,
      required: true,
      trim: true,
    },
    category: [
      {
        type: String,
        enum: ["veg", "non-veg"],
      },
    ],
    region: [
      {
        type: String,
        enum: ["south-indian", "north-indian", "chinese", "bakery"],
      },
    ],
    offer: {
      type: String,
      default: null,
    },
    image: {
      type: String, // store image path or URL
      default: null,
    },
    vendor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
       
      },
    ],

    varproducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      
      }],
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);



const Firm = mongoose.model("Firm", firmSchema);
module.exports = Firm;

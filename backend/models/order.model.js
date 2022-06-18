const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    contact_number: {
      type: String,
      required: false,
      trim: true
    },

    contact_details: {
      type: String,
      required: [ true, "Please provide contact_details" ],
      trim: true,
      max: 200
    },

    title: {
        type: String,
        required: c,
        trim: true,
        max: 200
    },

    date_created: {
        type: Date,
        required: [ true, "Please provide a creation date" ]
    },

    date_deadline: {
        type: Date,
        required: [ true, "Please provide a deadline" ]
    },

    status: {
        type: String,
        enum: ['Unpaid', 'Partially Paid', 'Fully Paid', 'Completed', 'Cancelled'],
        default: 'Unpaid'
    },

    price: {
        type: mongoose.Decimal128,
        required: [ true, "Please provide a price" ]
    },

    details: {
        type: String,
        required: [ true, "Please provide a price" ]
    },

    reference_images: [{
        type: String,
        required: [ true, "Please provide an image file" ],
        trim: true
    }]
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

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
        required: [ true, "Please provide title" ],
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

    ref_image: {
        type: String,
        required: [ true, "Please provide an image file" ],
        trim: true
    }
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

//More readable format of date_created
orderSchema.virtual('date_created_text')
.get(function() {
  return this.date_created.toDateString();
})

//More readable format of date_deadline
orderSchema.virtual('date_deadline_text')
.get(function() {
  return this.date_deadline.toDateString();
})

const Order = mongoose.model("Order", orderSchema);

orderSchema.methods.toPlainObjectWithUser = function(){
    if(!this.populated("client") || !this.populated("artist")){
        throw new Error("Both Artist and Client fields must be populated");
    }

    return {
        id: this._id,
        client: this.client.toPlainObject(),
        artist: this.artist.toPlainObject(),
        contact_number: this.contact_number,
        contact_details: this.contact_details,
        title: this.title,
        date_created: this.date_created.toString(),
        date_deadline: this.date_deadline.toString(),
        status: this.status,
        price: this.price.toString(),
        details: this.details,
        ref_image: `/uploads/${this.ref_image}`
    }
}

module.exports = Order;

/*
// Create a new order
exports.create = (object, next) => {
    const newOrder = new Order(object);
    newOrder.save((err, order) => {
        next(err, order);
    })
}

// Update an order
exports.updateOne = (query, newvalues, next) => {
    Order.updateOne(query, newvalues, (err, order) => {
        next(err, order);
    })
}

// Get all orders that fit the query and convert to object
exports.getAll = (query, next) => {
  Order.find(query, (err, orders) => {
    if (err) throw err;
    const orderObjects = [];
    orders.forEach((doc) => {
      orderObjects.push(doc.toObject());
    })
    next(err, orderObjects);
  })
}

// Get all orders that fit the query
exports.getMany = (query, next) => {
    Order.find(query, (err, order) => {
        next(err, order);
    })
}

// Get one order that fits the query
exports.getOne = (query, next) => {
    Order.findOne(query, (err, order) => {
        next(err, order);
    })
}
*/

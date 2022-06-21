const mongoose = require("mongoose");
const Order = require("../models/order.model");

/*MY ORDERS PAGE (CLIENT SIDE)*/
//display my orders page
module.exports.myOrders = async (req, res, next) => {
    try {
        let orders = await Order.find({client: req.userId});

        let loopPromise = ()  => {
            return new Promise ((resolve, reject) => {
                try {
                    var order_arr = [];
                    if (orders.length > 0) {
                        orders.forEach(async function(doc, i) {
                            order_arr.push(doc.toPlainObjectWithUser());
                            if (i == orders.length - 1) {
                                resolve(order_arr);
                            }
                        })
                    } else {
                        resolve(order_arr);
                    }
              } catch (e) {
                  reject([]);
              }
          })
        }

        let order_arr = await loopPromise();
        res.status(200).json({order_arr});
    } catch (e) {
        next (e);
    }
}

//display order details
module.exports.orderDetails = async (req, res, next) => {
    try {
        let order = await Order.findById(req.body.orderId);
        if(order == null){
            return res.status(404).json({ message: "Order not found"});
        }

        res.status(200).json(order.toPlainObjectWithUser());
    } catch (e) {
        next (e);
    }
}

//change order amount paid and updates status
module.exports.payOrder = async (req, res, next) => {
    try {
        let order = await Order.findById(req.body.orderId);
        if (order == null) {
            return res.status(404).end();
        }

        order.amount_paid = order.amount_paid + req.body.amount_paid
        if (order.amount_paid < order.price) {
            order.status = "Partially Paid"
        } else {
            order.status = "Fully Paid"
        }
        await order.save()
        res.status(204).end();
    } catch (e) {
        next (e);
    }
}

//create an order for an artist
module.exports.createOrder = async (req, res, next) => {
    try {
        let order = new Order {
            client: req.userId,
            artist: req.body.artistId,
            contact_number: req.body.contact_number,
            contact_details: req.body.contact_details,
            title: req.body.title,
            date_created: req.body.date_created,
            date_deadline: req.body.date_deadline,
            price: req.body.price,
            details: req.body.details,
            ref_image: req.file != undefined ? req.file.filename : undefined
        });
        await order.save();
        await order.populate('client');
        await order.populate('artist');

        res.status(201).json(order.toPlainObjectWithUser());
    } catch (e) {
        next (e);
    }
}

/*MY JOBS PAGE (ARTIST SIDE)*/
//display my jobs page
module.exports.myJobs = async (req, res, next) => {
    try {
        let orders = await Order.find({artist: req.userId});

        let loopPromise = ()  => {
            return new Promise ((resolve, reject) => {
                try {
                    var order_arr = [];
                    if (orders.length > 0) {
                        orders.forEach(async function(doc, i) {
                            order_arr.push(doc.toPlainObjectWithUser());
                            if (i == orders.length - 1) {
                                resolve(order_arr);
                            }
                        })
                    } else {
                        resolve(order_arr);
                    }
              } catch (e) {
                  reject([]);
              }
          })
        }

        let order_arr = await loopPromise();
        res.status(200).json({order_arr});
    } catch (e) {
        next (e);
    }
}

//change job details
module.exports.editJobDetails = async (req, res, next) => {
    try {
        let order = await Order.findById(req.body.orderId);
        if (order == null) {
            return res.status(404).end();
        }

        order.title = req.body.title
        order.date_deadline = req.body.date_deadline
        await order.save()
        res.status(204).end();
    } catch (e) {
        next (e);
    }
}

//updaet job status to completed or cancelled
module.exports.updateStatus = async (req, res, next) => {
    try {
        let order = await Order.findById(req.body.orderId);
        if (order == null) {
            return res.status(404).end();
        }

        order.status = req.body.status //either Completed or Cancelled
        await order.save()
        res.status(204).end();
    } catch (e) {
        next (e);
    }
}

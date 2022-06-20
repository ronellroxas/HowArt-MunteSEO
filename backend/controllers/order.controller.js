const mongoose = require("mongoose");
const Order = require("../models/order.model");

//display my orders page
module.exports.myOrders = async (req, res, next) => {
    try {

    } catch (e) {
        next (e);
    }
}

//display order details
module.exports.orderDetails = async (req, res, next) => {
    try {

    } catch (e) {
        next (e);
    }
}

//change order payment status
module.exports.payOrder = async (req, res, next) => {
    try {

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

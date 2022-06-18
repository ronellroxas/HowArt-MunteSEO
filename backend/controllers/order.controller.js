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
        let order = new Order
    } catch (e) {
        next (e);
    }
}

const OrderService = require("../Services/Order.Service.js");

const GetAllOrders = async (req, res) => {
  try {
    const orders = await OrderService.GetAllOrder();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const ConfirmOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await OrderService.ConfirmOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const ShipOrder = async (req, res) => {
  const orderId = await req.params.orderId;
  try {
    const orders = await OrderService.shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const DeliverOrder = async (req, res) => {
  const orderId = await req.params.orderId;
  try {
    const orders = await OrderService.DeliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const CancelOrder = async (req, res) => {
  const orderId = await req.params.orderId;
  try {
    const orders = await OrderService.CancelOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const DeleteOrder = async (req, res) => {
  const orderId = await req.params.orderId;
  try {
    const orders = await OrderService.DeleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  GetAllOrders,
  ConfirmOrder,
  ShipOrder,
  DeliverOrder,
  CancelOrder,
  DeleteOrder,
};

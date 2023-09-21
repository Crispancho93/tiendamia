import orderService from "../services/order.service.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders(req.params);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

import ordersDao from "../daos/ordersDao.js";

const orderService = {};

/**
 * Merge orders and items
 * @param {*} query
 * @returns
 */
orderService.getOrders = async (query) => {
  try {
    const orders = await ordersDao.getOrdersByFilter(query);
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default orderService;

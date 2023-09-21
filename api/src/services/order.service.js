import ordersDao from "../daos/ordersDao.js";

const orderService = {};

/**
 * Merge orders and items
 * @param {*} filter
 * @returns
 */
orderService.getOrders = async (filter) => {
  try {
    const orders = await ordersDao.getOrdersByFilter(filter);
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default orderService;

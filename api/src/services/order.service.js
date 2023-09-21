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
    const idsOrders = orders.map((objeto) => objeto.id).join(",");

    const items = await ordersDao.getItemsByOrder(idsOrders);

    orders.forEach((order) => {
      order.items = items.filter((x) => x.orderId == order.id);
    });

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default orderService;

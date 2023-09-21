import { fetchConn } from "./connection.js";

const ordersDao = {};

/**
 * Returns order apply filters
 * @param {} filter
 * @returns
 */
ordersDao.getOrdersByFilter = async (filter) => {
  const values = [];
  let conn;

  try {
    conn = await fetchConn();

    let query = `
    SELECT 
      id, 
      create_date createDate, 
      status, 
      cliente, 
      shipping_address shippingAddress, 
      shipping_promise shippingPromise
    FROM ordenes `;

    if (filter.status != "All") {
      query += "WHERE status = ? ";
      values.push(filter.status);
    } else {
      query += "WHERE (1=1) ";
    }

    if (filter.startDate != "null" && filter.endDate != "null") {
      query += "AND shipping_promise BETWEEN ? AND ?";

      values.push(filter.startDate);
      values.push(filter.endDate);
    }

    const rows = await conn.query(query, values);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn?.end();
  }
};

/**
 * Get items by orders
 * @param {*} filter
 * @returns
 */
ordersDao.getItemsByOrder = async (orders) => {
  let conn;

  try {
    conn = await fetchConn();

    let query = `
    SELECT 
      id, 
      order_id orderId, 
      title, 
      description, 
      url, 
      price, 
      quantity
    FROM items WHERE order_id IN(${orders})`;

    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn?.end();
  }
};

export default ordersDao;

import { fetchConn } from "./connection.js";

const ordersDao = {};

/**
 * Returns order apply filters
 * @param {} query
 * @returns
 */
ordersDao.getOrdersByFilter = async (query) => {
  const values = [];
  let conn;

  try {
    conn = await fetchConn();

    const query = `
    SELECT 
      id, 
      create_date createDate, 
      status, 
      cliente, 
      shipping_address shippingAddress, 
      shipping_promise shippingPromise
    FROM tiendamia.ordenes `;

    const rows = await conn.query(query, values);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn?.end();
  }
};

export default ordersDao;

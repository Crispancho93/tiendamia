import { createConnection } from "mariadb";

export const fetchConn = async () => {
  const conn = await createConnection({
    host: process.env.HOST,
    port: Number(process.env.PORT_BD),
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB,
  });

  return conn;
};

import React from "react";
import { Typography } from "antd";

import MyTable from "../components/MyTable";
import FilterBar from "../components/FilterBar";

const { Text } = Typography;

const Orders = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 40 }}>
          Orders details
        </Text>
      </div>
      <FilterBar />
      <MyTable />
    </>
  );
};

export default Orders;

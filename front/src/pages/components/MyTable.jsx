import { useContext, useEffect } from "react";
import { Table } from "antd";

import { fetch } from "@utils/fetch";
import { GlobalContext } from "@context/GlobalContext";

const MyTable = () => {
  const { setOrders, orders } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `orders/All/0/0`;
    const { data } = await fetch(url);
    setOrders(data);
  };

  const expandedRowRender = () => {
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Url",
        dataIndex: "url",
        key: "url",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
      },
    ];
    const data = [];
    console.log("first");
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: "CreateDate",
      dataIndex: "createDate",
      key: "createDate",
      render: (_, record) => {
        const [value] = record.createDate.split("T");
        return value;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Cliente",
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: "ShippingAddress",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
      render: (_, record) => {
        const [value] = record.shippingAddress.split("T");
        return value;
      },
    },
    {
      title: "ShippingPromise",
      dataIndex: "shippingPromise",
      key: "shippingPromise",
      render: (_, record) => {
        const [value] = record.shippingPromise.split("T");
        return value;
      },
    },
  ];
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      createDate: "Screen",
      status: "iOS",
      cliente: "10.3.4.5654",
      shippingAddress: 500,
      shippingPromise: "Jack",
    });
  }
  return (
    <Table
      rowKey={"id"}
      columns={columns}
      scroll={{ x: 1000 }}
      expandable={{ expandedRowRender }}
      dataSource={orders}
      size="small"
    />
  );
};
export default MyTable;

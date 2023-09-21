import { useContext, useEffect } from "react";
import { Table, Tag } from "antd";

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

  const expandedRowRender = (row) => {
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

    return (
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={row.items}
        pagination={false}
      />
    );
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
      render: (_, row) => {
        switch (row.status) {
          case "Approve":
            return (
              <Tag color={"green"} key={row.status}>
                {row.status}
              </Tag>
            );
          case "Cancel":
            return (
              <Tag color={"red"} key={row.status}>
                {row.status}
              </Tag>
            );
          default:
            return (
              <Tag color={"blue"} key={row.status}>
                {row.status}
              </Tag>
            );
        }
      },
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

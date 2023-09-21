import { Table } from "antd";

const MyTable = () => {
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
    },
    {
      title: "ShippingPromise",
      dataIndex: "shippingPromise",
      key: "shippingPromise",
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
      columns={columns}
      scroll={{ x: 1000 }}
      expandable={{ expandedRowRender }}
      dataSource={data}
      size="small"
    />
  );
};
export default MyTable;

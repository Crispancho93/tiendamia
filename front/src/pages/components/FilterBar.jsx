import React, { useContext } from "react";
import { Space, Select, Input, Form, Row, Col, Button } from "antd";

import { GlobalContext } from "@context/GlobalContext";
import { statusOrder } from "../data/statusOrder";
import { fetch } from "@utils/fetch";

const initialValues = {
  status: "All",
};

const FilterBar = () => {
  const { setOrders } = useContext(GlobalContext);
  const [form] = Form.useForm();

  const onSubmit = async (values) => {
    values.startDate = values.startDate || 0;
    values.endDate = values.endDate || 0;

    const url = `orders/${values.status}/${values.startDate}/${values.endDate}`;
    console.log(url);

    const { data } = await fetch(url);
    setOrders(data);
  };

  return (
    <Space style={{ marginBottom: 20 }}>
      <Form form={form} initialValues={initialValues} onFinish={onSubmit}>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={6} className="gutter-row">
            <Form.Item
              label="Status"
              labelCol={{ span: 24 }}
              name="status"
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
              ]}
            >
              <Select options={statusOrder} />
            </Form.Item>
          </Col>

          <Col xs={24} md={6} className="gutter-row">
            <Form.Item
              label="Start date"
              labelCol={{ span: 24 }}
              name="startDate"
            >
              <Input type="date" />
            </Form.Item>
          </Col>

          <Col xs={24} md={6} className="gutter-row">
            <Form.Item label="End date" labelCol={{ span: 24 }} name="endDate">
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col xs={24} md={6} className="gutter-row">
            <Button
              type="primary"
              style={{ marginTop: 40 }}
              onClick={form.submit}
            >
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </Space>
  );
};

export default FilterBar;

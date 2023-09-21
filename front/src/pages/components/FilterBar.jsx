import React from "react";
import { Space, Select, Input, Form, Row, Col, Button } from "antd";

const statesOrder = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Approve",
    label: "Approve",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
  {
    value: "Delivery",
    label: "Delivery",
  },
  {
    value: "Traveling",
    label: "Traveling",
  },
];

const initialValues = {
  estado: "All",
};

const FilterBar = () => {
  const [form] = Form.useForm();
  return (
    <Space style={{ marginBottom: 20 }}>
      <Form form={form} initialValues={initialValues}>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={4} className="gutter-row">
            <Form.Item
              label="Estado"
              labelCol={{ span: 24 }}
              name="estado"
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
              ]}
            >
              <Select
                // onChange={handleChange}
                options={statesOrder}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={4} className="gutter-row">
            <Form.Item label="Promise" labelCol={{ span: 24 }} name="promise">
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col xs={24} md={4} className="gutter-row">
            <Form.Item
              label="Start date"
              labelCol={{ span: 24 }}
              name="startDate"
            >
              <Input type="date" />
            </Form.Item>
          </Col>

          <Col xs={24} md={4} className="gutter-row">
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

import React from 'react';
import { Button, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const onFinish = (fieldsValue: any) => {
  console.log('Alex', fieldsValue);
};

const data: any = [
    {
        id: 1,
        number: 'A322AA777'
    },
    {
        id: 2,
        number: 'A322AA778'
    },
]

export const InfoForm: React.FC = () => {

    return (
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item name="name" label="Имя фамилия:">
          <Input defaultValue="Алексей Иванов"/>
    </Form.Item>
    <Form.Item label="Почта:" name="mail">
          <Input defaultValue="Alex@mail.ru"/>
    </Form.Item>
    {data.map((car: any) => {
        return (
        <>
            <Form.Item label="Номер автомобиля:" name={car.id}>
                <Input defaultValue={car.number}/>
            </Form.Item>
        </>
        )
    })}
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Изменить
      </Button>
    </Form.Item>
  </Form>
)}

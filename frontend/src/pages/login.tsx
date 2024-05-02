import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
  email?: string
  password?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Login: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Адрес почты"
      name="email"
      rules={[{ required: true, message: 'Введите вашу почту!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Пароль"
      name="password"
      rules={[{ required: true, message: 'Введите пароль!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Зайти
      </Button>
    </Form.Item>
  </Form>
)

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { PageHeader } from '../components/recycled/pageHeader';
import { PageFooter } from '../components/recycled/pageFooter';

type FieldType = {
  fullname?: string
  number?: string
  csv?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export const Pay: React.FC = () => (
    <>
    <PageHeader />
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, margin: '16px 0'}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Номер карты"
      name="number"
      rules={[{ required: true, message: 'Введите номер карты!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Фамилия Имя"
      name="fullname"
      rules={[{ required: true, message: 'Введите имя и фамилию!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="CSV код"
      name="csv"
      rules={[{ required: true, message: 'Введите csv код!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <div style={{ margin: '8px 0' }}>
      <Button type="primary" htmlType="submit" >
        Оплатить
      </Button>
      </div>
      <Button type="primary" htmlType="submit">
        Оплатить через СБП
      </Button>
    </Form.Item>
  </Form>
  <PageFooter />
  </>
)

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, notification } from 'antd';
import axios from 'axios'

type TFormType = {
  email?: string
  fullname?: string
  password?: string
  pass?: string
}

const onFinish = (values: TFormType) => {
  axios.post('http://localhost:8000/registration/registration', values, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    notification.open({
      message: 'Запрос отправлен',
      description:
        'Дождитесь подтверждения администратора',
      onClick: () => {
        console.log('Notification Clicked!')
      }
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

const onFinishFailed: FormProps<TFormType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
}

export const Registration: React.FC = () => (
  <>
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
      <Form.Item<TFormType>
        label="Адрес почты"
        name="email"
        rules={[{ required: true, message: 'Введите вашу почту!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TFormType>
        label="Полное имя"
        name="fullname"
        rules={[{ required: true, message: 'Введите полное имя!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TFormType>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<TFormType>
        label="Повторите пароль"
        name="pass"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Зарегистроваться
        </Button>
      </Form.Item>
    </Form>
  </>
)

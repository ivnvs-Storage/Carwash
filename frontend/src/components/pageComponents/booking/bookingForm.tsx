import React from 'react';
import { Button, DatePicker, Form, Input } from 'antd';

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
  // Should format date value before submit.
  console.log('Alex', fieldsValue)
  // const rangeValue = fieldsValue['range-picker'];
  // const rangeTimeValue = fieldsValue['range-time-picker'];
  // const values = {
  //   ...fieldsValue,
  //   'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
  //   'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
  //   'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
  //   'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
  //   'range-time-picker': [
  //     rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
  //     rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
  //   ],
  //   'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  // };
  // console.log('Received values of form: ', values);
};

export const BookingForm: React.FC = () => (
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Номер машины">
          <Input />
    </Form.Item>
    <Form.Item name="date-time-picker" label="Дата и время:">
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Забронировать
      </Button>
    </Form.Item>
  </Form>
);

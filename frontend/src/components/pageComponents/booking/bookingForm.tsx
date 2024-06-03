import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Form, Table, TableProps, Tag, notification } from 'antd';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

interface TBooking {
  id: number
  datetime: string
  approved: string
  user_id: boolean
}

export const BookingForm: React.FC = () => {

  const [bookings, setBookings] = useState<TBooking[]>([])
 

const columns: TableProps<TBooking>['columns'] = [
  {
    title: 'Дата',
    dataIndex: 'datetime',
    key: 'datetime',
    render: (text) => <p>{format_date(text)}</p>,
  },
  {
    title: 'Статус',
    dataIndex: 'approved',
    key: 'approved',
    render: (_, record) => (
      <>
          {record.approved 
          ? <Tag color={'green'}>
              Подтверждено
            </Tag>
          : <Tag color={'volcano'}>
              Не подтверждено
            </Tag>
            }
      </>
    )
  },
]

const format_date = (datetime: string): string => {
  return new Date(datetime).toLocaleString("ru-RU")
}

const onFinish = (fieldsValue: any) => {
  axios.post('http://localhost:8000/booking/create', {
    datetime: fieldsValue.datetime.$d,
}, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    notification.open({
      message: 'Запрос отправлен',
      description:
        'Администратор свяжется с вами для подтверждения',
      onClick: () => {
        console.log('Notification Clicked!')
      }
    })
    axios.get('http://localhost:8000/booking/fetch', { withCredentials: true }).then(r => {
      setBookings(r.data)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

  useEffect(() => {
    axios.get('http://localhost:8000/booking/fetch', { withCredentials: true }).then(r => {
      setBookings(r.data)
    })
  }, [])

  return (
  <>
    <Form
      name="time_related_controls"
      {...formItemLayout}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="datetime" label="Дата и время:">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
        <Button type="primary" htmlType="submit">
          Забронировать
        </Button>
      </Form.Item>
    </Form>
    {bookings.length > 0 
    ? <Table title={() => 'Ваши Брони:'} style={{ maxWidth: 600 }} columns={columns} dataSource={bookings} />
    : <></>
    }
  </>
)}

import React, { useEffect, useState } from 'react'
import { Space, Table } from 'antd'
import type { TableProps } from 'antd'
import axios from "axios"

interface TBooking {
  id: number
  user_id: string
  fullname: string
  datetime: string
  approved: boolean
}

const format_date = (datetime: string): string => {
  return new Date(datetime).toLocaleString("ru-RU")
}

export const ConfirmBooking: React.FC = () => {

const [bookings, setBookings] = useState<TBooking[]>([])

const approveBooking = (id: number) => {
    const value = {booking_id: id}
    axios.post('http://localhost:8000/confirm/approve', value, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    axios.get('http://localhost:8000/confirm/bookings', { withCredentials: true }).then(r => {
      setBookings(r.data)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

const deleteBooking = (id: number) => {
    const value = {booking_id: id}
    axios.post('http://localhost:8000/confirm/delbook', value, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    axios.get('http://localhost:8000/confirm/users', { withCredentials: true }).then(r => {
      setBookings(r.data)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

const columns: TableProps<TBooking>['columns'] = [
  {
    title: 'Имя Фамилия',
    dataIndex: 'fullname',
    key: 'fullname',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Время',
    dataIndex: 'datetime',
    key: 'datetime',
    render: (text) => <p>{format_date(text)}</p>,
  },
  {
    title: 'Подтвердить',
    key: 'add',
    render: (_, record) => (
      <>
        <Space size="middle">
            <a onClick={() => approveBooking(record.id)}>Подтвердить</a>
        </Space>
      </>
    )
  },
  {
    title: 'Удалить',
    key: 'delete',
    render: (_, record) => (
      <>
        <Space size="middle">
            <a onClick={() => deleteBooking(record.id)}>Удалить</a>
        </Space>
      </>
    )
  }
]

  useEffect(() => {
    axios.get('http://localhost:8000/confirm/bookings', { withCredentials: true }).then(r => {
      setBookings(r.data)
    })
  }, [])
  
return (
  <Table columns={columns} dataSource={bookings} />
)}

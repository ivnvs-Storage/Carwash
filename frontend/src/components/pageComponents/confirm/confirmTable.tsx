import React, { useEffect, useState } from 'react'
import { Space, Table } from 'antd'
import type { TableProps } from 'antd'
import axios from "axios"

interface DataType {
    id: number
    email: string
    hash_password: string
    enable: boolean
    car_ids: number
    administrator: boolean
    fullname: string
}

interface TUser {
  id: number
  email: string
  hash_password: string
  enable: boolean
  car_ids: number
  administrator: boolean
  fullname: string
}



export const ConfirmTable: React.FC = () => {

const [users, setUsers] = useState<TUser[]>([])

const confirmUser = (id: number) => {
    const value = {user_id: id}
    axios.post('http://localhost:8000/confirm/add', value, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    axios.get('http://localhost:8000/confirm/users', { withCredentials: true }).then(r => {
      setUsers(r.data)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

const deleteUser = (id: number) => {
    const value = {user_id: id}
    axios.post('http://localhost:8000/confirm/delete', value, { withCredentials: true })
  .then(function (response) {
    console.log(response)
    axios.get('http://localhost:8000/confirm/users', { withCredentials: true }).then(r => {
      setUsers(r.data)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Имя Фамилия',
    dataIndex: 'fullname',
    key: 'fullname',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Почта',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Подтвердить',
    key: 'add',
    render: (_, record) => (
      <>
        <Space size="middle">
            <a onClick={() => confirmUser(record.id)}>Подтвердить</a>
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
            <a onClick={() => deleteUser(record.id)}>Удалить</a>
        </Space>
      </>
    )
  }
]

  useEffect(() => {
    axios.get('http://localhost:8000/confirm/users', { withCredentials: true }).then(r => {
      setUsers(r.data)
    })
  }, [])
  
return (
  <Table columns={columns} dataSource={users} />
)}

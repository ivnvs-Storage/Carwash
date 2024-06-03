import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd'
import type { TableProps } from 'antd'
import axios from "axios"

interface DataType {
  id: number
  box_id: number
  number: string
  payed: boolean
  cost: number
  start_time: string
  end_time: string
}

interface TSession {
  id: number
  box_id: number
  number: string
  payed: boolean
  cost: number
  start_time: string
  end_time: string
}



export const SessionTable: React.FC = () => {

const [sessions, setSessions] = useState<TSession[]>([])

const moveToPay = () => {
  window.location.assign('http://localhost:5173/pay')
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Номер автомобиля',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Дата',
    dataIndex: 'start_time',
    key: 'start_time',
    render: (text) => <p>{format_date(text)}</p>,
  },
  {
    title: 'Цена',
    dataIndex: 'cost',
    key: 'cost',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Статус',
    key: 'payed',
    dataIndex: 'payed',
    render: (_, record) => (
      <>
          {record.payed 
          ? <Tag color={'green'}>
              Оплачено
            </Tag>
          : <Tag color={'volcano'}>
              Не оплачено
            </Tag>
            }
      </>
    ),
  },
  {
    title: 'Оплатить',
    key: 'action',
    render: (_, record) => (
      <>
      {record.payed
        ? <></>
        : <>
          {record.cost
          ?<Space size="middle">
            <a onClick={moveToPay}>Оплатить</a>
           </Space>
          : <></>} 
          </>
      }
      </>
    )
  }
]

const format_date = (datetime: string): string => {
  return new Date(datetime).toLocaleDateString("ru-RU")
}

  useEffect(() => {
    axios.get('http://localhost:8000/session/sessions', { withCredentials: true }).then(r => {
      setSessions(r.data)
    })
  }, [])
  
return (
  <>
    {sessions.length > 0
      ?<Table columns={columns} dataSource={sessions} />
      : <>Пока сеансов нет</>
    }
  </>
)}

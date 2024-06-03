import React, { useEffect, useState } from 'react';
import { Button, Form, Table, TableProps, Input } from 'antd';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  }
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

  interface DataType {
    id: number
    box_id: number
    number: string
    payed: boolean
    cost: number
    start_time: string
    end_time: string
}

export const BillForm: React.FC = () => {

    const [sessions, setSessions] = useState<TSession[]>([])

    const onFinish = (fieldsValue: any) => {
        const values = Object.keys(fieldsValue).map((key: string) => {
            return {
                session_id: Number(key),
                cost: Number(fieldsValue[key])
            }
        })
        axios.post('http://localhost:8000/bill/create', { data: values}, 
        { withCredentials: true })
        .then(function (response) {
            console.log(response)
            axios.get('http://localhost:8000/bill/fetch', { withCredentials: true }).then(r => {
                setSessions(r.data)
      })
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    const columns: TableProps<DataType>['columns'] = [
        {
          title: 'Номер автомобиля',
          dataIndex: 'number',
          key: 'number',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Дата начала',
          dataIndex: 'start_time',
          key: 'start_time',
          render: (text) => <p>{format_date(text)}</p>,
        },
        {
            title: 'Дата окончания',
            dataIndex: 'end_time',
            key: 'start_time',
            render: (text) => <p>{format_date(text)}</p>,
          },
        {
          title: 'Цена',
          key: 'bill',
          dataIndex: 'bill',
          render: (_, record) => (
            <>
                <Form.Item
                name={record.id}
                >
                    <Input />
                </Form.Item>
            </>
          ),
        },
      ]
      
      const format_date = (datetime: string): string => {
        return new Date(datetime).toLocaleString("ru-RU")
      }

    useEffect(() => {
      axios.get('http://localhost:8000/bill/fetch', { withCredentials: true }).then(r => {
        setSessions(r.data)
      })
    }, [])

    return (
    <>
        
            {sessions.length > 0
            ? 
            <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
        style={{ maxWidth: 1000 }}
        >
            <Table columns={columns} dataSource={sessions} />
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Подтвердить
                </Button>
            </Form.Item>
            </Form>
            : <p>Новых сеансов нет</p>
            }
    </>
)}

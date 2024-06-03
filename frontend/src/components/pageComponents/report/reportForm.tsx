import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Form, Checkbox, Table, Tag, TableProps } from 'antd';
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

export const ReportForm: React.FC = () => {

    const [boxIds, setBoxids] = useState<number[]>([])
    const [sessions, setSessions] = useState<TSession[] | null>(null)

    const onFinish = (fieldsValue: any) => {
        axios.post('http://localhost:8000/report/create', {
            start_time: fieldsValue.startTime.$d,
            end_time: fieldsValue.endTime.$d,
            box_ids: [1,2,3]
        }, { withCredentials: true })
        .then(function (response) {
            setSessions(response.data)
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
      ]
      
      const format_date = (datetime: string): string => {
        return new Date(datetime).toLocaleDateString("ru-RU")
      }

    useEffect(() => {
      axios.get('http://localhost:8000/report/fetch', { withCredentials: true }).then(r => {
        setBoxids(r.data)
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
    <Form.Item name="startTime" label="Начальное время:"
    rules={[{ required: true, message: 'Введите дату и время!' }]}
    >
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="endTime" label="Конечное время:"
    rules={[{ required: true, message: 'Введите дату и время!' }]}
    >
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    {boxIds.map((boxId: number) => (
        <Form.Item name={boxId} label={`Бокс ${boxId}`}>
            <Checkbox defaultChecked={true}/>
        </Form.Item>
    ))}
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Получить отчет
      </Button>
    </Form.Item>
  </Form>
  {sessions
  ? <Table columns={columns} dataSource={sessions} />
  : <></>
  }
  </>
)}

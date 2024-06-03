import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import axios from 'axios'

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

interface TUserInfo {
  email: string
  fullname: string
  car_numbers: string[]
}

export const InfoForm: React.FC = () => {

  const [userData, setUserData] = useState<TUserInfo|null>(null)

  const onFinish = (fieldsValue: any) => {
    axios.post('http://localhost:8000/user/update', fieldsValue, { withCredentials: true })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
  }

  const addCar = () => {
    if (userData)
      setUserData({...userData, car_numbers: [...userData.car_numbers, '']})
  }

  useEffect(() => {
    axios.get('http://localhost:8000/user/info', { withCredentials: true }).then(r => {
      setUserData(r.data)
    })
  }, [])

    return (
      <>
      {userData ? 
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Имя фамилия:" name="fullname">
          <Input defaultValue={userData?.fullname}/>
    </Form.Item>
    <Form.Item label="Почта:" name="email">
          <Input defaultValue={userData?.email}/>
    </Form.Item>
    {userData?.car_numbers?.map((number: string, index: number) => {
        return (
        <>
        {number 
        ? <Form.Item label="Номер автомобиля:" name={`car_${number}`}>
            <Input defaultValue={number}/>
          </Form.Item>
          : <Form.Item label="Номер автомобиля:" name={`new_${index}`}>
              <Input defaultValue={number}/>
            </Form.Item>
        }
            
        </>
        )
    })}
    <Form.Item wrapperCol={{ xs: { span: 4, offset: 0 }, sm: { span: 4, offset: 8 } }}>
      <Button type="primary" onClick={addCar}>
        Добавить автомобиль
      </Button>
    </Form.Item>
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        Изменить
      </Button>
    </Form.Item>
  </Form>
  : <></>
}
  </>
)}

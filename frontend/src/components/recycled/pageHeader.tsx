import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { changePage } from '../../routes/routes'
import axios from 'axios';

const { Header } = Layout

interface TTab {
  key: number,
  label: string
}


export const PageHeader: React.FC = () => {

  const [items, setItems] = useState<TTab[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/auth/me', { withCredentials: true }).then(r => {
      if (r.data) {
        r.data.administrator 
        ? setItems([{
            key: 1,
            label: "Сеансы",
            },
            {
              key: 2,
              label: "Забронировать",
            },
            {
              key: 3,
              label: "Мои Данные",
            },
            {
              key: 4,
              label: "Отчеты",
            },
            {
              key: 5,
              label: "Подтвердить",
            },
            {
              key: 6,
              label: "Выставить счет",
            },
            {
              key: 7,
              label: "Выйти",
            },
          ])
        : setItems([{
              key: 1,
              label: "Сеансы",
            },
            {
              key: 2,
              label: "Забронировать",
            },
            {
              key: 3,
              label: "Мои Данные",
            },
            {
              key: 7,
              label: "Выйти",
            },
          ])
      } else {
        window.location.assign('http://localhost:5173/login')
      }
    })
  }, [])

  return (
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={changePage}
        />
      </Header>
  )
}

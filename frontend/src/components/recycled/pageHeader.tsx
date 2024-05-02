import React from 'react';
import { Layout, Menu } from 'antd';
import { changePage } from '../../routes/routes'

const { Header } = Layout;

const items = [
    {
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
]


export const PageHeader: React.FC = () => {

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

import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { ConfirmTable } from './confirmTable'
import { ConfirmBooking } from './confirmBooking'

const { Content } = Layout


export const ConfirmContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()


  return (
    <>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Новые пользователи:</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ConfirmTable />
        </div>
      </Content>
      <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Не подтвежденные брони:</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <ConfirmBooking />
      </div>
    </Content>
  </>
  )
}

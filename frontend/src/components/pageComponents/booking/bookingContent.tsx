import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { BookingForm } from '../../pageComponents/booking/bookingForm'

const { Content } = Layout


export const BookingContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Забронировать</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <BookingForm />
        </div>
      </Content>
      )
}

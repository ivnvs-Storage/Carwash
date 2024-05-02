import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { InfoForm } from '../../pageComponents/info/infoForm'

const { Content } = Layout


export const InfoContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Ваши данные:</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <InfoForm />
        </div>
      </Content>
  )
}

import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { SessionTable } from '../../pageComponents/sessions/sessionTable'

const { Content } = Layout


export const SessionContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Ваши сеансы:</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <SessionTable />
        </div>
      </Content>
  )
}

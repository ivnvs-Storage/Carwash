import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout


export const PageFooter: React.FC = () => {

  return (
      <Footer style={{ textAlign: 'center' }}>
        X-Wash ©{new Date().getFullYear()} Created by Alexey Ivanov
      </Footer>
  )
}

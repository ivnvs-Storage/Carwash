import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { ConfirmContent } from '../components/pageComponents/confirm/confirmContent'


export const Confirm: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <ConfirmContent />
      <PageFooter />
    </Layout>
  )
}

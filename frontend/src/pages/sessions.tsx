import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { SessionContent } from '../components/pageComponents/sessions/sessionContent'


export const Sessions: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <SessionContent />
      <PageFooter />
    </Layout>
  )
}

import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { BillContent } from '../components/pageComponents/bill/billContent'


export const Bill: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <BillContent />
      <PageFooter />
    </Layout>
  )
}

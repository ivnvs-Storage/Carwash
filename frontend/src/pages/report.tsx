import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { ReportContent } from '../components/pageComponents/report/reportContent'


export const Report: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <ReportContent />
      <PageFooter />
    </Layout>
  )
}
import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { InfoContent } from '../components/pageComponents/info/infoContent'


export const Info: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <InfoContent />
      <PageFooter />
    </Layout>
  )
}

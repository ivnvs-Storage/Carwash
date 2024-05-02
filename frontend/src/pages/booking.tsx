import React from 'react'
import { Layout } from 'antd'
import { PageHeader } from '../components/recycled/pageHeader'
import { PageFooter } from '../components/recycled/pageFooter'
import { BookingContent } from '../components/pageComponents/booking/bookingContent'


export const Booking: React.FC = () => {

  return (
    <Layout>
      <PageHeader />
      <BookingContent />
      <PageFooter />
    </Layout>
  );
};

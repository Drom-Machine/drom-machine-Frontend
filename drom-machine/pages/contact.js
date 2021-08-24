import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";

export default function Contact() {
  return (
    <section>
      <h2>Contact Page</h2>
      
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";

export default function About() {
  return (
    <section>
      <h2>Layout Example (About)</h2>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
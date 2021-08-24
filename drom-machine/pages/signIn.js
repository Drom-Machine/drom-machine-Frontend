import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";

export default function SignIn() {
    return (
      <section>
        <h2>Sign In Page</h2>
      </section>
    )
}

SignIn.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
}
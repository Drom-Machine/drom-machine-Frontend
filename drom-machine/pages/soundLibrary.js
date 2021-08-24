import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";

export default function SoundLibrary() {
    return (
      <section>
        <h2>Sound Library</h2>
      </section>
    )
}

SoundLibrary.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
}
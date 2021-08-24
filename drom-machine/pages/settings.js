import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";


export default function Settings() {
    return (
        <section>
        <h2>Settings</h2>
        
        </section>
    )
}

Settings.getLayout = function getLayout(page) {
    return (
        <Layout>
        <Sidebar />
        {page}
        </Layout>
    )
}
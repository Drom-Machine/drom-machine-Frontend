import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react";

export default function Journeys() {
    return (
        <section>
        <h2>Journeys</h2>
        
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
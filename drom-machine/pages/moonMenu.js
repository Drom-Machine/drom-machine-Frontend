import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Menu from '../components/Menu/menu';

export default function MoonMenu() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/:path(menu)">
              <Menu
                sounds_Button="../sounds-button-1@1x.png"
                stories_Button="../stories-button-1@1x.png"
                journey_Button="../journey-button-1@1x.png"
                scenes_Button="../scenes-button-1@1x.png"
                moon_Icon="../moon-icon-2@1x.png"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
}



MoonMenu.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
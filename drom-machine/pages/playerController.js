import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import styled from "styled-components";


import SceneController from "./components/SceneController/sceneController";

function PlayerController() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sceneController)">
          <SceneController {...sceneControllerData} />
        </Route>
      </Switch>
    </Router>
  );
}

// export default PlayerController;
// const sceneControllerData = {
//     backarrowbutton: "../backarrowbutton@1x.png",
//     sceneplaylisttext: "../sceneplaylisttext@1x.png",
//     text3: "Audio Description",
//     text4: "Abandoned Apartment",
//     albumcover: "../albumcover@1x.png",
//     text1: "01:20",
//     text2: "28:26",
//     rangesliderbox: "../rangesliderbox@1x.png",
//     audiobuttonbackwards: "../audiobuttonbackwards@1x.png",
//     audiobuttonplay: "../audiobuttonplay@1x.png",
//     audiobuttonforward: "../audiobuttonforward@1x.png",
//     halfmoon_Return_Button: "../halfmoon-return-button-1@1x.png",
// };


PlayerController.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
}
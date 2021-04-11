import React from "react"
import { Helmet } from "react-helmet"

import { container, centerCenter } from "./index.module.css"

export default function Home() {
  return (
    <div>
      <Helmet title="Jonathan Fung | Developer">
        <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet"></link>
      </Helmet>

      <div>
        <div className={container}>
          <div className={centerCenter}>Only in extraordinary times can we be extraordinary people</div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "'Poiret One', cursive", fontSize: "24px" }}>Coming soon!</div>
      </div>
    </div>
  )
}

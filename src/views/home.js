import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Group Designer</title>
        <meta property="og:title" content="Senior Group Designer" />
      </Helmet>
    </div>
  )
}

export default Home

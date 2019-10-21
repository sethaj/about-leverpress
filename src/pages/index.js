import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">about</Link>
    <br />
    <Link to="/about">about</Link>
  </Layout>
)

export default IndexPage

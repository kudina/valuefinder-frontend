import React from 'react'
import Layout from '../../component/Layout'
import MainNav from '../../component/MainNav'
import First_pane from './First_pane'
import Second_pane from './Second_pane'
import Third_pane from './Third_pane'
import Fourth_pane from './Fourth_pane'
import Footer  from '../../component/Footer'

const About = () => {
  return (
    <Layout  >
        <MainNav />
        <First_pane />
        <Second_pane />
        <Fourth_pane />
       <Third_pane />
       <Footer />
    </Layout>
  )
}

export default About
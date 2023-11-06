import React from 'react'
import Layout from '../../component/Layout'
import MainNav from '../../component/MainNav'
import First_pane from './First_pane'
import Second_pane from './Second_pane'

const About = () => {
  return (
    <Layout >
        <MainNav />
        <First_pane />
        <Second_pane />
       
    </Layout>
  )
}

export default About
import React from 'react'
import MainNav from '../../component/MainNav'



import 'reactjs-popup/dist/index.css';
import './../../index.css';
import { Link } from 'react-router-dom';
import Second_Pane from './Blocks/Second_Pane';
import Layout from '../../component/Layout';
import First_Pane from './Blocks/First_Pane';
import Third_pane from './Blocks/Third_pane';
import Fourth_pane from './Blocks/Fourth_pane';
import Fifth_pane from './Blocks/Fifth_pane';




const Index = () => {

 
  return (
    <div className=''>
    
        <Layout>
        <MainNav />
         <First_Pane />
         <Second_Pane />
         <Third_pane />
         <Fourth_pane />
         <Fifth_pane />
 </Layout>
     


    </div>
  )
}

export default Index
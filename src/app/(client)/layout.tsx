"use client"
import React from "react"

import Header from "./_component/header/header"
import Footer from "./_component/footer"

const Layout = ({
    children, 
  }: {
    children: React.ReactNode
  }) =>{

    return (
        <div>
         <Header/>
         <div style={{paddingTop : '90px'}}>
           {children}
         </div>
         <Footer/>
        </div>
    )
}

export default Layout;
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
         {children}
         <Footer/>
        </div>
    )
}

export default Layout;
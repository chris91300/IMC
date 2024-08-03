
import React from 'react'
import LinkToGit from './components/LinkToGit'
import LinkToPortfolio from './components/LinkToPortfolio'
import Author from './components/Author'
import Border from './components/Border'



function Footer() {
  return (
    <footer className='flex flex-col md:flex-row items-center justify-center gap-6 bg-black py-12'>
        <Author />    
        <Border />    
        <LinkToGit />
        <Border />  
        <LinkToPortfolio />
    </footer>
  )
}

export default Footer
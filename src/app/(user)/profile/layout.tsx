'use client'

import Footer from '../../_components/ui/Footer'
import Header from '../../_components/ui/Header'

const Layout = ({ banner }) => {
  return (
    <div>
      <Header type={'default'}></Header>
      <div>{banner}</div>
      <div className="flex h-[500px] w-[1423px] bg-blue-secondary"></div>
      <Footer></Footer>
    </div>
  )
}

export default Layout

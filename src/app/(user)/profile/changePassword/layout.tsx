'use client'

import Banner from "@/app/_components/banner/Banner"
import Layout from "@/app/layout"

const PageWithLayout = () => {
  return (
    <Layout
      banner={
        <div>
          <Banner type={1} />
        </div>
      }
    >
    </Layout>
  )
}

export default PageWithLayout

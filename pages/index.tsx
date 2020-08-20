import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import Title from '@components/TitlePoster'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://japaneseposters-next.vercel.app/api/avo'
  )
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <Title />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage

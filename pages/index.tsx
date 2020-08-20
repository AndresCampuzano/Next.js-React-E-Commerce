import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import Title from '@components/TitlePoster'
import ProductList from '@components/ProductList/ProductList'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <Title />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage

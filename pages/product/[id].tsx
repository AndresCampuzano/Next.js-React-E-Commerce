import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// For dynamic pages, we must use getStaticProps, and getStaticPaths in order to render dynamic pages.

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://japaneseposters-next.vercel.app/api/avo'
  )
  const { data: productList }: TAPIAvoResponse = await response.json()
  const paths = productList.map((item) => ({
    params: {
      id: item.id,
    },
  }))
  return {
    paths: paths,
    // Incremental static generation
    // 404 for everything else.
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://japaneseposters-next.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? 'Loading...' : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage

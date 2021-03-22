import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  // console.log('articles = ', articles)
  return (
    <>
      <Head>
        <title>Next Crash - Home</title>
        <meta name="keywords" content="Next, React, Web Development" />
      </Head>
      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
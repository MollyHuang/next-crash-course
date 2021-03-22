import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Meta from '../components/Meta';

export default function Home({ articles }) {
  // console.log('articles = ', articles)
  return (
    <>
      <Meta />
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
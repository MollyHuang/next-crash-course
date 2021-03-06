//sfc + tab
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { server } from '../../../config'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'><a>Go Back</a></Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json()

  return {  // will be passed to the page component as props
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json()

  const paths = articles.map(article => ({ params: { id: article.id.toString() } }))

  return {  // will be passed to the page component as props
    paths,
    fallback: false
  }
}

export default article;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { articles } from '../../../data'

export default ({ query: { id } }, res) => {
  //export default (req, res) => {
  // req.query.id
  // res.status(200).json(articles)
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  }
  else {
    res.status(404).json({ message: `Article with the id of ${id} is not found` })
  }
}

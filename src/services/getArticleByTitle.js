import { getArticles } from './getArticles'

export async function getArticleByTitle (title) {
  const articles = await getArticles()
  return articles.find(article => article.title === title)
}

import { getArticles } from './getArticles'

export async function getLastArticle () {
  const articles = await getArticles()
  return articles[0]
}

import { useEffect, useState } from 'react'
import { getArticleByTitle } from '../services/getArticleByTitle'

export function useArticleByTitle ({ title }) {
  const [article, setArticle] = useState({})

  useEffect(() => {
    getArticleByTitle(title).then(setArticle)
  }, [title])

  return article
}

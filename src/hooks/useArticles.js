import { useEffect, useState } from 'react'
import { getArticles } from '../services/getArticles'

export function useArticles () {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles().then(setArticles)
  }, [])

  return articles
}

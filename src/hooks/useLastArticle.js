import { useEffect, useState } from 'react'
import { getLastArticle } from '../services/getLastArticle'

export function useLastArticle () {
  const [lastArticle, setLastArticle] = useState({})

  useEffect(() => {
    getLastArticle().then(setLastArticle)
  }, [])

  return lastArticle
}

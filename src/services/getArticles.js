import { BASE_API_URL } from '../config'

export function getArticles () {
  return fetch(`${BASE_API_URL}/posts?full=true`)
    .then(res => res.json())
    .then(data => data)
}

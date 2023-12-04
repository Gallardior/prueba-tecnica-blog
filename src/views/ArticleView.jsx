import { useParams } from 'wouter'
import { Article } from '../components/Articles/Article'
import { CommentsArea } from '../components/Comments/CommentsArea'
import { ArticleHeader } from '../components/Articles/ArticleHeader'
import { useArticleByTitle } from '../hooks/useArticleByTitle'
import { ScrollToTop } from '../components/ScrollToTop'

export function ArticleView () {
  const { title } = useParams()
  const article = useArticleByTitle({ title: decodeURI(title) })

  return (
    <section className='u-container py-28'>
      <ScrollToTop />
      {
        article &&
          <>
            <ArticleHeader
              author={article?.author_name}
              authorAvatar={article?.author_avatar}
              date={article?.formatted_date}
              title={article?.title}
            />
            <Article content={article?.content} />
            <CommentsArea />
          </>
      }
      {
        !article &&
          <section className='grid place-content-center min-h-screen'>
            <h2 className='font-bold text-2xl md:text-5xl text-neutral-900 dark:text-neutral-200'>404</h2>
          </section>
}

    </section>
  )
}

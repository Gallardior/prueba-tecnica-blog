import { Card } from './Card'
import { CardLarge } from './CardLarge'

export function ListOfArticles ({ articles = [] }) {
  return (
    <main className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6'>
      {
        articles.map((article, i) => {
          if (i === 3 || i === 9) {
            return (
              <CardLarge
                key={i}
                title={article.title}
                img={article.featured_image_url}
                imgAlt={article.featured_image_title}
                description={article.short_description}
                comments={article.comments_count}
                date={article.formatted_date}
              />
            )
          }
          return (
            <Card
              key={i}
              title={article.title}
              img={article.featured_image_url}
              imgAlt={article.featured_image_title}
              description={article.short_description}
              comments={article.comments_count}
              date={article.formatted_date}
            />
          )
        })
      }
    </main>
  )
}

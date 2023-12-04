import { useLastArticle } from '../../hooks/useLastArticle'
import { CardHero } from './CardHero'

export function Hero () {
  const lastArticle = useLastArticle()

  return (
    <section className='u-container pt-28 pb-16'>
      <header className='mb-8'>
        <h3 className='mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-white'>Discover Latest Stories 💡</h3>
        <p className='text-base md:text-xl text-neutral-500 dark:text-neutral-400'>Follow us and share our posts with the world.</p>
      </header>
      <main className='relative grid md:grid-cols-3'>
        <CardHero
          title={lastArticle.title}
          author={lastArticle.author_name}
          authorAvatar={lastArticle.author_avatar}
          date={lastArticle.formatted_date}
          comments={lastArticle.comments_count}
        />
        <aside className='w-full md:col-start-2 md:col-span-2'>
          <img src='photo.jpg' className='rounded-xl' alt={lastArticle.featured_image_title} />
        </aside>
      </main>
    </section>
  )
}

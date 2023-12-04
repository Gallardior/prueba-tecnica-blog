import { Hero } from '../components/Home/Hero'
import { ListOfArticles } from '../components/Articles/ListOfArticles'
import { useArticles } from '../hooks/useArticles'
import { ScrollToTop } from '../components/ScrollToTop'

export function Home () {
  const articles = useArticles()

  return (
    <>
      <ScrollToTop />
      <Hero />
      <section className='u-container py-16'>
        <header className='mb-8'>
          <h3 className='mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-white'>Latest articles</h3>
          <p className='text-base md:text-xl text-neutral-500 dark:text-neutral-400'>I'm just a guy talking about technology.</p>
        </header>
        <ListOfArticles articles={articles} />
      </section>
    </>
  )
}

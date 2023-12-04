import { Route, Switch } from 'wouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ArticleView } from './views/ArticleView'
import { Home } from './views/Home'

function App () {
  return (
    <main className='bg-white dark:bg-[#111827] bg-opacity-25'>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/article/:title'>
          <ArticleView />
        </Route>
        <Route>
          <section className='grid place-content-center min-h-screen'>
            <h2 className='font-bold text-2xl md:text-5xl text-neutral-900 dark:text-neutral-200'>404</h2>
          </section>
        </Route>
      </Switch>
      <Footer />
    </main>
  )
}

export default App

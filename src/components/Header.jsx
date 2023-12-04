import { Link } from 'wouter'
import { ToggleTheme } from './ToggleTheme'

export function Header () {
  return (
    <header className='fixed inset-x-0 top-0 z-20 bg-white dark:bg-[#0E131F]'>
      <section className='mx-auto max-w-5xl px-5 border-b border-dotted border-gray-200 dark:border-gray-700'>
        <article className='flex justify-between items-center py-5 z-20 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg'>
          <Link href='/' className='flex items-center gap-4'>
            <picture className='bg-white ring-2 ring-offset-2 ring-gray-600 dark:ring-offset-gray-800 dark:ring-gray-500 rounded-full'>
              <img src='/user.jpg' alt='Alejandro Gonzales' loading='lazy' className='block object-cover object-top w-10 h-10 rounded-full' />
            </picture>
            <h3 className='font-semibold text-lg whitespace-nowrap text-slate-600 dark:text-slate-300'>
              Ale González
            </h3>
          </Link>
          <ToggleTheme />
        </article>
      </section>
    </header>

  )
}

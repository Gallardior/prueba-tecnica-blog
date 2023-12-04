import { Link } from 'wouter'

export function Card ({ title, description, img, imgAlt, comments, date }) {
  return (
    <Link href={`/article/${title}`} className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'>
      <picture>
        <img
          className='rounded-t-lg md:h-52 w-full object-cover'
          src={img || '/photo.jpg'}
          alt={imgAlt}
        />
      </picture>
      <main className='p-5 grid gap-3'>
        <header className='flex gap-3'>
          <button className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full relative my-1 text-[10px] sm:text-xs  text-green-800 bg-green-100 hover:bg-green-800'>
            Test
          </button>
          <button className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full relative my-1 text-[10px] sm:text-xs  text-purple-800 bg-purple-100 hover:bg-purple-800'>
            Test
          </button>
        </header>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{title}</h5>
        <p className='font-normal text-gray-700 dark:text-gray-400' style={{ textWrap: 'balance' }}>
          {
            description.length > 100
              ? description.slice(0, 250) + '...'
              : description
          }
        </p>
        <p className='truncate text-xs text-gray-500 dark:text-gray-400'>
          {date}
        </p>
        <footer className='flex gap-3'>
          <button type='button' className='text-xs text-neutral-100 dark:text-white bg-neutral-800 dark:bg-gray-800 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-100 dark:hover:text-red-500 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 border border-gray-100 shadow-md'>
            <i className='fa-regular fa-heart mr-3' />
            95
          </button>
          <button type='button' className='text-xs text-neutral-100 dark:text-white bg-neutral-800 dark:bg-gray-800 hover:bg-sky-100 hover:text-sky-500 dark:hover:bg-sky-100 dark:hover:text-sky-500 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2.5 dark:focus:ring-gray-700 dark:border-gray-700 border border-gray-100 shadow-md'>
            <i className='fa-regular fa-comment mr-3' />
            {comments}
          </button>
        </footer>
      </main>
    </Link>
  )
}

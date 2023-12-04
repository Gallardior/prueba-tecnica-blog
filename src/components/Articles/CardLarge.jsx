import { Link } from 'wouter'

export function CardLarge ({ title, description, img, imgAlt, comments, date }) {
  return (
    <Link href={`/article/${title}`} className='lg:col-span-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <img
        className='object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg max-h-80'
        src={img || '/photo.jpg'}
        alt={imgAlt}
      />
      <main className='flex flex-col justify-between p-4 leading-normal'>
        <header className='flex gap-2'>
          <button href='#' className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full relative my-1 text-[10px] sm:text-xs  text-green-800 bg-green-100 hover:bg-green-800'>
            Test
          </button>
          <button href='#' className='transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full relative my-1 text-[10px] sm:text-xs  text-purple-800 bg-purple-100 hover:bg-purple-800'>
            Test
          </button>
        </header>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5' style={{ textWrap: 'balance' }}>
          {description}
        </p>
        <p className='truncate text-xs text-gray-500 dark:text-gray-400 mb-3'>
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

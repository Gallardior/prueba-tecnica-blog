export function ArticleHeader ({ author, authorAvatar, date, title }) {
  return (
    <header className='mb-4 lg:mb-6 not-format'>
      <address className='flex items-center mb-6 not-italic'>
        <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
          <img className='mr-4 w-16 h-16 rounded-full' src={authorAvatar} alt='Author' />
          <div>
            <a href='#' rel='author' className='text-xl font-bold text-gray-900 dark:text-white'>
              {author}
            </a>
            <p className='text-base text-gray-500 dark:text-gray-400'>
              {date}
            </p>
          </div>
        </div>
      </address>
      <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
        {title}
      </h1>
    </header>

  )
}

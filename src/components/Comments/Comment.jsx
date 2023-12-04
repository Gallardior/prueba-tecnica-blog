export function Comment ({ isReply = false }) {
  const styles = !isReply
    ? 'p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900'
    : 'p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900'

  return (
    <article className={styles}>
      <header className='flex justify-between items-center mb-2'>
        <section className='flex items-center'>
          <figure className='inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white'>
            <img
              className='mr-2 w-6 h-6 rounded-full'
              src='/user.jpg'
              alt='Michael Gough'
            />
            <figcaption>
              Alejandro Gonzáles
            </figcaption>
          </figure>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Mar. 12, 2022
          </p>
        </section>
        <button
          className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          type='button'
        >
          <i className='fa-solid fa-ellipsis' />
        </button>
      </header>
      <p className='dark:text-neutral-300'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, assumenda!
      </p>
      <footer className='flex items-center mt-4 space-x-4'>
        <button
          type='button'
          className='flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400'
        >
          <i className='fa-regular fa-comment mr-2' />
          Responder
        </button>
      </footer>
    </article>
  )
}

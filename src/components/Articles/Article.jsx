export function Article ({ content }) {
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: content }} className='min-h-screen mb-6 lg:mb-10 prose prose-neutral xl:prose-lg dark:prose-invert prose-a:hover:text-blue-500' />
    </>
  )
}

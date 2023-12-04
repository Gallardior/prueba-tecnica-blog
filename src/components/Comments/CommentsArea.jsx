import { CommentForm } from './CommentForm'
import { Comment } from './Comment'

export function CommentsArea () {
  return (
    <section>
      <header className='mb-6'>
        <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>Discussion (20)</h2>
      </header>
      <CommentForm />
      <Comment />
      <Comment isReply />
      <Comment />
    </section>
  )
}

import NewPostForm from '../../components/posts/NewPostForm'

export default function NewPost() {

  const publishPost = (data) => {
    console.log(data)
  }

  return (
    <div className='container mx-auto p-2'>
      <NewPostForm publishPost={publishPost}/>      
    </div>
  )
}

import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../../components/posts/Card'

const Post = () => {
  
  return (
  <>
    <h1 className='max-w-md text-2xl text-gray-700 ml-6'>Info about First title</h1>
    <Card title='First title' disc='Doomer looks sad'/>
  </>
  );
}

export default Post;

import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Card from '../../components/posts/Card'
import gim from '../../components/posts/5a8.png'

export default function Home({posts}) {
  
  const router = useRouter();
  const [loadedData, setLoadedData] = useState([])
  
  console.log('posts ', posts)
  const DATA = [
    {
      id: 1,
      title: 'First title',
      img: {gim},
      disc: 'Doomer looks sad here'
    },
    {
      id: 2,
      title: 'Cange',
      img: {gim},
      disc: 'Doomer looks sad here'
    },
    {
      id: 3,
      title: 'Whatever title',
      img: {gim},
      disc: 'Doomer looks sad here'
    },
  ]
  
  // useEffect(() => {
  //   // send a get request to api
  //   setLoadedData(DATA)
  // }, [])

  // const takeMeTo = () => {
  //   router.push('/posts/' + id )    
  // }

  return (
    <>
      <div className=''>
        <ul className='posts flex flex-row wrap space-x-6'>
          {posts.map(item => (
            <Link href={ `/posts/${item.id}` } key={item.id}>
              <Card id={item.char_id} title={item.name} img={item.img} disc={item.nickname} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {

  const res = await fetch('https://www.breakingbadapi.com/api/characters')
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  } ;
}

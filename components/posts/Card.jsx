import Image from 'next/image'
import gim from './5a8.png'

const Card = ({id, title, img, disc}) => {
  
  return (
  <>
    <div className='flex flex-col items-center justify-cente space-y-6 p-2 rounded shadow-lg cursor-pointer'>
      <Image className='rounded-t'
        src={gim}
        alt='Picture'
        width={200}
        height={200}
        priority
      />
      <div className='flex flex-col items-center justify-center space-y-2'>
        <h1 className='max-w-md text-xl text-gray-800'>{title}</h1>
        <p className='max-w-xl text-md text-gray-700'>{disc}</p>
      </div>
    </div>
  </>
  );
}

export default Card; 

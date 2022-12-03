import { useRef } from "react";

const NewPostForm = ({publishPost}) => {
  
  const titleRef  = useRef();
  const descRef   = useRef();
  const imageRef  = useRef();

  const submitListener = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const desc  = descRef.current.value;
    const image = imageRef.current.value;
    
    let data = {
      title,
      desc,
      image
    }

    publishPost(data);
  }

  return (
    <form method='post' className='flex flex-wrap flex-col items-center justify-center' onSubmit={submitListener}>
      <div className="mb-6 md:w-1/2">
        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-gray-700 dark:text-green-500">Title</label>
        <input type="text" ref={titleRef} id="username-success" className="border border-gray-500 text-green-900 placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green" />
        </div>
      <div className="mb-6 md:w-1/2">
        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-gray-700 dark:text-green-500">Description</label>
        <textarea ref={descRef} placeholder="Your title description goes here" type="text" id="username-success" className="border border-gray-500 text-green-900 placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" ></textarea>
      </div>
      <div className="mb-6 md:w-1/2">
        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-gray-700 dark:text-green-500">Image</label>
        <input ref={imageRef} placeholder="Your title description goes here" type='file' id="username-success" className="placeholder-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" />
      </div>
      <input type='submit' value='Publish' className='border border-gray-700 text-gray-700 rounded-lg p-1 px-4 cursor-pointer hover:text-white hover:bg-gray-700 duration-200 ease-in-out'/>
    </form>
  );
}

export default NewPostForm;

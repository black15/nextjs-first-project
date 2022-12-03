import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {

  return(
    <>
      <Header />    
      <div className='container mx-auto p-2'>
        <Component {...pageProps} />
      </div>
    </>
  ) 
}

export default MyApp

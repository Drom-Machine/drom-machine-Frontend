import '../styles/globals.css';
import Link from "next/link";



function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  
  return getLayout(
    
      <>
      
      <nav>

        <div>

          <Link href="/">

          <a>Menu</a>

          </Link>

        </div>

      </nav>

          <main>

              <Component {...pageProps} />

          </main>      
      </>  
  );
}


export default App;






// Use the layout defined at the page level, if available
// const getLayout = Component.getLayout || ((page) => page)
                    

// return getLayout(<Component {...pageProps} />)
import React, {createContext, useState, useContext, useEffect} from 'react'
import Cookie from 'js-cookie'

const CookiesContext = createContext();

export const useCookies = () => useContext(CookiesContext);

// Example: Provider component to wrap your app and pass down the cookies state (you can write index instead of CookiesProvider)
const  cookiesContext = ({children}) => {
    const [cookies, setCookies] = useState(null);

    useEffect(() => {
        // Example: Get cookie data when component mounts
        const token = Cookie.get('jwt');
        if(token) {
            setCookies(token);
        }
    }, []);
    
  return (
    <div>
      <CookiesContext.Provider value={{ cookies, setCookies }}>
        {children}
      </CookiesContext.Provider>
    </div>
  )
}

export default cookiesContext

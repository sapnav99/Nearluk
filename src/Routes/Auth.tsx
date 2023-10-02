import React from 'react'
import { useSelector } from "react-redux";
type Props = {}

const Auth = ({children}) => {
     const isLoggedIn = useSelector(
       (state: any) => state?.loginReducer?.isLoggedIn
     );
     if(isLoggedIn){
        return children;
     }
     

  return (
    <div>Auth</div>
  )
}

export default Auth
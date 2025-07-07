import { useState, useEffect } from 'react';
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const {setAuth} = useAuth();

  const refresh = async () =>{
    const response = await fetch('http://localhost:3000/refresh/', {
      method: 'GET',
      credentials: 'include'
    });

    const responseData = await response.json();

    setAuth(prev => {
      return {...prev, accessToken: responseData.accessToken}
    })

    return responseData.accessToken;
  }

  return refresh;
}

export default useRefreshToken;
import React, { createContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface GlobalContext {
  domain: string;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  appSettings: Record<string, any>;
  setAppSettings: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  userObj: any;
  setUserObj: React.Dispatch<React.SetStateAction<any>>;
}
type GlobalContextType = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  appSettings: GlobalContext;
  // Add other properties as needed
};

const Context = createContext<GlobalContext | undefined>(undefined);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [domain, setDomain] = useState<string>('http://10.0.2.2:8000/');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<any>();
  const [appSettings, setAppSettings] = useState<Record<string, any>>({});

  useEffect(() => {
    initAppSettings();
  }, []);

  const initAppSettings = () => {
    const body = JSON.stringify({
      username: 'example@example.com', // Replace with the actual email
      password: 'password' // Replace with the actual password
    }); // Define the body here
    fetch(`${domain}/api/v1.0/app/settings`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body) // Use the defined body here
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.json();
        }
      })
      .then(json => {
        console.log(json);
        setAppSettings(json);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const Globalcontext: GlobalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    appSettings,
    setAppSettings,
    userObj,
    setUserObj
  };

  return <Context.Provider value={Globalcontext}>{children}</Context.Provider>;
};

export { Context, Provider, };


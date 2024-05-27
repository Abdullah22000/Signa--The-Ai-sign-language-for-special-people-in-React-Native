import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null};
    onRegister?: (email: string , password: string) => Promise<any>;
    onLogin?: (email: string , password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my_jwt';
export const API_URL = 'http://127.0.0.1:8080';
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            try {
                const credentials = await Keychain.getGenericPassword();
                if (credentials) {
                    const token = credentials.password;
                    console.log("Stored token:", token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    setAuthState({
                        token: token,
                        authenticated: true,
                    });
                } else {
                    console.log("No token stored.");
                }
            } catch (error) {
                console.error("Error loading token:", error);
            }
        };
        loadToken(); // Call the function to load the token
    }, []);
    
    // This code is for registration
    const register = async (email: string, password: string) => {
        try{
            return await axios.post(`${API_URL}/api/v1.0/user/get-user/`, {email,password});
        } catch (e){
            return { error: true, msg: (e as any ).response.data.msg };
        }
    };

    // This code is for Login
    const login = async (email: string, password: string) => {
        try{
            const result = await axios.post(`${API_URL}/api/v1.0/user/login-user/`, {email,password});
            console.log("result:", result)

            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
            await Keychain.setGenericPassword(TOKEN_KEY, result.data.token)
            // Return the result or any other relevant data
            return result.data;
        } catch (error) {
            // Properly handle the error, either by throwing it or returning an error object
            console.error("Login error:", error);
            return { error: true, msg: (error as any).response?.data?.msg || 'An unknown error occurred' };
         }
    };

    // This code is for Logout
    const logout = async () => {
        try {
            await Keychain.resetGenericPassword();
            axios.defaults.headers.common['Authorization'] = '';
            setAuthState({
                token: null,
                authenticated: false,
            });
        } catch (error: any) {
            console.error("Error during logout:", error);
        }
    };


    const value = {
        authState,
        onRegister: register,
        onLogin: login,
        onLogout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// AsyncStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store tokens
export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
    console.log('Token stored successfully:', token);
  } catch (error) {
    console.error('Error storing token:', error); // Log the error for debugging
    throw error; // Optionally re-throw or handle the error as needed
  }
};

// Function to retrieve token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('Token retrieved successfully:', token);
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    throw error;
  }
};

// Function to remove token
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Error removing token:', error);
    throw error;
  }
};

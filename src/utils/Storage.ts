import AsyncStorage from '@react-native-async-storage/async-storage';

import { ToastType } from '@/types/ToastType';

import { openToaster } from './Helpers';

export const AUTH_KEY = 'auth';
export const setItem = async <T>(item: string, value: T) => {
  try {
    const itemValue = JSON.stringify(value);
    await AsyncStorage.setItem(item, itemValue);
  } catch (error) {
    
    console.error(`AsyncStorage getItem error for key "${item}":`, error);
    openToaster(ToastType.ERROR, 'Something went wrong, please try again');
  }
};

export const getItem = async <T>(item: string): Promise<T | null> => {
  try {
    const itemValue = await AsyncStorage.getItem(item);
    console.log(`AsyncStorage getItem for key "${item}":`, itemValue);
    return itemValue != null ? (JSON.parse(itemValue) as T) : null;
  } catch (error) {
    console.error(`AsyncStorage getItem error for key "${item}":`, error);
    openToaster(ToastType.ERROR, 'Something went wrong, please try again');
    console.error(`AsyncStorage getItem error for key "${item}":`, error);
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    openToaster(ToastType.ERROR, 'Something went wrong, please try again');
    console.error(`AsyncStorage removeItem error for key "${key}":`, error);
  }
};

export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    openToaster(ToastType.ERROR, 'Something went wrong, please try again');
    console.error('AsyncStorage clear error:', error);
  }
};

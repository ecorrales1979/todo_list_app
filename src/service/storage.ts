import AsyncStorage from '@react-native-async-storage/async-storage';

interface ErrorResponse {
  error: true;
  message: string;
}

interface SuccessResponse {
  error: false;
  data?: any;
}

export const getData = async (
  storageKey: string
): Promise<SuccessResponse | ErrorResponse | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null
      ? { error: false, data: JSON.parse(jsonValue) }
      : null;
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error getting data';
    return { error: true, message };
  }
};

export const storeData = async (
  storageKey: string,
  value: object
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
    return { error: false };
  } catch (e: any) {
    const message = e instanceof Error ? e.message : 'Error storing data';
    return { error: true, message };
  }
};

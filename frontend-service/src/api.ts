import axios, { AxiosResponse } from "axios";

export const sendOrder = async (email: string, item: string): Promise<AxiosResponse> => {
  console.log('sendOrder triggered...');
  try {
    const res = await axios.post(
      `http://localhost:5005/send_order`,
      {
        'email': email,
        'ordered_item': item
      }
    );
    return res;
  } catch (err: any) {
    return err.response;
  }
}

export const getAvailableItems = async (): Promise<Array<string>> => {
  const res = await axios.get('http://localhost:8080/available_items');
  return res.data;
}

export const updateIntenvory = async (item: string): Promise<void> => {
  console.log('updateIntenvory triggered');
  const res = await axios.post(
    'http://localhost:8080/update_inventory',
    {
      'item': item
    }
  );
}
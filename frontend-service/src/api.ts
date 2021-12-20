import axios from "axios";

export const sendOrder = async (email: string, item: string): Promise<string> => {
  console.log('sendOrder triggered...');
  const res = await axios.post(
    `http://localhost:5005/send_order`,
    {
      'email': email,
      'ordered_item': 'item'
    }
  );
  return res.data;
}
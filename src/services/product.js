import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function getBooks() {
  try {
    const products = await axios
      .get(process.env.REACT_APP_API_URL);
    if (products && products.data) {
      return products.data;
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

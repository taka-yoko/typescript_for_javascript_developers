import axios from 'axios';

export {};

interface Article {
  id: number;
  title: string;
  description: string;
}

const url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

async function getHamsanData(): Promise<void> {
  try {
    let data: Article[];
    const response: any = await axios.get(url);
    data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getHamsanData()

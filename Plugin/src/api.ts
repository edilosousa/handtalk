import axios, { AxiosRequestConfig } from 'axios';

interface Data {
  device: string;
  os: string;
  domain: string;
  themeChanges: number;
}

export const sendToAPI = async (data: Data): Promise<void> => {
  try {
    await axios.post('http://localhost:3000/collect', data);
  } catch (error) {
    console.error('Erro ao enviar dados para API', error);
  }
};

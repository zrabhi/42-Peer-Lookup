import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.example.com', // Replace API base URL
});

// TODO: Add interceptor

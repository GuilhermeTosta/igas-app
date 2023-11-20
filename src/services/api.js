import axios from 'axios';

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

export const api = axios.create({
  baseURL: 'https://whatsappbooksy-dev-ed.develop.my.salesforce.com/',
});

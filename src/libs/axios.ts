import axios from 'axios'

const api = '0cb761c925-280e7cdbe8-rq6qi8'

export const apiClient = axios.create({
  baseURL: 'https://api.fastforex.io/',
  params: {
    api_key: api,
  },
})

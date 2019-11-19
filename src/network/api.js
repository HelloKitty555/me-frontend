import axios from 'axios'

//axios 默认配置
axios.defaults.baseURL = "http://localhost:8080/api"
axios.defaults.headers = {
  'Accept': 'text/x-json',
  'Content-Type': 'application/json; charset=UTF-8'
}
// 请求拦截器配置
axios.interceptors.request.use((request) => {
  return request
}, (error) => {
  return Promise.reject(error);
})
// 响应拦截器配置
axios.interceptors.response.use((response) => {
  if (response.data.code === 'S_OK') {
    return response.data
  } else {
    return Promise.reject(response.data)
  }
}, (error) => {
  return Promise.reject(error)
})

// 统一API对象，便于管理
const api = {
  getArticleInfo: (id) => {
    return axios.post('/getArticleInfo', {
      id: id
    })
  },
  listArticles: (options) => {
    return axios.post('/listArticles', options)
  },
  createComment: (payload) => {
    return axios.post('/createComment', payload)
  },
  listComments: (payload) => {
    return axios.post('/listComments', payload)
  },
  createReplyComment: (payload) => {
    return axios.post('/createReplyComment', payload)
  },
  listReplyComments: (payload) => {
    return axios.post('/listReplyComments', payload)
  },
  uploadFile: (formData) => {
    return axios.post('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; charset=UTF-8'
      }
    })
  }
}

export default api
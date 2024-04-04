import {reactive} from 'vue'

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams:{
    api_key: '1c5822408e689c2701a28f5b3356172c',
    language: 'it-IT',
    query: 'matrix'
  },
  Movie :[],
  tv :[]
})
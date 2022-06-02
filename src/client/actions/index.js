import axios from 'axios'

export const headerData=()=>async dispatch =>{
    axios.defaults.baseURL = '';
    axios.defaults.headers.common['x-api-key'] = 'xeJJzhaj1mQ-ksTB_nF_iH0z5YdG50yQtwQCzbcHuKA'
    axios.defaults.withCredentials = true
    axios.defaults.crossDomain = true
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    const res= await axios.get('https://api.careers360.com/api/1/header/')
    dispatch({type:'HEADER_DATA' ,payload:res?.data?.data})
}
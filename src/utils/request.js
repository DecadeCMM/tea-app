// http请求工具类
import axios from 'axios';
import { server } from './config';
export function get(url,payload,isLocal=true){
  if(isLocal){ // 是否调用本地的服务,需要加前缀
    url = server + url;
  }
  return axios.get(url,payload);
}
export function post(url,data,payload,isLocal=true){
  if(isLocal){ // 是否调用本地的服务,需要加前缀
    url = server + url;
  }
  return axios.post(url,data,payload);
}
// export default {
//   get,
//   post
// };

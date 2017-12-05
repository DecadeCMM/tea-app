import {get, post } from '../utils/request';

export function getSave(user_name){
  return get('/api/v1/member',{
    params:{user_name}
  })
}
export function save(data){
  return post('/api/v1/member/save',data)
}

export function sign(data){
  return post('/api/v1/member/sign',data)
}

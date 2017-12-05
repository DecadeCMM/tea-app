import {get, post } from '../utils/request';

export function getGoodsAll(){
  return get('/api/v1/goodsAll',{})
}
export function getGoods(type){
  return get(`/api/v1/goodsAll/${type}`)
}


import {get, post } from '../utils/request';
export function getProduct(pDid){
  return get(`/api/v1/goodsProduct/${pDid}`)
}

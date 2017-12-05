import {get, post } from '../utils/request';
// 获取所有的分类信息
// 返回promise对象
export function getGoodsType(){
  return get('/api/v1/goods_type',{})
}

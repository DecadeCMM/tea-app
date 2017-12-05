import {get,post} from '../utils/request';
// 获取所有的文章信息
// 返回promise对象
export function getArticleList(){
  return get('/api/v1/article_list',{})
}
export function getDetail(id){
  return get(`/api/v1/article_list/${id}`)
}

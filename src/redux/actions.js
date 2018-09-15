import {
  TAG_LIST,
  NEW_ITEM_NEW_USER_LIST,
  POPULAR_ITEM_LIST,
  TOPIC_LIST,
  CATE_LIST,
  BANNER,
  COLUMN,
  RECOMMEND,
  TEN_FIFTEEN,
  ZHEN_ITEM,
  YX_LOOK,
  YX_WEEK,
  CATEGORY_L1LIST,
  CATEGORY
} from "./actions-type"

import {
  reqTagList,
  reqTopicList,
  reqNavList
} from "../api"

const receiveTagList= (tagList)=>({type:TAG_LIST,data:tagList});
const receiveNewItemNewUserList= (newItemNewUserList)=>({type:NEW_ITEM_NEW_USER_LIST,data:newItemNewUserList});
const receivePopularItemList= (popularItemList)=>({type:POPULAR_ITEM_LIST,data:popularItemList});
const receiveTopicList= (topicList)=>({type:TOPIC_LIST,data:topicList});
const receiveCateList= (cateList)=>({type:CATE_LIST,data:cateList});
const receiveBanner= (banner)=>({type:BANNER,data:banner});
const receiveColumn= (column)=>({type:COLUMN,data:column});
const receiveRecommend= ({recommend0,recommend1,recommend2})=>({type:RECOMMEND,data:{recommend0,recommend1,recommend2}});
const receiveTenFifteen= (tenFifteen)=>({type:TEN_FIFTEEN,data:tenFifteen});
const receiveZhenItem= ({zhen0,zhen1,zhen2})=>({type:ZHEN_ITEM,data:{zhen0,zhen1,zhen2}});
const receiveYxLook= (yxLook)=>({type:YX_LOOK,data:yxLook});
const receiveYxWeek= (yxWeek)=>({type:YX_WEEK,data:yxWeek});
const receiveCategoryL1List= (categoryL1List)=>({type:CATEGORY_L1LIST,data:categoryL1List});
const receiveCategory= (category)=>({type:CATEGORY,data:category});


export function getTagList() {
  return async dispatch=>{
    const result = await reqTagList();
    if(result.code===0){
      const tagList = result.data.tagList;
      dispatch(receiveTagList(tagList));

    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getNewItemNewUserList() {
  return async dispatch=>{
    const result = await reqTagList();
    if(result.code===0){
      const newItemNewUserList = result.data.newItemNewUserList;
      dispatch(receiveNewItemNewUserList(newItemNewUserList));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getPopularItemList() {
  return async dispatch=>{
    const result = await reqTagList();
    if(result.code===0){
      const popularItemList = result.data.popularItemList;
      dispatch(receivePopularItemList(popularItemList));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getTopicList() {
  return async dispatch=>{
    const result = await reqTagList();
    if(result.code===0){
      const topicList = result.data.topicList;
      dispatch(receiveTopicList(topicList));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getCateList() {
  return async dispatch=>{
    const result = await reqTagList();
    if(result.code===0){
      const cateList = result.data.cateList;
      dispatch(receiveCateList(cateList));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getBanner() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const banner = result.data.banner;
      dispatch(receiveBanner(banner));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getColumn() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const column = result.data.column;
      dispatch(receiveColumn(column));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getRecommend() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const recommend0 = result.data.recommend.Item[0];
      const recommend1 = result.data.recommend.Item[1];
      const recommend2 = result.data.recommend.Item[2];
      dispatch(receiveRecommend({recommend0,recommend1,recommend2}));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getTenFifteen() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const tenFifteen = result.data.tenfifteen;
      dispatch(receiveTenFifteen(tenFifteen));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getZhenItem() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const zhen0 = result.data.zhen.Item[0];
      const zhen1 = result.data.zhen.Item[1];
      const zhen2 = result.data.zhen.Item[2];
      dispatch(receiveZhenItem({zhen0,zhen1,zhen2}));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getYxLook() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const yxLook = result.data.yxLook;
      dispatch(receiveYxLook(yxLook));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getYxWeek() {
  return async dispatch=>{
    const result = await reqTopicList();
    if(result.code===0){
      const yxWeek = result.data.yxWeek;
      dispatch(receiveYxWeek(yxWeek));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

export function getCategoryL1List() {
  return async dispatch=>{
    const result = await reqNavList();
    if(result.code===0){
      const categoryL1List = result.data.categoryL1List;
      dispatch(receiveCategoryL1List(categoryL1List));
    }else{
      console.log("垃圾错误代码！");
    }
  }
}

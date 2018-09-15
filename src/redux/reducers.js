import {combineReducers} from "redux";
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

let initTagList=[];
function tagList(preState=initTagList,action) {
  switch (action.type){
    case TAG_LIST:
      const tagList=action.data;
      tagList.length=4;
      return tagList;
    default:
      return preState;
  }
}

let initNewItemNewUserList=[];
function newItemNewUserList(preState=initNewItemNewUserList,action) {
  switch (action.type){
    case NEW_ITEM_NEW_USER_LIST:
      return action.data;
    default:
      return preState;
  }
}

let initPopularItemList=[];
function popularItemList(preState=initPopularItemList,action) {
  switch (action.type){
    case POPULAR_ITEM_LIST:
      return action.data;
    default:
      return preState;
  }
}

let initTopicList=[];
function topicList(preState=initTopicList,action) {
  switch (action.type){
    case TOPIC_LIST:
      return action.data;
    default:
      return preState;
  }
}

let initCateList=[];
function cateList(preState=initCateList,action) {
  switch (action.type){
    case CATE_LIST:
      return action.data;
    default:
      return preState;
  }
}

let initBanner=[];
function banner(preState=initBanner,action) {
  switch (action.type){
    case BANNER:
      return action.data;
    default:
      return preState;
  }
}

let initColumn=[];
function column(preState=initColumn,action) {
  switch (action.type){
    case COLUMN:
      return action.data;
    default:
      return preState;
  }
}

let initRecommend={};
function recommend(preState=initRecommend,action) {
  switch (action.type){
    case RECOMMEND:
      const {recommend0,recommend1,recommend2}=action.data;
      return {
        recommend0,recommend1,recommend2
      };
    default:
      return preState;
  }
}

let initTenFifteen=[];
function tenFifteen(preState=initTenFifteen,action) {
  switch (action.type){
    case TEN_FIFTEEN:
     return action.data;
    default:
      return preState;
  }
}

let initZhenItem={};
function zhenItem(preState=initZhenItem,action) {
  switch (action.type){
    case ZHEN_ITEM:
      const {zhen0,zhen1,zhen2}=action.data;
      return {
        zhen0,zhen1,zhen2
      };
    default:
      return preState;
  }
}

let initYxLook={};
function yxLook(preState=initYxLook,action) {
  switch (action.type){
    case YX_LOOK:
      return action.data;
    default:
      return preState;
  }
}

let initYxWeek=[];
function yxWeek(preState=initYxWeek,action) {
  switch (action.type){
    case YX_WEEK:
      return action.data;
    default:
      return preState;
  }
}

let initCategoryL1List=[];
function categoryL1List(preState=initCategoryL1List,action) {
  switch (action.type){
    case CATEGORY_L1LIST:
      return action.data;
    default:
      return preState;
  }
}

export default  combineReducers({
  tagList,
  newItemNewUserList,
  popularItemList,
  topicList,
  cateList,
  banner,
  column,
  recommend,
  tenFifteen,
  zhenItem,
  yxLook,
  yxWeek,
  categoryL1List,
})
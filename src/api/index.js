
import ajax from "./axios";
/*请求地理位置*/
const BASE = "/api";

export const reqTagList = ()=> ajax("/homedata");

export  const reqTopicList = ()=> ajax("/topicdata");

export const reqNavList = () =>ajax("/navdata");


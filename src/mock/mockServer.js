
/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import homeData from './homedata.json' // 自动解析为js的对象
import navData from './navdata.json'
import topicData from './topicdata.json'

Mock.mock('/homedata', {code: 0, data: homeData})

Mock.mock('/navdata', {code: 0, data: navData})

Mock.mock('/topicdata', {code: 0, data: topicData})


// export default xxx
// 当前模块不需要向外暴露任何数据, 只需要被加载{在main中加载}运行一次即可



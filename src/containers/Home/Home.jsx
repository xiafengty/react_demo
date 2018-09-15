import React,{Component} from "react";
import {connect} from  "react-redux";
import BScroll from "better-scroll"
import Swiper from 'swiper'

import {
  getTagList,
  getPopularItemList,
  getNewItemNewUserList,
  getTopicList,
  getCateList
} from "../../redux/actions";

import NewModel from "../../components/NewModel/NewModel";
import Advert from "../../components/Advert/Advert";
import Maker from "./Maker/Maker";
import GoodGrid from "./GoodGrid/GoodGrid";
import News from "./News/News";
import Limited from "./Limited/Limited";
import Dissertation from "./Dissertation/Dissertation";
import GoodThings from "./GoodThings/GoodThings";

import "./home.styl"
import 'swiper/dist/css/swiper.min.css'


class Home extends Component{
  state={
    navLists: ["推荐", "居家", "鞋包配饰", "服装", "电器", "洗护", "饮食", "餐厨", "婴童", "文体", "特色区"],
    slideShows:[
      'https://yanxuan.nosdn.127.net/543f496b9806b4ad33bbd985ba8dd56c.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/8f283dd0ad76bb48ef9c29a04690816a.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/bbdb08081ec7938fcd738994d5981c18.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/a9e80a3516c99ce550c7b5574973c22f.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/11b673687ae33f87168cc7b93250c331.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/ed14da36343329e354641bb7f15c2ace.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/747785a0bf89164e13c570f77d36957b.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/543f496b9806b4ad33bbd985ba8dd56c.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/8f283dd0ad76bb48ef9c29a04690816a.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/8f283dd0ad76bb48ef9c29a04690816a.jpg?imageView&quality=75&thumbnail=750x0'
    ]
  };
  componentDidMount(){
    this._initScroll();
    new Swiper(this.contain, {
      centeredSlides: true,  //居中
      autoplay: {     //自动轮播
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {   //小圆点
        el: this.pagination
      },
      loop: true   //无线循环
    });
    this.props.getTagList();
    this.props.getNewItemNewUserList();
    this.props.getPopularItemList();
    this.props.getTopicList();
    this.props.getCateList();
  };
  _initScroll(){
    const space=80;
    const size=this.state.navLists.length;
    const ul=this.navUl;
    const lis=document.querySelectorAll(".navList>ul>li");
    const arr=[];
    for(let i=0;i<lis.length;i++){
      if(lis[i].clientWidth>60){
        lis[i].style.width=120+"px";
      }
      arr.push(lis[i].clientWidth);
    }
    const width=arr.reduce((prev,width)=>
      prev+width,0
    );
    ul.style.width=width+space*size+"px";
    new BScroll(this.navList,{
      click:true,
      scrollX:true
    });
  };
  render(){
    const {navLists,slideShows} =this.state;
    const {cateList}=this.props;
    return (
      <div id="bodyWrap">
        <div id="msite">
          <NewModel/>
          <div id="fixeds">
            <Advert/>
            <div id="header">
              <div id="header_img">
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" />
              </div>
              <div id="header_search">
                <i className="iconfont icon-sousuo" />
                搜索商品, 共13118款好物
              </div>
            </div>
            <div className="navList" ref={ul=>this.navList=ul}>
              <ul className="navContain" ref={ul=>this.navUl=ul}>
                {navLists.map((item,index)=>
                  <li className="lis" key={index}>
                    <a href='#'>{item}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <nav className="msite_nav">
            <div className="swiper-container" ref={swiper=>this.contain=swiper}>
              <div className="swiper-wrapper">
                {slideShows.map((item,index)=>
                  <div className="swiper-slide"  key={index}>
                    <img src={item} />
                  </div>
                )}
              </div>
              <div className="swiper-pagination" ref={swiper=>this.pagination=swiper}> </div>
            </div>
          </nav>
          <div id="label">
            <div className="label_con">
              <i className="iconfont icon-duihao"/>
              <span>网易自营品牌</span>
            </div>
            <div className="label_con">
              <i className="iconfont icon-duihao"/>
              <span>30天无忧退货</span>
            </div>
            <div className="label_con">
              <i className="iconfont icon-duihao"/>
              <span>48小时快速退款</span>
            </div>
          </div>
        </div>
        <Maker tagList={this.props.tagList}/>
        <div id="hd">
          <div className="hd_wrap">
            <div className="text">新品首发</div>
            <div className="btns">
              <a>查看全部></a>
            </div>
          </div>
        </div>
        <GoodGrid newItemNewUserList={this.props.newItemNewUserList} />
        <div id="moods">
          <div className="moods_wrap">
            <div className="text">人气推荐 · 好物精选</div>
            <div className="btns">
              <a>查看全部></a>
            </div>
          </div>
        </div>
        <News popularItemList={this.props.popularItemList}/>
        <Limited/>
        <div id="welfare">
          <a href="#"> </a>
        </div>
        <Dissertation topicList={this.props.topicList}/>
        {cateList.map((cate,index)=>
          <GoodThings key={index} cate={cate}/>
        )}
        <div id="ceshi"> </div>
      </div>
    )
  }
}
export default connect(
  state=>({
    tagList:state.tagList,
    newItemNewUserList:state.newItemNewUserList,
    popularItemList:state.popularItemList,
    topicList:state.topicList,
    cateList:state.cateList,
  }),
  {
    getTagList,
    getNewItemNewUserList,
    getPopularItemList,
    getTopicList,
    getCateList
  }
)(Home)
import React,{Component} from "react";
import {withRouter} from 'react-router-dom'

import "./footer.styl"

class NavFooter extends Component{
  state ={
    paths:'/navhome/home'
  };
  goTo=(path)=>{
    this.props.history.replace(path);
    this.setState({
      paths:path
    })
  };
  componentWillMount(){
    this.getPath();
  }
  getPath=()=>{
    const path=this.props.location.pathname;
    this.setState({
      paths:path
    })
  };
  render(){
    return (
      <nav className="m-tabBar">
        <a className={this.state.paths==='/navhome/home'?'item active':'item'} onClick={()=>this.goTo('/navhome/home')}>
          <i name="tabBar-index" className="iconfont  icon-zhuye"/>
          <span className="txt">首页</span>
        </a>
        <a className={this.state.paths==='/navhome/topic'?'item active':'item'}  onClick={()=>this.goTo('/navhome/topic')}>
          <i name="tabBar-topic" className="iconfont icon-shibie"/>
          <span className="txt">识物</span>
        </a>
        <a className={/^\/navhome\/cateList/.test(this.state.paths)?'item active':'item'} onClick={()=>this.goTo('/navhome/cateList')}>
          <i name="tabBar-cate" className="iconfont icon-fenlei"/>
          <span className="txt">分类</span>
        </a>
        <a className={this.state.paths==='/navhome/shopcart'?'item active':'item'}  onClick={()=>this.goTo('/navhome/shopcart')}>
          <i name="tabBar-cart" className="iconfont icon-gouwuche"/>
          <span className="txt">购物车</span>
        </a>
        <a className={this.state.paths==='/navhome/person'?'item active':'item'}  onClick={()=>this.goTo('/navhome/person')}>
          <i name="tabBar-ucenter" className="iconfont icon-geren"/>
          <span className="txt">个人</span>
        </a>
      </nav>
    )
  }
}
export default withRouter(NavFooter);
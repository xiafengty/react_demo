import React,{Component} from "react";
import {connect} from "react-redux";
import {Route} from  "react-router-dom";
import {getCategoryL1List} from "../../redux/actions";
import BScroll from 'better-scroll';
import Division from "./Division/Division";
import "./catelist.styl";
class CateList extends Component{
  state = {
    showIndex:0,
    id:1022001
  };
  componentDidMount(){
    this.props.getCategoryL1List();
    this.initScroll();
  }
  initScroll=()=>{
    new BScroll(this.clNav,{
      click:true,
      scrollY:true,
    });
  };
  showClassify=(index,ids)=>{
    this.setState({
      showIndex:index,
      id:ids
    });
    this.props.history.replace(`/navhome/cateList/${ids}`);
  };

  render(){
    const {categoryL1List}=this.props;
    const {showIndex} =this.state;
    return (
      categoryL1List ? <section id="cartList">
        <header className="cl_header">
          <div className="cl_search">
            <i className="iconfont icon-sousuo"/>
            <span>搜索商品, 共13231款好物</span>
          </div>
        </header>
        <div className='cl_nav' ref={clnanv=>this.clNav=clnanv}>
          <ul className='cln_ul'>
            {categoryL1List.map((item,index)=>
              <li className={index===showIndex?"cln_li active":"cln_li"}   onClick={()=>this.showClassify(index,item.id)}  key={index}>{item.name}</li>
            )}
          </ul>
        </div>
        <div className="cl_content">
          {/*<Division index={showIndex} categoryL1List={categoryL1List}  />*/}
          {showIndex?<Route path='/navhome/catelist/:id' component={Division}/>:null}
        </div>
      </section> : null
    );
  }
}
export default connect(
  state=>({categoryL1List:state.categoryL1List}),
  {getCategoryL1List}
)(CateList)

import React,{Component} from "react";
import {connect} from "react-redux";
import {Route,Switch,HashRouter,Redirect} from  "react-router-dom";
import NavFooter from "../../components/NavFooter/NavFooter";
import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import CateList from "../CateList/CateList";
import ShopCart from "../ShopCart/ShopCart";
import Person from "../Person/Person";
class NavHome extends Component{
  render(){
    const path=this.props.location.pathname;
    return (
      <div>
          <Switch>
            <Route path="/navhome/home"  component={Home}/>
            <Route path="/navhome/topic"  component={Topic}/>
            <Route path="/navhome/cateList"  component={CateList}/>
            <Route path="/navhome/shopcart"  component={ShopCart}/>
            <Route path='/navhome/person' component={Person}/>
            <Redirect to="/navhome/home"/>
          </Switch>
        {path!=='/navhome/person'?<NavFooter/>:null}
      </div>
    )
  }
}
export default connect(
  state=>({}),
  {}
)(NavHome)
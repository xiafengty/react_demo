import React,{Component} from "react";
import {connect} from "react-redux";
import "./person.styl"
class Person extends Component{
  state={
    showNumber:0 ,//0 默认进来的页面  1手机号码登录页面  2 邮箱账号登录   3手机号快捷注册
    phone:"",   //手机号
    code:"", // 验证码
    mail:"", //邮箱
    password:"",//密码
  };
  inPhone(){
    return /^1\d{10}$/.test(this.state.phone)
  }
  inCode(){
    return /^\d{6}$/.test(this.state.code)
  }
  inMail(){
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.state.mail)
  }
  inPassword(){
    return /^\d{8-15}$/.test(this.state.password)
  }
  loginType(index){
    this.setState({
      showNumber:index
    })
  }
  loginOne(){
    const {phone,code} = this.state;
    const {inPhone,inCode}=this;
    if(!phone || !code){
      console.log("手机或验证码不能为空");
    }else{
      if(!inPhone){
        console.log("请输入正确的手机号码");
        return
      }
      if(!inCode){
        console.log("验证码输入错误")
      }
    }
  }
  loginTwo(){
    const {mail,password} = this.state;
    const {inMail,inPassword} = this;
    if(!mail || !password){
      console.log("邮箱或密码不能为空")
    }else{
      if(!inMail){
        console.log("请输入正确的邮箱地址");
        return
      }
      if(!inPassword){
        console.log("密码输入错误")
      }
    }
  }
  loginThree(){
    const {phone,code,password} = this.state;
    const {inPhone,inCode,inPassword} = this;
    if(!phone || !password || !code){
      console.log("手机号、验证码或密码不能为空")
    }else{
      if(!inPhone){
        console.log("请输入正确的手机号码");
        return
      }
      if(!inCode){
        console.log("请输入正确的验证码")
      }
      if(!inPassword){
        console.log("密码格式错误")
      }
    }
  }
  handlerChange=(type,val)=>{
    this.setState({
      [type]:val
    })
  };
  render(){
    const {showNumber}=this.state;
    return (
      <div >
        <section id="person">
          <header className="ps_header">
            <a className="topic_header1 topicd" onClick={()=>this.props.history.replace('/navhome/home')}>
            <i className="iconfont icon-zhuye icon1" />
          </a>
          <span className="topic_header2 topicd">网易严选</span>
          <a className="topic_header3 topicd">
            <i className="iconfont icon-sousuo icon2" onClick={()=>this.props.history.replace('/navhome/topic')} />
          <i className="iconfont icon-gouwuche icon3" onClick={()=>this.props.history.replace('/navhome/cart')} />
      </a>
  </header>
    {showNumber===0?<div className="ps_contentOne">
      <div className="psc1_title">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
      </div>
      <div className="psc1_login">
        <div className="psc1l_phone" onClick={()=>this.loginType(1)}>
        <i className="iconfont icon-shouji"/>
        <span>手机号码登录</span>
      </div>
      <div className="psc1l_mail" onClick={()=>this.loginType(2)}>
      <i className="iconfont icon--"/>
      邮箱账号登录
    </div>
  </div>
    <div className="psc1_register" onClick={()=>this.loginType(3)}>
    <span>手机号快捷注册</span>
    <i className="iconfont icon-jiantou1"/>
  </div>
    <div className="psc1_other">
      <div className="psc1_wx">
        <i className="iconfont icon-weixin"/>
        <span>微信</span>
      </div>
      <div className="psc1_qq">
        <i className="iconfont icon-qq"/>
        <span>QQ</span>
      </div>
      <div className="psc1_wb">
        <i className="iconfont icon-xinlanglogo"/>
        <span>微博</span>
      </div>
    </div>
  </div>:null}
     {showNumber===1?<div className="ps_contentTwo">
      <div className="psc2_img">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
      </div>
      <div className="psc2_verify">
        <div className="psc2_vpw">
          <input type="text" placeholder="请输入手机号" onChange={(val)=>this.handlerChange("phone",val)}/>
        </div>
        <div className="psc2_vpw">
          <input type="text" placeholder="请输入短信验证码" onChange={(val)=>this.handlerChange("code",val)}/>
          <div className="psc2_getVerify">获取验证码</div>
        </div>
      </div>
      <div className="psc2_quest">
        <span className="psc2_q1">遇见问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <div className="psc2_btn">
        <div className="psc2_btn1" onClick={()=>this.loginOne()}>登录</div>
      <div className="psc2_btn2" onClick={()=>this.loginType(0)}>其他方式登录</div>
  </div>
    <div className="psc2_reg" onClick={()=>this.loginType(3)}>
    <span>注册账号</span>
    <i className="iconfont icon-jiantou1"/>
  </div>
  </div>:null}
     {showNumber===2?<div className="ps_contentThree" >
      <div className="psc2_img">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
      </div>
      <div className="psc2_verify">
        <div className="psc2_vpw">
          <input type="text" placeholder="邮箱账号" onChange={(val)=>this.handlerChange("mail",val)}/>
        </div>
        <div className="psc2_vpw">
          <input type="text" placeholder="密码" onChange={(val)=>this.handlerChange("password",val)}/>
        </div>
      </div>
      <div className="psc2_quest">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
      <div className="psc2_btn">
        <div className="psc2_btn1" onClick={()=>this.loginTwo()}>登录</div>
      <div className="psc2_btn2" onClick={()=>this.loginType(0)}>其他方式登录</div>
  </div>
  </div>:null}
     {showNumber===3?<div className="ps_contentFour">
      <div className="psc2_img">
        手机号注册
      </div>
      <div className="psc2_verify">
        <div className="psc2_vpw">
          <input type="text" placeholder="请输入手机号" onChange={(val)=>this.handlerChange("phone",val)}/>
        </div>
        <div className="psc2_vpw">
          <input type="text" placeholder="请输入短信验证码" onChange={(val)=>this.handlerChange("code",val)}/>
          <div className="psc2_getVerify">获取验证码</div>
        </div>
        <div className="psc2_vpw">
          <input type="text" placeholder="请输入密码" onChange={(val)=>this.handlerChange("password",val)}/>
        </div>
      </div>
      <div className="psc2_btn">
        <div className="psc2_btn1" onClick={()=>this.loginThree()}>注册</div>
    </div>
    <div className="psc2_rul">
      我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span>
    </div>
    <div className="psc2_reg">
      <span>邮箱注册账号</span>
      <i className="iconfont icon-jiantou1"/>
    </div>
  </div>:null}
  </section>
      </div>
    )
  }
}
export default connect(
  state=>({}),
  {}
)(Person)

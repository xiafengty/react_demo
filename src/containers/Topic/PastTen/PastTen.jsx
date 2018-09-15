import React,{Component} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll"
import "./pastten.styl";
class PastTen extends Component{
  static propTypes ={
    tenFifteen:PropTypes.array.isRequired
  };
  componentDidUpdate(){
    this.initScroll();
  };
  initScroll=()=>{
    const space=30;
    const size=this.props.tenFifteen.length;
    const ul=this.pastTenUl;
    const width=578;
    ul.style.width=(width+space)*(size+1)+2*space+"px";
    new BScroll(this.pastTen,{
      click:true,
      scrollX:true,
      scrollY:false
    });
  };
  render(){
    const ten=this.props.tenFifteen;
    const parts=ten.participantAvatar;
    return (
      ten?<section id="pastTen" className="clearFix">
        <header className="pt_header">十点一刻</header>
        <div className="pt_warp"  ref={xxx=>this.pastTen=xxx}>
          <div className="pt_con" ref={yyy=>this.pastTenUl=yyy}>
            <div className="pt_con_text" v-for="(ten,index) in tenFifteen" key="index">
              <div className="ptc_header">— 今日话题 —</div>
              <div className="ptc_text1">{ten.title}</div>
              <div className="ptc_text2">{ten.desc}</div>
              <div className="ptc_person">
                <div className="ptc_inner">
                  {
                    parts?parts.map((part,index)=>
                      <div className="ptcp_img"  key={index}>
                        {part?<img src={part} alt="" />:null}
                        <img src="http://yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48" alt="" v-else="" />
                      </div>
                    ):null
                  }
                  <div className="ptcp_text">{ten.participantNum}人参与话题</div>
                </div>
              </div>
            </div>
            <div className="pt_end">
              <span>查看全部话题</span>
              <i className="iconfont icon-jiantou" />
            </div>
          </div>
        </div>
      </section>:null
    )
  }
}
export default PastTen;
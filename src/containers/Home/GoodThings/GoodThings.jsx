import React,{Component} from "react";
import PropTypes from "prop-types";

import "./goodThings.styl"

class GoodThings extends Component{
  static propTypes ={
    cate:PropTypes.object.isRequired
  };
  render(){
    const {cate}=this.props;
    return (
      <div id="goodThings">
        <div className="goodThings_header">{cate.name}好物</div>
        <div>
          <ul className="goodThings_ul">
            {
              cate.itemList.map((item,index)=>
                <li className="goodThings_li" key={index}>
                  <div className="goodThings_content">
                    <div className="goodThings_content_img">
                      <img src={item.listPicUrl} />
                      <div className="gci_text">{item.simpleDesc}</div>
                    </div>
                    <div className="goodThings_content_text">
                      <div className="gct_discount">
                        {item.itemTagList.map((babel,index)=>
                          <a key={index} className="labelColor[babel.type]">
                            {babel.name}
                          </a>
                        )}
                      </div>
                      <div className="gct_con">{item.name}</div>
                      <div className="gct_price">￥{item.couponPrice}</div>
                    </div>
                  </div>
                </li>
              )
            }

          </ul>
  </div>
  </div>
    )
  }
}
export default GoodThings;
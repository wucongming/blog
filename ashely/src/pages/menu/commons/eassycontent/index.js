import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../eassycontent/index.css';

class EassyContent extends Component {

    render() {
        return (
            <div className="eassycontent-container">
                <div className="content">
                    <div className="content-title" style={{}}>
                        <div style={{width:"fit-content",float:"left"}}>JS对数组去重的几种方法</div>
                        <div style={{width:"fit-content",fontSize:"18px"}}>
                            <div style={{width:"fit-content",float:"left",paddingRight:"50px"}}>阅读量 1000</div>
                            
                            
                            <div className="content-date" style={{width:"fit-content",float:"right"}}>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-icon-"></use>
                                </svg>
                                2018-04-22
                            </div>
                            
                        </div>
                    </div>
                    <div className="content-head">
                    学了一点点React皮毛的我决定尝试下一下React Native :)

明明很简单的配置，到我这里却各种出错，一路踩坑过来的我总算把ios环境配置好了。基础配置可以跟着官网配置环境来，上面写的很详细了。 我就分享一下我遇到的问题和解决方法：
                    </div>
                    <div className="content-body">
                        fddfa
                    </div>
                    <div className="content-feet">
                        <center className="content-feet-good">
                            <div className="good-text hover-pointer">赏</div>
                            <div className="content-feet-bar">
                                <div className="content-feet-body">
                                
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(EassyContent);
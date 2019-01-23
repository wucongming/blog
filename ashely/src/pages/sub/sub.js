import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store'
import head from '../../static/head.jpg'
import { Link } from 'react-router-dom';
import './style.css'


class Sub extends Component {
    
    render() {
        const { menuStatus } = this.props;
        return (
            <div className="sub-containner">
                <div className="sub-head-bg">

                </div>
                <div className="sub-content">
                    <div>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className="sub-head-img">
                                <img src={head} />
                            </div>
                        </div>
                        <div className="sub-username">
                            <Link to="/">BuTong</Link>
                        </div>
                        <div className="sub-intro">
                            Tomorrow is another day
                        </div>
                        <div className="sub-home">
                            <Link to="/">主页</Link>
                        </div>
                        <div className="sub-about">
                            <span onClick={() => this.props.menuAnimation(menuStatus === 1 ? 0 : 1)} className="hover-pointer">文章标签</span>
                            <span style={{padding: " 0 10px"}}>/</span>
                            <span onClick={() => this.props.menuAnimation(menuStatus === 2 ? 0 : 2)} className="hover-pointer">关于我</span>
                        </div>

                        <div className="sub-icon">
                            <ul>
                                <li>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-github1"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-xinlangweibo"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref="#icon-QQ"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <iframe style={{marginTop:"30px"}}  frameBorder="no" border="0" marginWidth="0" marginHeight="0" width="298" height="52" src="//music.163.com/outchain/player?type=2&id=167937&auto=1&height=32"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapState = (state) => ({
    menuStatus: state.getIn(['sub','newMenuStatus'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    },
    menuAnimation(menuStatus) {
        console.log(menuStatus);
        dispatch(actionCreators.changeMenuStatus(menuStatus));
    }
});

export default connect(mapState,mapDispatch)(Sub);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import EassyList from '../eassylist/index'
import EassyContent from '../eassycontent/index'
import './index.css'

let animationClassName = "";
let fadeClassName = "";

class ContentMenu extends Component {



    render() {
    
        console.log("哈哈")
        const { newMenuStatus, oldMenuStatus } = this.props;
        console.log(animationClassName)
        
        if(oldMenuStatus == 0 && newMenuStatus != 0) {
            animationClassName = "content-menu-right";
            fadeClassName = "white-fade-out";
        } else if(newMenuStatus == 0 && oldMenuStatus ) {
                animationClassName = "content-menu-left";
                fadeClassName = "white-fade-in";
        }
        return (
            <BrowserRouter>
                <div className={animationClassName + " content-menu-container"}>
                
                    <div className="menu-sub">
                        <div></div>
                        <div></div>
                    </div>
                        <Route exact path="/" render={(props) => <EassyList fadeClassName={fadeClassName}></EassyList>}></Route>
                        <Route exact path="/eassy/:id" render={(props) => <EassyContent fadeClassName={fadeClassName}></EassyContent>} ></Route>

                </div>
            </BrowserRouter>
        );
    }

    /**
     * 将对应的menuStatus转化为对应的类目
     * 0 对应空
     * 1 和 2 对应
     */
    menuStatusMapToClassName(menuStatus) {

    }
}

const mapState = (state) => ({
    newMenuStatus: state.getIn(['sub','newMenuStatus']),
    oldMenuStatus: state.getIn(['sub','oldMenuStatus']),
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(ContentMenu);
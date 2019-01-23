import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'

class  EassyItem extends Component {

    render() {
        return(
            <div className="eassy-item">
                <div className="item-top">
                    <span className="item-title">ReactNative踩坑记录（一）环境配置问题</span>
                    <div className="item-date">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-icon-"></use>
                        </svg>
                        <span>2018-06-01</span>
                    </div>
                </div>
                <div className="item-body">
                    <div className="item-content">
                        <div>
                        学了一点点React皮毛的我决定尝试下一下React Native :)
                        </div>
                        <div className="hover-pointer">
                            <Link to="/">more >></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(EassyItem);
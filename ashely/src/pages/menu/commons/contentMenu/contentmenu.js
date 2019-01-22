import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'

class ContentMenu extends Component {

    render() {
        console.log("哈哈")
        const { menuStatus } = this.props;
        
        return (
            <div className="content-menu content-menu-right">
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </div>
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
    menuStatus: state.getIn(['sub','menuStatus'])
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(ContentMenu);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'


class PopMenu extends Component {

    render() {
        return (
            <div className="pop-menu">

            </div>
        );
    }

}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(PopMenu);
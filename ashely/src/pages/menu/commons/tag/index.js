import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './index.css'

class Tag extends Component {

    constructor(props) {
        super(props);
        console.log("tag",this.props);
    }

    render() {
        return(
            <div className="eassy-tag" style={{background:this.props.color}}>
                <div className="tag-trangle" style={{borderColor: "transparent "+ this.props.color + " transparent transparent"}}></div>
                <div className="tag-circle"></div>
                <div className="tag-content">{this.props.children}</div>
            </div>
        );
    }

}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Tag);
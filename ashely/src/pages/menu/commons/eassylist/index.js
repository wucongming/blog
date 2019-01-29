import React, { Component } from 'react'
import EassyItem from '../eassyitem/index'
import { connect } from 'react-redux';

class EassyList extends Component {
    render() {
        return (
            <div className={"menu-content " + this.props.fadeClassName}>
                <EassyItem content="学了一点点React皮毛的我决定尝试下一下React Native :)" className="hh"></EassyItem>
                <EassyItem content="学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)学了一点点React皮毛的我决定尝试下一下React Native :)"></EassyItem>
                <EassyItem connect="学了一点点React皮毛的我决定尝试下一下React Native :)"></EassyItem>
                <EassyItem content="学了一点点React皮毛的我决定尝试下一下React Native :)"></EassyItem>
                
            </div>
        );
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(EassyList);
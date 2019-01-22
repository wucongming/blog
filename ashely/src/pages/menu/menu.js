import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import PopMenu from './commons/popmenu/popmenu'
import ContentMenu from './commons/contentMenu/contentmenu'
import './menu.css'

class Menu extends Component {

    render() {
        return (
            <div className="menu-containner">
                {/* 背景泡沫 */}
                <PopMenu></PopMenu>
                <ContentMenu></ContentMenu>
                {/* 索引 */}
            </div>
        );
    }

}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

})

export default connect(mapState,mapDispatch)(Menu);
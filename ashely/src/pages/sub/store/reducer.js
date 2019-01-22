import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    /**
     * 主界面显示状态
     * 0 :主界面侧栏消失
     * 1 :主界面侧栏显示 “标签”栏
     * 2 :主界面侧栏显示 “关于我”栏
     */
     menuStatus: 0 
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};


const addArticleList = (state,action) => {
     return state.merge({
         'articleList': state.get('articleList').concat(action.list),
         'articlePage': action.nextPage
});
};

export default (state = defaultState, action) => {
     switch(action.type) {
         case constants.CHANGE_HOME_DATA:
             return changeHomeData(state,action);
         case constants.ADD_ARTICLE_LIST:
             return addArticleList(state,action);
         case constants.TOGGLE_SCROLL_TOP:
             return state.set('showScroll',action.show);
         case constants.TRIGGLE_MENU_ANIMATION:
            return state.set('menuStatus',action.menuStatus)
         default:
             return state;
     }
}


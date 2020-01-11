import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './index.js';
import { getNewsList } from '../../models/action-creators/action-news.js';

function mapStateToProps(state) {
  return {
    hotList: state._news.hotList,
    newsList: state._news.newsList,
    loading: state._news.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewsList,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
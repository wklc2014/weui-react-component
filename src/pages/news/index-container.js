import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './index.js';

function mapStateToProps(state) {
  return {
    hotList: state._news.hotList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
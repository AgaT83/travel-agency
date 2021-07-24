import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addSearchTag, removeSearchTag, durationFrom, durationTo } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addSearchTag: tag => dispatch(addSearchTag(tag)),
  removeSearchTag: tag => dispatch(removeSearchTag(tag)),
  durationFrom: from => dispatch(durationFrom(from)),
  durationTo: to => dispatch(durationTo(to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

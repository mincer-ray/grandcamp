import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { resultsArray } from '../../reducers/selectors';
import SearchResults from './search_results';

function mapStateToProps(state) {
  return ({
    results: resultsArray(state.search.results)
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

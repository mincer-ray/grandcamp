import { search } from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const runSearch = (query) => {
  return (dispatch) => {
    return search(query)
      .then(
        results => dispatch(receiveResults(results)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

import { search, random } from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_RANDOM = 'RECEIVE_RANDOM';
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export const runSearch = (query) => {
  return (dispatch) => {
    return search(query)
      .then(
        results => dispatch(receiveResults(results)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const getRandom = (amount) => {
  return (dispatch) => {
    return random(amount)
    .then(
      random => dispatch(receiveRandom(random)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const receiveRandom = random => ({
  type: RECEIVE_RANDOM,
  random
});

export const clearResults = () => ({
  type: CLEAR_RESULTS
});

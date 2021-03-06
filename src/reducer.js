import createReducer from './utils/createReducer';
import {
  SHOW,
  CLOSE,
} from './actions';


const initialState = {
  show: false,
  title: '',
};


export default createReducer(initialState, {
  [SHOW]: (state, { payload }) => ({
    show: true,
    ...payload,
  }),

  [CLOSE]: () => initialState,
});

import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  shift: '',
  phone: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log('action---->', action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};

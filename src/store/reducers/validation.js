import {VALIDATION_CHANGE} from '../types/index';

const initState = {
  open: false,
  vertical: 'top',
  horizontal: 'center',
  msg: '',
  seconds: 2000,
};

export default function (state = initState, action){
  switch(action.type){
    case VALIDATION_CHANGE:
      return {
        ...Object.assign(initState, action.validation),
      };
    default:
      return state;
  }
}
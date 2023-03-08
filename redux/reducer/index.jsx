const { combineReducers } = require('@reduxjs/toolkit');
import { jobseekersReducer } from './jobseekersReducer';
const rootReducer = combineReducers({
  jobseekersReducer,
  // skillsReducer,
  // portfoliosReducer,
  // experiencesReducer,
});

export default rootReducer;

const initialState = {
  jobseekers: [],
  detailJobseekers: [],
};

export const jobseekersReducer = (state = initialState, action) => {
  if (action.type === 'GET_ALL_JOBSEEKERS') {
    return {
      ...state,
      jobseekers: action.payload,
      isLoading: false,
    };
  } else if (action.type === 'UPDATE_JOBSEEKERS') {
    return state;
  } else if (action.type === 'GET_DETAIL_JOBSEEKERS') {
    return {
      ...state,
      detailJobseekers: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

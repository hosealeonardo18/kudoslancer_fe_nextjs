import axios from 'axios';
import Swal from 'sweetalert2';

export const getAllJobseekers = (setJobseekers) => async (dispatch) => {
  try {
    await axios
      .get(`${process.env.API_KUDOSLANCER}/jobseeker`)
      .then((response) => {
        setJobseekers(response.data.data);
      })
    dispatch({ type: "GET_ALL_JOBSEEKERS", payload: "success" });
  } catch (error) {
    console.log(error);
    Swal.fire({
      text: `${error}`,
      icon: "warning",
    });
  }
};

export const getDetailJobseekrs = (setJobseekersId, id) => async (dispatch) => {
  try {
    if (id) {
      axios
        .get(`${process.env.API_KUDOSLANCER}/jobseeker/${id}`)
        .then((response) => {
          setJobseekersId(response.data.data);
        })
      dispatch({ type: "GET_DETAIL_JOBSEEKERS", payload: "success" });
    }
  } catch (error) {
    Swal.fire({
      text: error.response.data.data.message,
      icon: "warning",
    });
  }
};

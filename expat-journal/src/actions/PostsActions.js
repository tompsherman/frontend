import AxiosWithAuth from "../utils/AxiosWithAuth";

export const FETCH_POSTS_START = "FETCH_POST_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const fetchPosts = (userId) => (dispatch) => {
  dispatch({ type: FETCH_POSTS_START });
  AxiosWithAuth()
    .get(
      `https://expat-journal-bw.herokuapp.com/api/expat/auth/protected/user/${userId}/posts`
    )
    .then((res) => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_POSTS_ERROR, payload: err.message });
    });
};

export const POST_ADD = "POST_ADD";
export const POST_ADD_ERROR = "POST_ADD_ERROR";

export const addPost = (newPost) => (dispatch) => {
  AxiosWithAuth()
    .post(
      "https://expat-journal-bw.herokuapp.com/api/expat/auth/protected/posts",
      newPost
    )
    .then((res) => {
      console.log("New data:", res.data.posts);
      dispatch({ type: POST_ADD, payload: res.data.posts });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_ADD_ERROR, payload: err.message });
    });
};

export const POST_DELETE = "POST_DELETE";
export const POST_DELETE_ERROR = "POST_DELETE_ERROR";

export const deletePost = (id) => (dispatch) => {
  AxiosWithAuth()
    .delete(
      `https://expat-journal-bw.herokuapp.com/api/expat/auth/protected/post/${id}`
    )
    .then((res) => {
      console.log("delete data:", res.data);
      dispatch({ type: POST_DELETE, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_DELETE_ERROR, payload: err.message });
    });
};

export const POST_EDIT = "POST_EDIT";
export const POST_EDIT_ERROR = "POST_EDIT_ERROR";

export const editPost = (id, data) => (dispatch) => {
  console.log(id, data, "TESTSTTETSTTTE");
  AxiosWithAuth()
    .put(
      `https://expat-journal-bw.herokuapp.com/api/expat/auth/protected/post/${id}`,
      data
    )
    .then((res) => {
      dispatch({ type: POST_EDIT, payload: res.data.post });
    })
    .catch((err) => {
      dispatch({ type: POST_EDIT_ERROR, payload: err.message });
    });
};

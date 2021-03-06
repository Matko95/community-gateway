import { FETCH_COMPETITIONS_BY_TAG } from './actionTypes';

const GHOST_API_URL = 'https://deversifi-2.ghost.io/';
const GHOST_CONTENT_API_KEY = '1b9232f0014d858f227e5d6b11';
const API = 'ghost/api/v2/content/';

const fetchedPosts = payload => ({
  type: FETCH_COMPETITIONS_BY_TAG,
  posts: payload.posts,
});

export const fetchPostsByTag = () => async dispatch => {
  const endpoint = `${GHOST_API_URL}${API}posts/?key=${GHOST_CONTENT_API_KEY}&limit=all&include=tags`;

  try {
    const promiseResp = await fetch(endpoint);
    const resp = await promiseResp.json();

    const formattedPosts = resp.posts
      .filter(el => el.title.includes('Competition'))
      .sort((a, b) => b.published_at - a.published_at)
      .slice(0, 3);

    dispatch(
      fetchedPosts({
        posts: formattedPosts,
      })
    );
  } catch (err) {
    console.log(err);
  }
};

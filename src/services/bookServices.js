import axios from 'axios';

import util from './util';

const userService = {
  /**
   * signup
   * @param {Object} userInfo {username:required, password: required, email: optional}
   */
  // eslint-disable-next-line consistent-return
  async signup(userInfo) {
    try {
      await axios.post('/users/signup', {
        email: userInfo.username,
        password: userInfo.password,
      });
    } catch (e) {
      return util.handleError(e);
    }
  },
  /**
   * Login
   * @param {Object} userInfo {username:required, password: required}
   */
  async list() {
    try {
      const { data } = await axios.get('0plus1/CodingChallenge-react/books');
      return data;
    } catch (e) {
      return util.handleError(e);
    }
  },
};

export default userService;
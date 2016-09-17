import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

import request from 'request'

/* eslint-disable no-console */

export default {
  sendScore (scoreObj) {
    request.post(Constants.URL, {
      scoreObj
    }, function (err, res, body) {
      const score = res.data;
      Dispatcher.handleViewAction({
        type: 'SCORE',
        score: score
      });
    })
  }
};

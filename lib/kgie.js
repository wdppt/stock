'use strict';

const request = require('request');
const config = require('./config').kgie;


function login() {
  const options = {
    url: config.URL,
    headers: config.HEADERS,
  };

}

function queryStock() {
  const options = {
    url: config.URL,
    headers: config.HEADERS,
  };
  request.post();

}

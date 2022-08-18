#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('webProject:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

app.listen(3030, "127.0.0.1");

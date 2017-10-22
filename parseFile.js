yaml = require('js-yaml');
var path = require('path');
var output_name = "";
var output_cate = "";
var output_twitter = "";


'use strict';

const fs = require('fs');
const argv = require('yargs').argv;
const converter = require("csvtojson").Converter;


var parse_yaml_file = require('./type_file_parser.js').parse_yaml_file;
var parse_json_file = require('./type_file_parser.js').parse_json_file;
var parse_csv_file = require('./type_file_parser.js').parse_csv_file;

exports.get_path_file = function(type) {
  var path_files = {
    'capterra': function() {
      return './feed-products/capterra.yaml';
    },
    'softwareadvice': function() {
      return './feed-products/softwareadvice.json';
    },
    'csvfile': function() {
      return './feed-products/softwareadvice.csv';
    },
    'default': function() {
      console.log("invalid type file!!!")
      return 'default';
    }
  };
  if (path_files[type]) {
    fn = path_files[type];
  } else {

    fn = path_files['default'];
  }
  return fn();
}




exports.parse_file = function(type, file) {
  var type_files = {
    '.yaml': function() {
      return parse_yaml_file(file);
    },
    '.json': function() {
      return parse_json_file(file);
    },
    '.csv': function() {
      return parse_csv_file(file);
    },
    'default': function() {
      console.log("invalid type file!!!")
      return 'default';
    }
  };
  if (type_files[type]) {
    fn = type_files[type];
  } else {
    fn = type_files['default'];
  }
  return fn();

}

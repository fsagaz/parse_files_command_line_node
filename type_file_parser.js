var path = require('path');
var output_name = "";
var output_cate = "";
var output_twitter = "";
yaml = require('js-yaml');

const fs = require('fs');
const argv = require('yargs').argv;
const converter = require("csvtojson").Converter;


exports.parse_yaml_file = function(file_to_read) {
    var doc = yaml.safeLoad(fs.readFileSync(file_to_read, 'utf8'));
    for (var [key, value] of Object.entries(doc)) {
      typeof value.name !== "undefined" ? output_name = "Importing Name: " + value.name : output_categories = "; No Name ";
      typeof value.tags !== "undefined" ? output_categories = "; Categories: " + value.tags : output_categories = "; No Categories ";
      typeof value.twitter !== "undefined" ? output_twitter = "; Twitter Account: " + value.twitter : output_twitter = "; No Twitter account ";
      console.log(output_name + output_categories + output_twitter);
    }
}

exports.parse_json_file = function(file_to_read) {
  var obj = JSON.parse(fs.readFileSync(file_to_read, 'utf8'));
  for (var [key, value] of Object.entries(obj.products)) {
    typeof value.title !== "undefined" ? output_name = "Importing Name: " + value.title : output_categories = "; No Name ";
    typeof value.categories !== "undefined" ? output_categories = "; Categories: " + value.categories : output_categories = "; No Categories ";
    typeof value.twitter !== "undefined" ? output_twitter = "; Twitter Account: " + value.twitter : output_twitter = "; No Twitter account ";
    console.log(output_name + output_categories + output_twitter);
  }
  return obj;
}

exports.parse_csv_file =  function(file_to_read) {
  var converter = new converter({});
  var obj = converter.fromFile(fs.readFileSync(file_to_read, 'utf8'));
  for (var [key, value] of Object.entries(obj.products)) {
    typeof value.title !== "undefined" ? output_name = "Importing Name: " + value.title : output_categories = "; No Name ";
    typeof value.categories !== "undefined" ? output_categories = "; Categories: " + value.categories : output_categories = "; No Categories ";
    typeof value.twitter !== "undefined" ? output_twitter = "; Twitter Account: " + value.twitter : output_twitter = "; No Twitter account ";
    console.log(output_name + output_categories + output_twitter);
  }
}

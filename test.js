"use strict";
  let assert = require ("assert");

  var get_path_file = require('./parseFile.js').get_path_file;
  var parse_file = require('./parseFile.js').parse_file;


let output = parsefile ("capterraSS");
assert(output == "default");
console.log("assert  succeed ✓");

output = parsefile ("capterra");
assert(output == "./feed-products/capterra.yaml");
console.log("assert capterra should be yaml succeed ✓");

output = parsefile ("softwareadvice");
assert(output == "./feed-products/softwareadvice.json");
console.log("assert softwareadvice should be json succed ✓");

output = check_extension_files ('.xml');
assert(output == "default")
console.log("assert check file extension succed ✓");

output = check_extension_files ('.json', './test_files/test_products.json');
assert(typeof output == "object")
console.log("assert file extension and object conversion succed ✓");

function parsefile(file){
  return get_path_file(file);

}

function check_extension_files(file_extension, file){
  if(!file){
    var file="test.xml";
  }
  return parse_file(file_extension, file);
}

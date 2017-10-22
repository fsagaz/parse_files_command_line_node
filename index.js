
var path = require('path');
'use strict';

const fs = require('fs');
const argv = require('yargs').argv;


var file_to_read = "";


//exporting modules
var get_path_file = require('./parseFile.js').get_path_file;
var parse_file = require('./parseFile.js').parse_file;



var init = function(){
  file_to_read = get_path_file(argv.file);
  parsing_file(file_to_read);
}



function parsing_file(file_to_read) {
  var file = file_to_read;
  parse_file(path.extname(file_to_read), file)
}


init();//calling main function

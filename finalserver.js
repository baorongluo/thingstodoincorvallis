
//importing built ins
var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');

//importing post data
const posts = require('./PostData/posts.json')
//console.log(posts);

//creating server
var server = http.createServer(requestHandler);
var port = process.env.PORT || 3000;
server.listen(port);
console.log('');
console.log('-- Listening at port', port,'-- ');
console.log('');

var j = 0;

function fileread () {
    j++;
    console.log('(A file has been read by the server. ', j, 'total files read.)');
}

function sent () {
    console.log('   (A response has been sent.)');
    console.log('');
}

function errorsent () {
    console.log('   (An error response has been sent.)');
    console.log('');
}

//adding the following contents of static files to server
//homepage, thingstodopage, selfcarepage
var homepage = fs.readFileSync('./index.html');
if ( homepage != null ) {fileread()};
var thingstodopage = fs.readFileSync('./ThingsToDo/' + 'Todo.html');
if ( thingstodopage != null ) {fileread()};
var selfcarepage = fs.readFileSync('./selfcare.html');
if ( selfcarepage != null ) {fileread()};
var errorpage = fs.readFileSync('./error.html');
if ( errorpage != null ) {fileread()};
console.log('');


var i = 0;

console.log('');
console.log(' -- Request Log -- ');
console.log('');

function requestHandler(request, response) {

    i++;
    console.log('   New request, #', i, '. Details below.');
    console.log("      Method:", request.method);
    console.log("      URL:", request.url);

    //responses for each page
    if (request.url == '/' && request.method == 'GET') {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write(homepage);
        response.end();
        sent();
    }
    else if (request.url == '' && request.method == 'GET') {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write(homepage);
        response.end();
        sent();
    }
    else if (request.url == '/activities' && request.method == 'GET') {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write(thingstodopage);
        response.end();
        sent();
    }
    else if (request.url == '/selfcare' && request.method == 'GET') {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write(selfcarepage);
        response.end();
        sent();
    }
    
    //error response
    else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write(errorpage);
        response.end();
        errorsent();
    }



}

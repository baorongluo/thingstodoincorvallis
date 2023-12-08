var express = require('express')
var exphbs = require("express-handlebars")

var port = process.env.PORT || 3000
var app = express()

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

var postData = require("./PostData/posts.json")


app.use(express.static('static'))

app.get('/ilovecorvallis', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/static/ilovecorvallis.html')
})

app.get('/ilovecorvallis/:thingstodo', function (req, res, next) {
    res.status(200).render("postPage", {
      posts: postData.posts
    //   might need to:
    //   title: title,
    //   distance: distance,
    //   type: type,
    //   details: details,

    })
  
})

// app.get("*", function (req, res, next) {
//   res.status(404).render("404", { url: req.originalUrl })
// })

app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log("== Server listening on port", port)
})
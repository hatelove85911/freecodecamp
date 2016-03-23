var path = require('path')
var fs = require('fs')
var dir = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(dir, function (err, list) {
  list.forEach(function (f) {
    if (path.extname(f) === extension) {
      console.log(f)
    }
  })
})

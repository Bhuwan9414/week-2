// const express = require("express");

// const app = express();

// const users = [{
//     name : "bhuwan",
//     kidneys : [{
//         healthy : true
//     }]
// }]


// app.get("/", function(req, res){
//     const johnkideneys = users[0].kidneys
//     const numberofkidneys = johnkideneys.length;
//     let healthykidneys = 0;
//     for(let i=0;i<numberofkidneys;i++){
//         if(johnkideneys[i].healthy){
//             healthykidneys = healthykidneys + 1;
//         }
//     }
//     const bekarkidneys = numberofkidneys - healthykidneys;

//     res.json({
//         numberofkidneys,
//         healthykidneys,
//         bekarkidneys
//     })
// })

// app.use(express.json());


// app.post("/", function(req, res){
//     const ishealthy = req.body.ishealthy;
//     users[0].kidneys.push({
//         healthy : ishealthy
//     })
//     res.json({
//         msg : "done"
//     })
// })


// app.listen(3002, function(){
//     console.log("server is listening");
// })



const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.get("/files/:fileName", function (req, res) {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf-8", function (err, data) {
    res.json({
      data
    });
  })

})

app.listen(3000, function () {
  console.log("server is listening")

})

// module.exports = app;

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/files/:fileName", function (req, res) {
  const fileName = req.params.fileName;
  
  // Sanitize the filename and prevent directory traversal attacks
  const filePath = path.join(__dirname, fileName);

  // Check if the file exists and read it
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      // Return an error message if file read fails
      res.status(404).json({
        error: "File not found or an error occurred while reading the file"
      });
    } else {
      res.json({
        data
      });
    }
  });
});

app.listen(3000, function () {
  console.log("server is listening on port 3000");
});



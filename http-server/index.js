// const express = require("express")


// const express = require('express')
// const bodyparser = require("body-parser")
// const app = express()
// const port = 3000

// app.use(bodyparser.json());

// app.post('/conversation', function(req, res){
//   console.log(req.body);
//   console.log(req.headers);
//   res.send({
//     msg: "2+2=4"
//   })
// })

// app.get('/conversation', function(req, res){
//   res.send('Hello World!')
// })

// app.listen(port, function(){
//   console.log(`Example app listening on port ${port}`)
// })



// creation of an http server:
// const express = require("express");

// const app = express();

// function sum(n){
//   let ans = 0;
//   for(let i = 0; i<=n; i++){
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", function(req,res){
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hey mf your answer is " + ans);
// })

// app.listen(3000);



// const express = require("express");

// const app = express();

// function sum(a,b){
//   return a + b;
// }

// app.get("/",function(req,res){
//   const a = req.query.a;
//   const b = req.query.b;
//   const ans = sum(a,b);
//   res.send("hey mf the sum is " + ans)
// })


// app.listen(3000, function(){
//   console.log("server is running");
// });


// request methods :

// 1: GET - going for a consultaion to get a checkup.
// 2: POST - going to get a new kidney inserted.
// 3: PUT - going to get the kidney replaced.
// 4: DELETE - going to get a kideny removed.


// creating something :

const express = require("express");
const app = express();


const users = [{
  name : "Bhuwan",
  kidneys: [{
    healthy : true
  }]
}]


// users can check how many kidneys they have and their health
app.get("/", function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberofkidney = johnkidneys.length;
    let healthykidneys = 0;
    for(let i=0;i<johnkidneys.length;i++){
      if(johnkidneys[i].healthy){
        healthykidneys = healthykidneys + 1;
      }
    }
    const unhealthykidneys = numberofkidney - healthykidneys;

    res.json({
      numberofkidney,
      healthykidneys,
      unhealthykidneys
    })
    
})


// users can add a new kidney

app.use(express.json());
app.post("/", function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
      healthy : ishealthy
    })
    res.json({
      msg : "done"
    })
})


// users can replace a kidney and make it healthy
app.put("/", function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
      users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


// removing all unhealthy kidneys :
app.delete("/", function(req, res){
  const newkidney = [];
  for(let i=0; i<users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy){
      newkidney.push({
        healthy : true
      })
    }
  }
  users[0].kidneys = newkidney;
  res.json({msg : "done"})
})

app.listen(3000, function(){
  console.log("server is listening");
})


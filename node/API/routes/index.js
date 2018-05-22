var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
// mongoose.connect("mongodb://172.25.0.2/sample", (err) =>{
mongoose.connect("mongodb://mongo/sample", (err) =>{
  if(err){
    console.log(`DB Connect Fail! ${err}`);
  }
  else{
    console.log(`DB Connect success!!`);
  }
}); 

/* GET home page. */
router.get('/todo', function(req, res, next) {
  const UserData = mongoose.model("UserSchema");
  const userData = new UserData();
  console.log("hogehoge");
  UserData.find({}, function(err, docs) {
    res.json(docs); 
  });
  // res.json({ok: "ok"}); 
});
router.post('/todo', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.data)
  
  //collection 生成
  const UserData = mongoose.model("UserSchema");
  const userData = new UserData();
  userData.todoData = req.body.data;
  console.log(userData);

  userData.save((err) => {
    if(err){
      console.log(`insert Fail!! ${err}`);
    }
    else{
      UserData.find().sort({create:-1}).findOne({},(err,doc)=>{
          console.log(doc);
          res.json(doc);
      });
    }
    
  });
  
  // res.send('index', { title: 'Express' });
});


router.put('/todo', function(req, res, next) {
  console.log(req.body);
  let todoData = req.body.data;
  let _id = req.body._id;
  let resJson={};
  //collection 生成
  const UserData = mongoose.model("UserSchema");
  UserData.update({_id}, {todoData}, {upsert: true}, (err) =>{res.json(resJson); });
  // res.send('index', { title: 'Express' });
});

router.delete('/todo', function(req, res, next) {
  console.log(req.body);
  let _id = req.body._id;
  // let age = req.body.age;
  let resJson={};
  //collection 生成
  const UserData = mongoose.model("UserSchema");
  UserData.remove({_id}, (err) =>{res.json(resJson); });
  // res.send('index', { title: 'Express' });
});

module.exports = router;

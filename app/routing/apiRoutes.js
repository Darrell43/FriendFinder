var friendsData = require("../data/friends");
var friendsArray = require("./data/friends.js");
// set up routes
var routingApi = require("./routing/apiRoutes");
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


module.exports = function(app) {

  app.get("./data/friends.js", function(req, res) {
    res.json(friendsArray);
  });


  // API POST Requests
  app.post("./data/friends", function(req, res) {
   
    for (var i = 0; i < friendsArray.length; i++) {
      friendsArray.push(req.body);
      res.json(true);
    }
    console.log(friendsArray);
  });
};

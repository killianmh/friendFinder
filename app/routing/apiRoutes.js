
var path = require("path");
var friends = require('../data/friends');


module.exports = {
    friendsJson: function(app){
        app.get("/api/friends", function(req, res){
            return res.json(friends);
        });
        },
    friendsPopulate: function(app){
        app.post("/api/friends", function(req, res){
            var newFriend = req.body;
            console.log(newFriend);
            // console.log(friends.scores.length);
            var diff =[];
            if(friends.length == 0){
                console.log("No other friends");
                friends.push(newFriend);
                res.end();
                // diff[0] = Math.abs(parseInt(friends[0].scores[0]) - parseInt(newFriend.scores[0]));
            }
            else{
                // diff[0] = Math.abs(parseInt(friends[0].scores[0]) - parseInt(newFriend.scores[0]));
                for(var i = 0; i < friends.length; i ++){
                    console.log(i);
                    diff[i] = 0;
                    for(var j = 0; j < friends[i].scores.length; j ++){
                        console.log(j);
                        diff[i] += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j]));
                    }
                }
                console.log(diff);
                friends.push(newFriend);
                console.log(typeof(friends[0].scores[3]))
                var min = Math.min.apply(null, diff);
                console.log(min);
                for(var i = 0; i < diff.length; i ++){
                    if(diff[i] === min){
                        console.log("your match is: " + friends[i].name);
                        // alert("You have a match! It is: " + friends[i].name + " and here is there picture: " + friends[i].photo_url);
                        res.json(friends[i]);
                    }
                }
                // modal.style.display = "block";
                // res.json(friends[indexOf(Math.min(diff))]);
                // console.log(friends[indexOf(Math.min(diff))])
                res.end();
            }
            
        });
    }
};


var express = require("express");
var router = express.Router();
var Request = require("../models/request");

// INDEX route - show all requests
router.get("/", function(req, res){
  if(req.isAuthenticated()){
	// Get all requests from DB
	Request.find({}, function(err, allRequests, username){
	if(err){
	  console.log(err);
	} else {
	  res.render("index", {requests: allRequests});
	}
	});
  } else {
	res.redirect("/login");
  }
});


// CREATE route - add new request to DB
router.post("/", function(req, res){
  if(req.isAuthenticated()){
  // get data from form and add to requests array
		var author = req.body.author;
		var skill = req.body.skill;
		var supervisor = req.body.supervisor;
		var date = req.body.date;
		var startTime = req.body.startTime;
		var endTime = req.body.endTime;
		var prefDate = req.body.prefDate;
		var prefStartTime = req.body.prefStartTime;
		var prefEndTime = req.body.prefEndTime;
		var comments = req.body.comments;
		var newRequest = {
			author: author,
			skill: skill,
			supervisor: supervisor,
			date: date,
			startTime: startTime,
			endTime: endTime,
			prefDate: prefDate,
			prefStartTime: prefStartTime,
			prefEndTime: prefEndTime,
			comments: comments
		};
	  // Create a new request and save to database
	  Request.create(newRequest, function(err, newlyCreated){
		if(err){
		  console.log(err);
		} else {
		  // redirect back to requests page
		  res.redirect("/requests");
		}
	  });
  } else {
	res.redirect("/login");
  }
});


// NEW route - show form to create new request
router.get("/new", function(req, res){
	if(req.isAuthenticated()){
		res.render("new.ejs");
	} else {
		res.redirect("/login");
	}
});


// SHOW route - shows more info about a request
router.get("/:id", function(req, res){
	if(req.isAuthenticated()){
		// find the request with provided ID
		Request.findById(req.params.id, function(err, foundRequest){
			if(err){
			  console.log(err);
			  res.redirect("/");
			} else {
			  // Render show template with that request
			  res.render("show", {request: foundRequest});
			}
		});
	} else {
		res.redirect("/login");
	}
});


// DESTROY ROUTE
router.delete("/:id", function(req, res){
	if(req.user._id.equals("5d97a2d57757050eaa182be8")){
		Request.findByIdAndRemove(req.params.id, function(err){
			if(err){
				console.log(err);
				res.redirect("/requests");
			} else {
				res.redirect("/requests");
			}
		});
	} else {
		res.send("Admin access needed");
	}
});

// middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
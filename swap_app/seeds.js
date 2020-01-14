var mongoose = require("mongoose");
var Request  = require("./models/request");

var data = [
  {
    author: "User 1",
    skill: "Tier 1 US",
    supervisor: "Jane Doe",
    date: "11/25/2019",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: "Saturday or Sunday",
    prefStartTime: "9:00 a.m.",
    prefEndTime: "5:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    author: "User 2",
    skill: "International",
    supervisor: "Joe Schmoe",
    date: "11/26/2019",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: "Friday or Saturday",
    prefStartTime: "9:00 a.m.",
    prefEndTime: "5:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue."
  },
  {
    author: "User 3",
    skill: "International",
    supervisor: "Jane Doe",
    date: "10/5/2019",
    startTime: "11:00 a.m.",
    endTime: "7:30 p.m.",
    prefDate: "Friday or Saturday",
    prefStartTime: "11:00 a.m.",
    prefEndTime: "7:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue."
  },
  {
    author: "User 4",
    skill: "Email",
    supervisor: "Jane Doe",
    date: "12/27/2019",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: undefined,
    prefStartTime: null,
    prefEndTime: null,
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue. Integer vulputate mi nulla, ac mollis ex iaculis at."
  },
  {
    author: "User 4",
    skill: "Email",
    supervisor: "Jane Doe",
    date: "11/25/2019",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: undefined,
    prefStartTime: null,
    prefEndTime: null,
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue. Integer vulputate mi nulla, ac mollis ex iaculis at."
  },
  {
    author: "User 1",
    skill: "Tier 1 US",
    supervisor: "Jane Doe",
    date: "1/9/2020",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: "Saturday or Sunday",
    prefStartTime: "9:00 a.m.",
    prefEndTime: "5:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
	{
	  author: "User 5",
    skill: "Email",
    supervisor: "Joe Schmoe",
    date: "10/5/2019",
    startTime: "8:00 a.m.",
    endTime: "4:30 p.m.",
    prefDate: "Friday or Saturday",
    prefStartTime: "8:00 a.m.",
    prefEndTime: "4:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue."
	},
	{
	  author: "User 2",
    skill: "International",
    supervisor: "Joe Schmoe",
    date: "1/5/2020",
    startTime: "9:00 a.m.",
    endTime: "5:30 p.m.",
    prefDate: "Friday or Saturday",
    prefStartTime: "9:00 a.m.",
    prefEndTime: "5:30 p.m.",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat augue."
	}
];


function seedDB(){
  // Remove all requests
  Request.deleteMany({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed requests");
    // Add a few requests
    data.forEach(function(seed){
      Request.create(seed, function(err, data){
        if(err){
          console.log(err);
        } else {
          console.log("added a request from " + data.author);
        }
      });
    });
  });
}

module.exports = seedDB;
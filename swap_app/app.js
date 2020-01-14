const	express       = require("express"),
		app             = express(),
		bodyParser      = require("body-parser"),
		mongoose        = require("mongoose"),
		flash           = require("connect-flash"),
		methodOverride  = require("method-override"),
		Request         = require("./models/request"),
		passport        = require("passport"),
		LocalStrategy   = require("passport-local"),
		User            = require("./models/user"),
		seedDB          = require("./seeds").default,
	  port						= process.env.PORT || 3000;

// CONFIGURE JQUERY
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM();
const {document} = (new JSDOM("")).window;
global.document = document;

const $ = jQuery = require("jquery")(window);

// REQUIRE ROUTES
const	requestRoutes = require("./routes/requests"),
			indexRoutes = require("./routes/index");

// SEED THE DATABASE
seedDB();

// CONFIGURE PASSPORT
app.use(require("express-session")({
  secret: "yy5EF?Vsqsw2w9/9",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

// CONFIGURE & CONNECT TO MONGOOSE
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost:27017/shiftSwap2", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// CONFIGURE EXPRESS/APP
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// USE ROUTES
app.use("/", indexRoutes);
app.use("/requests", requestRoutes);

// REDIRECT INVALID URLS
app.get("/*", function(req, res){
	res.redirect("/");
});

// LISTEN
app.listen(port, process.env.IP, function(){
  console.log("Server has started");
});
'use strict';

module.exports = function (app) {
	app.route("/")
	.get(function (req, res) {
		var obj = {ipaddress: "", language: "", software: ""};
		obj["ipaddress"] = req.headers["x-forwarded-for"];
		obj["language"] = req.headers["accept-language"].split(",")[0];
		obj["software"] = req.headers["user-agent"].split("(")[1].split(")")[0];
		res.send(JSON.stringify(obj));	
	});	
};
"use strict";

let body = document.getElementById("body");
let home_btn = document.getElementById("home");
let user_btn = document.getElementById("user");
let comment_btn = document.getElementById("comment");
let question_btn = document.getElementById("question");
let cog_btn = document.getElementById("cog");

let home_icon = document.querySelector(".fa-home");
let user_icon = document.querySelector(".fa-user");
let comment_icon = document.querySelector(".fa-comment-dots");
let question_icon = document.querySelector(".fa-question-circle");
let cog_icon = document.querySelector(".fa-cog");

home_btn.addEventListener("click", function() {
	home_btn.style.backgroundColor = "#E0344F";
	home_icon.style.color = "#fff";
	body.style.backgroundColor = "#E0344F";

	user_btn.style.backgroundColor = "#fff";
	user_icon.style.color = "#333";
	comment_btn.style.backgroundColor = "#fff";
	comment_icon.style.color = "#333";
	question_btn.style.backgroundColor = "#fff";
	question_icon.style.color = "#333";
	cog_btn.style.backgroundColor = "#fff";
	cog_icon.style.color = "#333";
});

user_btn.addEventListener("click", function() {
	user_btn.style.backgroundColor = "#363AB2";
	user_icon.style.color = "#fff";
	body.style.backgroundColor = "#363AB2";

	home_btn.style.backgroundColor = "#fff";
	home_icon.style.color = "#333";
	comment_btn.style.backgroundColor = "#fff";
	comment_icon.style.color = "#333";
	question_btn.style.backgroundColor = "#fff";
	question_icon.style.color = "#333";
	cog_btn.style.backgroundColor = "#fff";
	cog_icon.style.color = "#333";
});

comment_btn.addEventListener("click", function() {
	comment_btn.style.backgroundColor = "#0DA15B";
	comment_icon.style.color = "#fff";
	body.style.backgroundColor = "#0DA15B";

	user_btn.style.backgroundColor = "#fff";
	user_icon.style.color = "#333";
	home_btn.style.backgroundColor = "#fff";
	home_icon.style.color = "#333";
	question_btn.style.backgroundColor = "#fff";
	question_icon.style.color = "#333";
	cog_btn.style.backgroundColor = "#fff";
	cog_icon.style.color = "#333";
});

question_btn.addEventListener("click", function() {
	question_btn.style.backgroundColor = "#0D99CA";
	question_icon.style.color = "#fff";
	body.style.backgroundColor = "#0D99CA";

	user_btn.style.backgroundColor = "#fff";
	user_icon.style.color = "#333";
	comment_btn.style.backgroundColor = "#fff";
	comment_icon.style.color = "#333";
	home_btn.style.backgroundColor = "#fff";
	home_icon.style.color = "#333";
	cog_btn.style.backgroundColor = "#fff";
	cog_icon.style.color = "#333";
});

cog_btn.addEventListener("click", function() {
	cog_btn.style.backgroundColor = "#FDA601";
	cog_icon.style.color = "#fff";
	body.style.backgroundColor = "#FDA601";

	user_btn.style.backgroundColor = "#fff";
	user_icon.style.color = "#333";
	comment_btn.style.backgroundColor = "#fff";
	comment_icon.style.color = "#333";
	question_btn.style.backgroundColor = "#fff";
	question_icon.style.color = "#333";
	home_btn.style.backgroundColor = "#fff";
	home_icon.style.color = "#333";
});
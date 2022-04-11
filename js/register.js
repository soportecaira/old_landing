window.onload=function(){
	let forms = document.getElementsByClassName("register-form");
	let select = document.getElementById("r-select");
	document.getElementById('students').addEventListener("click",function(){
		forms[0].style.display="block";
		select.style.display="none";
	})
	document.getElementById('universities').addEventListener("click",function(){
		forms[1].style.display="block";
		select.style.display="none";
		document.getElementsByTagName('body')[0].style.padding="50px 0 0 0";
	});
}
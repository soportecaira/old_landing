window.onload=function(){
	let button = document.getElementsByClassName("add-course-button")[0];
	let details = document.getElementsByClassName("add-course")[0];
	let submit = document.getElementById("submit-course-details");
	let cancel = document.getElementById("cancel-course-details");

	button.addEventListener("click",function(){
		details.style.display="block";
		button.style.display="none";
	});
	
	submit.addEventListener("click",function(){
		details.style.display="none";
		button.style.display="block";
	});

	cancel.addEventListener("click",function(){
		details.style.display="none";
		button.style.display="block";
	});


	let active = document.getElementsByClassName("active-tab")[0];
	let tab = active.getAttribute("id");
	let tabs = document.getElementsByClassName("a-tab");
	activeTab(tab);

	for(let i=0; i<tabs.length; i++){
		tabs[i].addEventListener("click", function(e){
			e.preventDefault();
			active = document.getElementsByClassName("active-tab")[0];
			active.setAttribute("class","a-tab");
			this.setAttribute("class","a-tab active-tab");
			activeTab(this.getAttribute("id"));
		});
	}

	let labels = document.getElementsByClassName("input-field");
	for(let i=0; i<labels.length; i++){
		labels[i].addEventListener("focus", function(){
			let a = this.getElementsByTagName("click")[0];
			console.log(a)
			a.setAttribute("class", "center-align active");
		})
		labels[i].addEventListener("blur", function(){
			this.setAttribute("class", "center-align");
		})
	}
}


function activeTab(tab){
	switch(tab){
		case "tab0":
			document.getElementById("feed").style.display="none";
			document.getElementById("courses").style.display="none";
			document.getElementById("info").style.display="block";
			break;
		case "tab1":
			document.getElementById("info").style.display="none";
			document.getElementById("courses").style.display="none";
			document.getElementById("feed").style.display="block";
			break;
		case "tab2":
			document.getElementById("feed").style.display="none";
			document.getElementById("info").style.display="none";
			document.getElementById("courses").style.display="block";
	}
}


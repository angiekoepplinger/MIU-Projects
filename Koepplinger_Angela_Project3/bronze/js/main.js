//Angela Koepplinger
//MIU: Term 1210
// Project 3: Bronze App
//Date: 10/08/12

//test push to working


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
	//alert(localStorage.value(0));

	//getElementById Function
	function ge(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};


	//Create select field element and populate with options.
	function createList(selector, listOptions, id){
		var formTag = document.getElementsByTagName("form");   //formTag is an array of all of the form tags.
		var selectLi = ge(selector);
		var makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", id);
		
		for(var i=0, j=listOptions.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = listOptions[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);
	};

	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].asset;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			assetValue = radios[i].value;
			};
		};
		console.log(assetValue);
	};

	function getCheckboxValue(itemName){
		if(ge(itemName).checked){
			return value = ge(itemName).value;
		} else{
			return value = "No"
		};
	};

	function toggleControls(x){
		switch(x){
			//when display data is selected, data is "on", hide form.
			case "on":
				ge("procurementTask").style.display = "none";		//clear data is in an anchor tag in HTML, anchor tags are by default "inline".  
				ge("clearData").style.display = "inline";			//If you make it a block level element, it will span the width of the display.
				ge("displayData").style.display = "none";			//We do not want the displayData tab to show, because we are in this page already, so we turn it off.
				ge("addNew").style.display = "inline";
				break;
			case "off":
				ge("procurementTask").style.display = "block"; 
				ge("clearData").style.display = "inline";
				ge("displayData").style.display = "inline";
				ge("addNew").style.display = "none";
				ge("items").style.display = "none";
				break;
			default:
				return false;
		};
	};
	
	function storeData(key){
		//If there is no key, this means this is a brand new item and we need a new key
		if(!key){
		var id = Math.floor(Math.random()*100000001);
	} else {
		//Set the id to the existing key that we're editing so that it will save over the data.
		//The key is the same key that's been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storeData function.
		id = key;
	};
		//Gather up all of our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio();

		var item           			= {};
			item.purchaseType      	= ["Purchase Type:", ge("purchaseList").value];
			item.workOrder 			= ["Work Order:", ge("workOrder").value];
			item.supportSite 		= ["Support Site:", ge("supportSite").value];
			item.itemType 			= ["Item Type:", ge("itemList").value];
			item.asset 				= ["Asset:", assetValue];
			item.manufacturer 		= ["Manufacturer:", ge("manufacturer").value];
			item.partNumber 		= ["Part Number:", ge("partNumber").value];
			item.qty 				= ["Qty:", ge("qty").value];
			item.urgency 			= ["Urgency:", ge("urgency").value];
			item.mgmtApproval 		= ["Management Approval:", getCheckboxValue("mgmtApproval")];
			item.rrRequest 			= ["R&R Request:", getCheckboxValue("rrRequest")];
			item.dateRequired 		= ["Date Required:", ge("dateRequired").value];
			item.completionDate		= ["Completion Date:", ge("completionDate").value];
			item.notes			 	= ["Notes:", ge("notes").value];

			//Save data into Local Storage: Use Stringify to convert our object to a string.
			localStorage.setItem(id, JSON.stringify(item));
			alert("Purchase Task Saved!");
	};


	function getData(){
		toggleControls("on");
		if(localStorage.length ===0){
			alert("There is no data in Local Storage, default data was added.");
			autoFillData();
		};
		//Write Data from Local Storage to the browser.
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeUl = document.createElement("ul");
		makeDiv.appendChild(makeUl);
		
		for(var i = 0, j=localStorage.length; i<j; i++){ 									//Loop through the local storage and grab the id(key) & associated object(value)
			if(Number(localStorage.key(i)/1) === Number(localStorage.key(i))) {			//Safari 6 adds info to the local storage, convert strings to numbers to exclude safari storage from our data.
				var makeli = document.createElement("li");
				var linksLi = document.createElement("li");	//NEW
				makeUl.appendChild(makeli);
				var key = localStorage.key(i);											//id associated with form submission object
				var value = localStorage.getItem(key);						//the object, in this case: var item{}
				var object = JSON.parse(value);												//convert string from local storage back into an object using JSON.parse!
				var makeSubUl = document.createElement("ul");
				makeli.appendChild(makeSubUl);
				getImage(object.purchaseType[1], makeSubUl);
				for(var x in object){														//example: for "item.purchaseType"(key) in the object
					var makeSubli = document.createElement("li");
					makeSubUl.appendChild(makeSubli);
					//get the "value" of the data in our object. The value of our key is an array.
					//[x] = key,  [0] = label in array, [1] = value in array.
					var objSubText = object[x][0]+ " " +object[x][1];	
					makeSubli.innerHTML = objSubText;	
					makeSubUl.appendChild(linksLi);	//NEW  edit link & delete link
				};
			makeItemLinks(localStorage.key(i), linksLi);	//Create our edit and delete buttons/link for each item in local storage.
			};
					
		};
		document.body.appendChild(makeDiv);
	};

	//Get the image for the right category
	function getImage(catName, makeSubUl){
		var imageLi = document.createElement("li");
		makeSubUl.appendChild(imageLi);
		var newImg = document.createElement("img");
		var setSrc = newImg.setAttribute("src", "images/"+ catName +".png");
		imageLi.appendChild(newImg);
	};


	//Auto Populate Local Storage
	function autoFillData(){
		//The actual JSON OBJECT data required for this to work is coming from our json.js file, which is loaded from our HTML file
		//Store the JSON OBJECT into local storage
		for(var x in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[x]));
		};
	};
	
	//Make Item Links
	//Create the edit and delete links for each stored item when displayed.
	function makeItemLinks(key, linksLi){
		//add edit single item link
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Task";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		//add line break
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		//add delete single item link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Task";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};


	function editItem(){
		//Grab data from our item from Local Storage.
		var value = localStorage.getItem(this.key);	//this.key = editItem.key, you can use this because this function is tied to the editLink item
		var item = JSON.parse(value);  //value is = to value of this.key, which is a string

		//show the form
		toggleControls("off");

		//populate the form fields with current localStorage values.
		ge("purchaseList").value 	= item.purchaseType[1];	//index[1] is the value of our items
		ge("workOrder").value 		= item.workOrder[1];
		ge("supportSite").value 		= item.supportSite[1];
		ge("itemList").value 		= item.itemType[1];
		var radios = document.forms[0].asset;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Yes" && item.asset[1] == "Yes"){
				radios[i].setAttribute("checked", "checked");
			} else if(radios[i].value == "No" && item.asset[1] == "No"){
				radios[i].setAttribute("checked", "checked");
			};
		};
		ge("manufacturer").value 	= item.manufacturer[1];
		ge("partNumber").value 		= item.partNumber[1];
		ge("qty").value 				= item.qty[1];
		ge("urgency").value 			= item.urgency[1];
		if(item.mgmtApproval[1] == "Yes"){
			ge("mgmtApproval").setAttribute("checked", "checked");
		};
		if(item.rrRequest[1] == "Yes"){
			ge("rrRequest").setAttribute("checked", "checked");
		};
		ge("dateRequired").value 	= item.dateRequired[1];
		ge("completionDate").value 	= item.completionDate[1];
		ge("notes").value 			= item.notes[1];

		//Remove the initial listener from the input "save contact" button.
		save.removeEventListener("click", storeData);
		//Change Submit Button Value to Edit Button
		ge("submit").value = "Edit Task";
		var editSubmit = ge("submit");
		//Save the key value established in this function as a property of the editSubmit event
		//so we can use that value when we save the data we edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	};

	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this Task?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Task has been deleted!")
			window.location.reload();
		} else {
			alert("Task was NOT deleted!")
		};
	};


	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		} else {
			localStorage.clear();
				alert("All tasks are deleted!");
				window.location.reload();
				return false;
		};
	};

	function validate(e){		//e = event data
		//Define the elements that we want to check
		var getPurchaseList = ge("purchaseList");
		var getItemList = ge("itemList");
		var getWorkOrder = ge("workOrder");
		var getSupportSite = ge("supportSite");
		var getDateRequired =  ge("dateRequired");

		//Reset Error Messages
		errorMsg.innerHTML = "";
		getPurchaseList.style.border = "1px solid black";
		getItemList.style.border = "1px solid black";
		getWorkOrder.style.border = "1px solid black";
		getSupportSite.style.border = "1px solid black";
		getDateRequired.style.border = "1px solid black";

		//Get Error Messages
		var messageArray = [];
		//Group Validation
		if(getPurchaseList.value === "--Select A Type--"){
			var purchaseListError = "Please choose a Purchase Type!";
			getPurchaseList.style.border = "1px solid red";
			messageArray.push(purchaseListError);
		};
		if(getItemList.value === "--Select A Type--"){
			var itemListError = "Please choose an Item Type!";
			getItemList.style.border = "1px solid red";
			messageArray.push(itemListError);
		};

		//Work Order Validation
		if(getWorkOrder.value ==="") {
			var workOrderError = "Please enter Work Order!";
			getWorkOrder.style.border = "1px solid red";
			messageArray.push(workOrderError);
		};

		//Support Site Validation
		if(getSupportSite.value ==="") {
			var supportSiteError = "Please enter Support Site!";
			getSupportSite.style.border = "1px solid red";
			messageArray.push(supportSiteError);
		};

		//Date Required Validation
		if(getDateRequired.value ==="") {
			var dateRequiredError = "Please enter Date Required!";
			getDateRequired.style.border = "1px solid red";
			messageArray.push(dateRequiredError);
		};

		// email Validation
		// var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+ge/;
		// if(!re.exec(getEmail.value))){
		// 	var emailError = "Please enter valid email address.";
		// 	getEmail.style.border = "1px solid red";
		// 	messageArray.push(emailError);
		// };

		//If there were errors, display them on the screen.
		if(messageArray.length >= 1){
			for(var i=0, j = messageArray.length; i<j; i++){
				var text = document.createElement("li");
				text.innerHTML = messageArray[i];
				errorMsg.appendChild(text);
			};
		e.preventDefault();
		return false;
		} else {
			//If all is OK, save our data.  Send the key value (which came from the editData function)
			//Remember this key value was passed through the editSubmit even listener as a property.
			storeData(this.key);
		};
	};

	//Variable defaults
	var purchaseTypeOptions = ["--Select A Type--", "Maintenance", "Product", "Raw Materials", "Upgrade", "Indirect"];
	createList("purchaseType", purchaseTypeOptions, "purchaseList");
	var itemTypeOptions = ["--Select A Type--", "Hardware", "Software", "Support Contract"];
	createList("itemType", itemTypeOptions, "itemList");
	var assetValue;
	var value;
	errorMsg = ge("errors");
	

	// Set Link & Submit Click Events
	 var displayData = ge('displayData');
	displayData.addEventListener("click", getData);
	var clearData = ge('clearData');
	clearData.addEventListener("click", clearLocal);
	var save = ge("submit");
	save.addEventListener("click", validate);
});
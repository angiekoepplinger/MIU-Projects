/*Angela Koepplinger
MIU: Term 1210
Project 3: Web App
Date: 10/11/12*/



/*$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	*/
		
var parsePurchaseTask = function(data){
//uses form data here
console.log(data);
};

$(document).on('pageinit', function(){

	var myForm = $('#procurementTask');
	var pterrorslink = $("#pterrorslink");

	myForm.validate({
		invalidHandler: function(form, validator) {
			pterrorslink.click();
			
			/*console.log(validator.submitted);
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+key+'"]').not("[generated]");
				console.log(label.text());
				var legend = label.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.length ? legend.text() : label.text();
				console.log(fieldName);
				html += '<li>' + fieldName + '</li>';
			};

			$("#purchasetaskerrors ul").html(html); */
		},
		submitHandler: function() {
			//var data = myForm.serializeArray();
			storeData();
		}
	});
});

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
		//getSelectedRadio();

		var item           			= {};
			item.purchaseType      	= ["Purchase Type:", $("#purchase-type").val()];
			item.workOrder 			= ["Work Order:", $("#workorder").val()];
			item.supportSite 		= ["Support Site:", $("#supportsite").val()];
			item.itemType 			= ["Item Type:", $("#select.item-type").val()];
			item.asset 				= ["Asset:", $('input:radio[name=asset-role]:checked').val()];
			item.manufacturer 		= ["Manufacturer:", $("#manufacturer").val()];
			item.partNumber 		= ["Part Number:", $("#partNumber").val()];
			item.qty 				= ["Qty:", $("#qty").val()];
			item.urgency 			= ["Urgency:", $("#urgency").val()];
			item.mgmtApproval 		= ["Management Approval:", $('input:radio[name=mgmt-approval]:checked').val()];
			item.rrRequest 			= ["R&R Request:", $('input:radio[name=rr-request]:checked').val()];
			item.dateRequired 		= ["Date Required:", $("#daterequired").val()];
			item.completionDate		= ["Completion Date:", $("#datecompleted").val()];
			item.notes			 	= ["Notes:", $("#notes").val()];

			//Save data into Local Storage: Use Stringify to convert our object to a string.
			localStorage.setItem(id, JSON.stringify(item));
			alert("Purchase Task Saved!");
	};

	//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){
	 
};  */

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



/*var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
*/
	

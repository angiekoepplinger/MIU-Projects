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
	myForm.validate({
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(data);
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
		getSelectedRadio();

		var item           			= {};
			item.purchaseType      	= ["Purchase Type:", $("#purchaseList").val()];
			item.workOrder 			= ["Work Order:", $("#workOrder").val()];
			item.supportSite 		= ["Support Site:", $("#supportSite").val()];
			item.itemType 			= ["Item Type:", $("#itemList").val()];
			item.asset 				= ["Asset:", assetValue];
			item.manufacturer 		= ["Manufacturer:", $("#manufacturer").val()];
			item.partNumber 		= ["Part Number:", $("#partNumber").val()];
			item.qty 				= ["Qty:", $("#qty").val()];
			item.urgency 			= ["Urgency:", $("#urgency").val()];
			item.mgmtApproval 		= ["Management Approval:", getCheckboxValue("mgmtApproval")];
			item.rrRequest 			= ["R&R Request:", getCheckboxValue("rrRequest")];
			item.dateRequired 		= ["Date Required:", $("#dateRequired").val()];
			item.completionDate		= ["Completion Date:", $("#completionDate").val()];
			item.notes			 	= ["Notes:", $("#notes").val()];

			//Save data into Local Storage: Use Stringify to convert our object to a string.
			localStorage.setItem(id, JSON.stringify(item));
			alert("Purchase Task Saved!");
	};
	

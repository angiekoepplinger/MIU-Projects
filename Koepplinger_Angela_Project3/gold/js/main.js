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
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
*/
	

//Angela Koepplinger
//MIU: Term 1210
// Project 4: Bronze App
//Date: 10/15/12


var json = {
	"task1": {
		"purchaseType": 	["Purchase Type:", "Product"],
		"workOrder": 		["Work Order:", "HUB SRVRS"],
		"supportSite": 		["Support Site:", "HSV"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Supermicro"],
		"partNumber": 		["Part Number:", "SYS-1026T-URF"],
		"qty": 				["Qty:", "100"],
		"urgency": 			["Urgency:", "8"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2013-03-01"],
		"completionDate": 	["Completion Date:", "2012-12-31"],
		"notes": 			["Notes:", "Task Completed"]
	},
	"task2": {
		"purchaseType": 	["Purchase Type:", "Maintenance"],
		"workOrder": 		["Work Order:", "TES/SM"],
		"supportSite": 		["Support Site:", "TES"],
		"itemType": 		["Item Type:", "Support Contract"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Cisco Systems"],
		"partNumber": 		["Part Number:", "CON-SNT"],
		"qty": 				["Qty:", "2000"],
		"urgency": 			["Urgency:", "7"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2013-01-01"],
		"completionDate": 	["Completion Date:", "2012-12-15"],
		"notes": 			["Notes:", "Task Completed"]
	},
	"task3": {
		"purchaseType": 	["Purchase Type:", "Upgrade"],
		"workOrder": 		["Work Order:", "KVMoIP Upgrade"],
		"supportSite": 		["Support Site:", "TES"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Avocent"],
		"partNumber": 		["Part Number:", "AMX5121-001"],
		"qty": 				["Qty:", "50"],
		"urgency": 			["Urgency:", "6"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2013-06-01"],
		"completionDate": 	["Completion Date:", ""],
		"notes": 			["Notes:", "Add separate entry for DSR-1024 units"]
	},
	"task4": {
		"purchaseType": 	["Purchase Type:", "Raw Materials"],
		"workOrder": 		["Work Order:", "N/A"],
		"supportSite": 		["Support Site:", "HQ"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Middle Atlantic"],
		"partNumber": 		["Part Number:", "US1"],
		"qty": 				["Qty:", "48"],
		"urgency": 			["Urgency:", "5"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-11-01"],
		"completionDate": 	["Completion Date:", "2012-10-15"],
		"notes": 			["Notes:", "Divy out to support sites upon receipt"]
	},
	"task5": {
		"purchaseType": 	["Purchase Type:", "Indirect"],
		"workOrder": 		["Work Order:", "In House"],
		"supportSite": 		["Support Site:", "HQ"],
		"itemType": 		["Item Type:", "Support Contract"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Rackspace"],
		"partNumber": 		["Part Number:", "Web Hosting"],
		"qty": 				["Qty:", "1"],
		"urgency": 			["Urgency:", "8"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-10-01"],
		"notes": 			["Notes:", "Payment for web hosting"]
	},
	"task6": {
		"purchaseType": 	["Purchase Type:", "Product"],
		"workOrder": 		["Work Order:", "Mobile Node 4"],
		"supportSite": 		["Support Site:", "TES"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Tripp Lite"],
		"partNumber": 		["Part Number:", "B020-001-19"],
		"qty": 				["Qty:", "2"],
		"urgency": 			["Urgency:", "10"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-09-25"],
		"notes": 			["Notes:", "Task Completed, purchase cables"]
	},
	"task7": {
		"purchaseType": 	["Purchase Type:", "Maintenance"],
		"workOrder": 		["Work Order:", "RMM/SM"],
		"supportSite": 		["Support Site:", "RMM"],
		"itemType": 		["Item Type:", "Software"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Microsoft"],
		"partNumber": 		["Part Number:", "Windows Server2008 R2 St"],
		"qty": 				["Qty:", "1"],
		"urgency": 			["Urgency:", "6"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2013-01-01"],
		"completionDate": 	["Completion Date:", "2012-11-15"],
		"notes": 			["Notes:", "OEM 1 device, 5 user cals w/media"]
	},
	"task8": {
		"purchaseType": 	["Purchase Type:", "Upgrade"],
		"workOrder": 		["Work Order:", "Projector Upgrade"],
		"supportSite": 		["Support Site:", "RTS"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Sony"],
		"partNumber": 		["Part Number:", "VPL-FH500-L"],
		"qty": 				["Qty:", "10"],
		"urgency": 			["Urgency:", "10"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-08-01"],
		"completionDate": 	["Completion Date:", "2012-07-26"],
		"notes": 			["Notes:", "Spec Mounts for each"]
	},
	"task9": {
		"purchaseType": 	["Purchase Type:", "Raw Materials"],
		"workOrder": 		["Work Order:", "N/A"],
		"supportSite": 		["Support Site:", "BLD"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Belkin"],
		"partNumber": 		["Part Number:", "A3L791B07RDS"],
		"qty": 				["Qty:", "150"],
		"urgency": 			["Urgency:", "6"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-09-25"],
		"notes": 			["Notes:", ""]
	},
	"task10": {
		"purchaseType": 	["Purchase Type:", "Indirect"],
		"workOrder": 		["Work Order:", "In House"],
		"supportSite": 		["Support Site:", "HQ"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "APC"],
		"partNumber": 		["Part Number:", "SMT3000RM2U"],
		"qty": 				["Qty:", "5"],
		"urgency": 			["Urgency:", "8"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-11-01"],
		"completionDate": 	["Completion Date:", "2012-10-01"],
		"notes": 			["Notes:", "UPS units for lab"]
	},
	"task11": {
		"purchaseType": 	["Purchase Type:", "Product"],
		"workOrder": 		["Work Order:", "Video CODEC"],
		"supportSite": 		["Support Site:", "TES"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "RGB"],
		"partNumber": 		["Part Number:", "DSx"],
		"qty": 				["Qty:", "75"],
		"urgency": 			["Urgency:", "10"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-09-25"],
		"notes": 			["Notes:", "Task Completed"]
	},
	"task12": {
		"purchaseType": 	["Purchase Type:", "Maintenance"],
		"workOrder": 		["Work Order:", "TES/SM"],
		"supportSite": 		["Support Site:", "TES"],
		"itemType": 		["Item Type:", "Support Contract"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "BlueCoat"],
		"partNumber": 		["Part Number:", "Annual packetshaper renewal"],
		"qty": 				["Qty:", "27"],
		"urgency": 			["Urgency:", "6"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2013-01-01"],
		"completionDate": 	["Completion Date:", "2012-12-15"],
		"notes": 			["Notes:", "enter POP for each"]
	},
	"task13": {
		"purchaseType": 	["Purchase Type:", "Upgrade"],
		"workOrder": 		["Work Order:", "Firewall Upgrade"],
		"supportSite": 		["Support Site:", "HUB"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Cisco Systems"],
		"partNumber": 		["Part Number:", "5510"],
		"qty": 				["Qty:", "45"],
		"urgency": 			["Urgency:", "10"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-09-01"],
		"completionDate": 	["Completion Date:", "2012-08-26"],
		"notes": 			["Notes:", "Purchase Smartnet for each"]
	},
	"task14": {
		"purchaseType": 	["Purchase Type:", "Raw Materials"],
		"workOrder": 		["Work Order:", "N/A"],
		"supportSite": 		["Support Site:", "BLD"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Extron"],
		"partNumber": 		["Part Number:", "26-649-25"],
		"qty": 				["Qty:", "15"],
		"urgency": 			["Urgency:", "8"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-09-25"],
		"notes": 			["Notes:", ""]
	},
	"task15": {
		"purchaseType": 	["Purchase Type:", "Indirect"],
		"workOrder": 		["Work Order:", "In House"],
		"supportSite": 		["Support Site:", "HQ"],
		"itemType": 		["Item Type:", "Software"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "Microsoft"],
		"partNumber": 		["Part Number:", "Windows7 OEM"],
		"qty": 				["Qty:", "3"],
		"urgency": 			["Urgency:", "7"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-10-15"],
		"completionDate": 	["Completion Date:", "2012-10-01"],
		"notes": 			["Notes:", "For production"]
	},
	"task16": {
		"purchaseType": 	["Purchase Type:", "Product"],
		"workOrder": 		["Work Order:", "CA/SD"],
		"supportSite": 		["Support Site:", "CA"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Apple"],
		"partNumber": 		["Part Number:", "Xserve"],
		"qty": 				["Qty:", "3"],
		"urgency": 			["Urgency:", "4"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2013-05-01"],
		"completionDate": 	["Completion Date:", ""],
		"notes": 			["Notes:", ""]
	},
	"task17": {
		"purchaseType": 	["Purchase Type:", "Maintenance"],
		"workOrder": 		["Work Order:", "MIT/SM"],
		"supportSite": 		["Support Site:", "MIT"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "Yes"],
		"manufacturer": 	["Manufacturer:", "Cisco Systems"],
		"partNumber": 		["Part Number:", "2960 PoE"],
		"qty": 				["Qty:", "1"],
		"urgency": 			["Urgency:", "10"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-09-30"],
		"completionDate": 	["Completion Date:", "2012-09-20"],
		"notes": 			["Notes:", ""]
	},
	"task18": {
		"purchaseType": 	["Purchase Type:", "Upgrade"],
		"workOrder": 		["Work Order:", "Rack/UPG"],
		"supportSite": 		["Support Site:", "HUB"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "HP"],
		"partNumber": 		["Part Number:", "AF019A"],
		"qty": 				["Qty:", "4"],
		"urgency": 			["Urgency:", "8"],
		"mgmtApproval": 	["Management Approval:", "Yes"],
		"rrRequest": 		["R&R Request:", "Yes"],
		"dateRequired": 	["Date Required:", "2012-01-01"],
		"completionDate": 	["Completion Date:", "2012-09-30"],
		"notes": 			["Notes:", "purchase baying kits"]
	},
	"task19": {
		"purchaseType": 	["Purchase Type:", "Raw Materials"],
		"workOrder": 		["Work Order:", "N/A"],
		"supportSite": 		["Support Site:", "BLD"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "PNY"],
		"partNumber": 		["Part Number:", "DisplayPort/DVI adapters"],
		"qty": 				["Qty:", "20"],
		"urgency": 			["Urgency:", "5"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-10-01"],
		"completionDate": 	["Completion Date:", "2012-09-27"],
		"notes": 			["Notes:", ""]
	},
	"task20": {
		"purchaseType": 	["Purchase Type:", "Indirect"],
		"workOrder": 		["Work Order:", "In House"],
		"supportSite": 		["Support Site:", "HQ"],
		"itemType": 		["Item Type:", "Hardware"],
		"asset": 			["Asset:", "No"],
		"manufacturer": 	["Manufacturer:", "PNY"],
		"partNumber": 		["Part Number:", "VCQ2000-PB"],
		"qty": 				["Qty:", "4"],
		"urgency": 			["Urgency:", "7"],
		"mgmtApproval": 	["Management Approval:", "No"],
		"rrRequest": 		["R&R Request:", "No"],
		"dateRequired": 	["Date Required:", "2012-10-15"],
		"completionDate": 	["Completion Date:", "2012-10-01"],
		"notes": 			["Notes:", "For production"]
	},
};
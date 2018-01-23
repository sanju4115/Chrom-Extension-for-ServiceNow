searchUrbanDict = function(word){
  var query = word.selectionText; var uri;
  if(query.includes('INC')){
	  uri = '/incident.do'
  }else if(query.includes('ENH')){
	uri = '/u_altair_enhancement.do';  
  }
  chrome.tabs.create({url: "https://prod-servicedesk.publicisgroupe.net/nav_to.do?uri=" + uri + "?sys_id=" + query});
};

searchSAPNote = function(word){
  var query = word.selectionText;
  var temp = new Array();
  temp = query.split("/");
  chrome.tabs.create({url: "https://launchpad.support.sap.com/#/incident/search/" + temp[0]+ "%252F" + temp[1]});
};

chrome.contextMenus.create({
  title: "Search in ServiceNow",
  contexts:["selection"],
  onclick: searchUrbanDict
}); 

chrome.contextMenus.create({
  title: "Search SAP Note",
  contexts:["selection"],
  onclick: searchSAPNote
}); 


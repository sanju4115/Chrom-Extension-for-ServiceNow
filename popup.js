var PopupController = function () {
  this.button_inc = document.getElementById('button_inc');
  this.button_enh = document.getElementById('button_enh'); 
  this.button_go = document.getElementById('button_go');
  this.AltairUI_ = document.getElementById('AltairUI');  
  this.button_charm = document.getElementById('button_charm');
  this.addListeners_();
};

PopupController.prototype = {
  button_inc: null,
  button_enh: null,
  addListeners_: function () {
    this.button_inc.addEventListener('click', this.handleClick_inc.bind(this));
	this.button_enh.addEventListener('click', this.handleClick_enh.bind(this));
	this.button_go.addEventListener('click', this.handleClick_go.bind(this));
	this.button_charm.addEventListener('click', this.handleClick_charm.bind(this));

  },

  handleClick_charm: function () {
    chrome.tabs.create({url: "http://frntraltpsm02.global.publicisgroupe.net:8000/sap(bD1lbiZjPTgwMCZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-system-login-basic_auth=X&sap-client=800&sap-language=EN"});
  },
  
  handleClick_inc: function () {
	var uri = '/incident.do';
    chrome.tabs.create({url: "https://prod-servicedesk.publicisgroupe.net/nav_to.do?uri=" + uri});
  },
  
  handleClick_enh: function () {
    var uri = '/u_altair_enhancement.do';
    chrome.tabs.create({url: "https://prod-servicedesk.publicisgroupe.net/nav_to.do?uri=" + uri});
  },
  
  handleClick_go: function () {
    var removal_start = this.AltairUI_.value;
    if (removal_start == 'PP1') {
     chrome.tabs.create({url: "https://altair.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'QP1') {
     chrome.tabs.create({url: "https://altair.qua.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'QP2') {
     chrome.tabs.create({url: "https://altair2.qua.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'DP1') {
     chrome.tabs.create({url: "https://altair.dev.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'DP2') {
     chrome.tabs.create({url: "https://altair2.dev.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'SP1') {
     chrome.tabs.create({url: "https://altair.sbx.publicisgroupe.net/irj/portal"});     
    };
	if (removal_start == 'UP1') {
     chrome.tabs.create({url: "https://altair.uat.publicisgroupe.net/irj/portal"});     
    };
    if (removal_start == 'UP2') {
     chrome.tabs.create({url: "https://altair2.uat.publicisgroupe.net/irj/portal"});     
    };
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});

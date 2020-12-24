function loadPartialHTML_(partial) {
  const htmlServ=HtmlService.createTemplateFromFile(partial);
  
  // prende il testo all'interno del service
  return htmlServ.evaluate().getContent();
}


function loadSearchView() { 
   return loadPartialHTML_("search");
}

function loadAddCustomersView() {
   return loadPartialHTML_("addcustomer");
}

function loadEditCustomersView() {
   return loadPartialHTML_("editcustomer");
}



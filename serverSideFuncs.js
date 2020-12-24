//REV 1

function getDataForSearch() {
  ss=SpreadsheetApp.getActiveSpreadsheet();
  ws=ss.getSheetByName("Foglio1");
  return ws.getRange(2, 1, ws.getLastRow()-1, 3).getValues();
  
}

// MODULO PER TROVARE L'ID E CANCELLARLO

function deleteById(id) {

  ss=SpreadsheetApp.getActiveSpreadsheet();
  
  ws=ss.getSheetByName("Foglio1");
   var custIds= ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLowerCase());
  const posIndex=custIds.indexOf(id.toString().toLowerCase());
  
  const rowNumber=posIndex===-1 ? 0 : posIndex+2;
  
  ws.deleteRow(rowNumber);
  
  
}

// MODULO PER RECUPERARE I DATI
function getCustomerById(id) {
  
  ss=SpreadsheetApp.getActiveSpreadsheet();
  
  ws=ss.getSheetByName("Foglio1");
   var custIds= ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLowerCase());
  const posIndex=custIds.indexOf(id.toString().toLowerCase());
  
  const rowNumber=posIndex===-1 ? 0 : posIndex+2;
  
  var customerInfo=ws.getRange(rowNumber, 1, 1,4).getValues()[0];
  return {custID: customerInfo[0], firstName: customerInfo[1], lastName: customerInfo[2], email: customerInfo[3] }

}


// MODULO PER MODIFICARE I DATI
function editCustomerById(id, customerInfo) {
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("Foglio1");
  const custIds= ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r=> r[0].toString().toLowerCase());
  const posIndex=custIds.indexOf(id.toString().toLowerCase());
  const rowNumber=posIndex===-1 ? 0 : posIndex+2;
  ws.getRange(rowNumber, 2,1,3).setValues([[
    customerInfo.firstName,
    customerInfo.lastName,
    customerInfo.email
  ]]);
  return true;
  

}

// MODULO PER INSERIRE NUOVI DATI
function addCustomer (customerInfo) {
 const ss=SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("Foglio1");
  const uniqueIDs=ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
  var maxNum=0;
  
  uniqueIDs.forEach(r=>{
                    maxNum=r[0]>maxNum ? r[0] : maxNum
                    });
  var newID=maxNum+1;
  
  ws.appendRow([
  newID,
    
   customerInfo.firstName,
    customerInfo.lastName,
    customerInfo.email])

}
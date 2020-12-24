function loadMainForm() {
  
  // creo il servizio e chiamo il file html
  const htmlServ= HtmlService.createTemplateFromFile("main");
  const html=htmlServ.evaluate();
  html.setWidth(850).setHeight(600);
  
  //definisce il tipo di UI
  const ui=SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Inserimento di dati");
  
  
}


function createMenu_() {
 //definisce il tipo di UI
  const ui=SpreadsheetApp.getUi();
  const menu=ui.createMenu("Menu Personale");
  menu.addItem("Apri il Form di Inserimento", "loadMainForm");
  
  //Inserisce dopo aver caricato la funzione il menu all'interno della barra
  menu.addToUi();

}

function onOpen() {
  createMenu_();


}
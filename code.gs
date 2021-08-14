function doGet(e) {
   var htmlOutput =  HtmlService.createTemplateFromFile('page2');
   return htmlOutput.evaluate();
}

function doPost(e){
  if (e.parameter.save == 'Save'){
    //บันทึกข้อมูลลง sheet ที่กำหนด
    var dataSheetID = SpreadsheetApp.openById("1ywo4VAYf2YcpOk8QUEg2NCg4PTtQCrwJMKQU5cXCRLQ");
    var sheet = dataSheetID.getSheetByName("data");
    var data = [new Date(),e.parameter.name,e.parameter.dep,"'" + e.parameter.tel]; 
    sheet.appendRow(data);
  }
   //เมื่อบันทึกแล้วกลับไปยังหน้าที่กำหนด
   var htmlOutput =  HtmlService.createTemplateFromFile('page2');
   return htmlOutput.evaluate();
}

function getUrl() {
 var url = ScriptApp.getService().getUrl()
 //var url= "https://script.google.com/a/web1.dara.ac.th/macros/s/AKfycbwG4GPwq0ocv4v7aboI03Y9qiJMqVCUZeH7nbCEbFKk/dev";
 return url;
}

const functions = require('firebase-functions');

//cuidado que te pueden hacer pagar por usos al llegar a 100 pedidas instantaneas
 exports.emojify = functions.database.ref("/messages/{pushId}/text").onCreate(myHandler =>{
   console.log("Emojify..");
   var originalData = myHandler.val();
   var emojifiedText = emojiText(originalData);
   console.log(emojifiedText);
   return myHandler.ref.set(emojifiedText); //devuelve null o concreto, o promesa
 });

 function emojiText (text){
   var emojifiedText = text;
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    emojifiedText = emojifiedText.replace(/\b651111111\b/ig, "HIDDEN FIELD");
    return emojifiedText;
 }
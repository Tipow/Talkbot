 // This waits for the user to click the Submit button.
 document.getElementById('submitButton').addEventListener('click',
 function() {
   //This takes whatever the user entered and saves it as 'messageInput'.
   var messageInputValue = document.getElementById('messageInput').value;
  // This changes the message to all lower case
   messageInputValue = messageInputValue.toLowerCase();
  //Conditional statement to display knock    
   if(messageInputValue.includes('joke')){
     document.getElementById('TalkbotResponse').innerHTML = 'knock knock';
   }

   // This clears the `messageInput` text box.
   document.getElementById('messageInput').value = '';
 
  //Conditional statement to display woo    
   if(messageInputValue.includes('there')){
     document.getElementById('TalkbotResponse').innerHTML = 'woo';
   }

   // This clears the `messageInput` text box.
   document.getElementById('messageInput').value = '';
 
   if(messageInputValue.includes('woo')){
    document.getElementById('TalkbotResponse').innerHTML = 'woo who!';
  }

  // This clears the `messageInput` text box.
  document.getElementById('messageInput').value = '';
});

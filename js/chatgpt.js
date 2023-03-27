(function() {

   async function sendChatGPT() {
        const message = document.querySelector('.contacts__message').value;
        const response = await fetch('/api/chatgpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  Accept: "application/json" },
            body: JSON.stringify({ message: message })
        });
        if (response.ok) {
            const data = await response.json();
            const chatGPTResponse = data.message;
            const responseContainer = document.querySelector('.contacts__response');
            responseContainer.innerHTML += `<p><strong>AI:</strong> ${chatGPTResponse}</p>`;
        }
   }

   document
     .querySelector('.contacts__submit')
     .addEventListener('click', sendChatGPT);

})();
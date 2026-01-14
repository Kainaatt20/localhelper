// Speech
function speak(text){
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

// AI Chat open/close
function openAI(){
  document.getElementById('aiChat').style.display = 'flex';
  speak("Hi! How can I help you?");
}

function closeAI(){
  document.getElementById('aiChat').style.display = 'none';
}

// Send message from user
function sendMessage(){
  let input = document.getElementById('userInput');
  let chatBody = document.getElementById('chatBody');
  let text = input.value.trim();
  if(text === "") return;

  // User message
  let userMsg = document.createElement('div');
  userMsg.className = "ai-message user";
  userMsg.innerText = text;
  chatBody.appendChild(userMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  input.value = "";

  // AI response (simple rules)
  let botText = "";
  text = text.toLowerCase();
  if(text.includes("plumber")) botText = "🔧 No worries! I found trusted plumbers near you.";
  else if(text.includes("ac")) botText = "❄️ Sure! Skilled AC repair experts are available.";
  else if(text.includes("maid")) botText = "🧹 Here are reliable maids available today.";
  else botText = "😊 I can help you find Plumber, AC Repair, or Maid services.";

  let botMsg = document.createElement('div');
  botMsg.className = "ai-message bot";
  botMsg.innerText = botText;
  chatBody.appendChild(botMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  speak(botText);
}

// Enter key sends message
function checkEnter(e){
  if(e.key === "Enter") sendMessage();
}

// SEARCH HELPERS
function searchHelper() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("helper-card");

  for(let card of cards){
    let name = card.getAttribute("data-name");
    card.style.display = name.includes(input) ? "block" : "none";
  }
}

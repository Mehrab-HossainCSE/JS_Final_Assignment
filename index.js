function TypeIndictor() {
  var messageInput = document.getElementById("message-input");
  var typeIndicator = document.getElementById("type-indicator");

  if (!typeIndicator) {
    typeIndicator = document.createElement("div");
    typeIndicator.id = "type-indicator";
    typeIndicator.textContent = " Saifudding is typing...";
    messageInput.parentNode.insertBefore(typeIndicator, messageInput);
  }
}

function sendMessage() {
  // Get input value
  var messageInput = document.getElementById("message-input");
  var messageText = messageInput.value;

  if (messageText.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // Create new message div
  var newD = document.createElement("div");
  newD.innerHTML = messageText;
  newD.classList.add("message-sent-tomal");

  // Create profile image
  var profileImage = document.createElement("img");
  profileImage.src = "icons8-male-user-48 (1).png";
  profileImage.style.width = "30px"; // Set the desired width
  profileImage.style.height = "30px";
  profileImage.alt = "Profile";
  profileImage.classList.add("profile-picture");

  // Create sender name element
  var newP = document.createElement("h3");
  newP.innerHTML = "Tomal";
  newP.appendChild(profileImage);

  // Create confirmation icon
  var confirmationIcon = document.createElement("span");
  confirmationIcon.innerHTML = "✓"; // Double checkmark symbol
  confirmationIcon.style.color = "gray"; // Set color to gray initially
  confirmationIcon.style.marginLeft = "5px"; // Add some margin to separate it from the message

  // Append confirmation icon to the message div
  newD.appendChild(confirmationIcon);

  // Append sender name and message div to the chat
  document.getElementById("chat").appendChild(newP);
  document.getElementById("chat").appendChild(newD);

  // Scrolls the div to the top

  // Simulate WhatsApp's message status update
  setTimeout(function () {
    confirmationIcon.style.color = "gray"; // Message sent
  }, 1000);
  setTimeout(function () {
    confirmationIcon.style.color = "black"; // Message delivered
  }, 2000);
  setTimeout(function () {
    confirmationIcon.style.color = "green"; // Message read
  }, 3000);

  // Clear the input field
  messageInput.value = "";

  setTimeout(function () {
    let messages = [
      "Hello",
      "How are you?",
      "Nice to meet you",
      "Good day",
      "Welcome",
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex];
    var words = message.split(" ");
    var index = 0;
    var typingSpeed = 100; // Adjust typing speed (milliseconds per character)

    var newD = document.createElement("div");
    newD.classList.add("message-sent-saifuddin");
    var profileImage = document.createElement("img");
    profileImage.src = "icons8-male-user-48.png";
    profileImage.alt = "Profile";
    profileImage.classList.add("profile-picture");
    profileImage.style.width = "30px";
    profileImage.style.height = "30px";
    var newP = document.createElement("div");
    newP.classList.add("profile-container");
    newP.appendChild(profileImage);
    var nameElement = document.createElement("h3");
    nameElement.innerHTML = "Saifuddin";
    newP.appendChild(nameElement);
    var chatContainer = document.getElementById("chat");
    chatContainer.appendChild(newP);
    chatContainer.appendChild(newD).style.textAlign = "left"; // Appending user message below the profile container

    var intervalId = setInterval(function () {
      if (index < words.length) {
        newD.textContent += words[index] + " ";
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);
  }, 4000);
}



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
    profileImage.src = "icons8-male-user-48 (1).png"; // Replace with the actual path to your profile picture
    profileImage.alt = "Profile";
    profileImage.classList.add("profile-picture");

    // Create sender name element
    var newP = document.createElement("h3");
    newP.innerHTML = "Tomal";
    newP.appendChild(profileImage);

    // Create confirmation icon
    var confirmationIcon = document.createElement("span");
    confirmationIcon.innerHTML = "✓✓"; // Double checkmark symbol
    confirmationIcon.style.color = "gray"; // Set color to gray initially
    confirmationIcon.style.marginLeft = "5px"; // Add some margin to separate it from the message

    // Append confirmation icon to the message div
    newD.appendChild(confirmationIcon);

    // Append sender name and message div to the chat
    document.getElementById("chat").appendChild(newP);
    document.getElementById("chat").appendChild(newD);

    // Simulate WhatsApp's message status update
    setTimeout(function() {
        newD.style.color = "gray";
        confirmationIcon.style.color = "gray"; // Message sent
    }, 1000);
    setTimeout(function() {
        newD.style.color = "black";
        confirmationIcon.style.color = "blue"; // Message delivered
    }, 2000);
    setTimeout(function() {
        newD.style.color = "green";
        confirmationIcon.style.color = "green"; // Message read
    }, 3000);

    // Clear the input field
    messageInput.value = "";
}


let messages = ["Hello", "How are you?", "Nice to meet you", "Good day", "Welcome"];

function reciveMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    var newD = document.createElement("div");
    newD.innerHTML = messages[randomIndex];
    newD.classList.add("message-sent-saifuddin");

    var profileImage = document.createElement("img");
    profileImage.src = "icons8-male-user-48.png"; // Replace "path/to/your/image/profile.jpg" with the actual path to your profile picture
    profileImage.alt = "Profile"; // Alt text for the image
    profileImage.classList.add("profile-picture");

    var newP = document.createElement("div");
    newP.classList.add("profile-container");
    newP.appendChild(profileImage);
    var nameElement = document.createElement("h3");
    nameElement.innerHTML = "Saifuddin";
    newP.appendChild(nameElement);
    
    var chatContainer = document.getElementById("chat");
    chatContainer.appendChild(newP);
    chatContainer.appendChild(newD).style.textAlign="left"; // Appending user message below the profile container
}





let intervalId = setInterval(reciveMessage, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);


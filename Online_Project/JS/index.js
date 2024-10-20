document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('storyTitle');
    const content = document.getElementById('storyContent');
    const errorMessage = document.getElementById('error-message');

    if (title.length < 3) {
        errorMessage.innerText = "Story title must be at least 3 characters.";
        errorMessage.classList.remove('hidden');
    } else if (content.length < 10) {
        errorMessage.innerText = "Story content must be at least 10 characters.";
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        alert("Story submitted successfully!");
        title.value = " ";
        content.value = " ";
    }
});


const editProfile = document.getElementById("edit-profile");

editProfile.addEventListener("click", function() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const Name = prompt("Enter your name");
    const Email = prompt("Enter your email");
    const getItem = localStorage.getItem(name);
    const setItem = localStorage.setItem("name", `${Name}`);
    const obj = {
        name: `${Name}`,
        email: `${Email}`
    }


    if (Name == "" || Email == "") {
        alert("fill this data");
        name.innerHTML = '<p id="name"> <strong>Name: </strong>Abdul Rashid </p>'
        email.innerHTML = '<p id="email"> <strong>Email: </strong>arcchhimpa@gmail.com </p>'
    } else if (Name !== "" && Email !== " ") {
        name.innerHTML = ` <p id="name"> <strong>Name: </strong>${Name}</p>`
        email.innerHTML = ` <p id="name"> <strong>Email: </strong>${Email}</p>`
        alert("Profile update is successfully.Thank you");
    }


})
setTimeout(function() {
    console.log(name.innerHTML = `<p id="name"> <strong>Name: </strong>${getItem} </p>`);
}, 5000)
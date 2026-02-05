
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login Success!");
        window.location.href = "homepage.html";
    } else {
        alert("Wrong Credentials!");
    }
}

function signup() {
    const createUsername = document.getElementById('createUsername').value;
    const createPassword = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!createUsername || !createPassword || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }
    if(createPassword !== confirmPassword) {
        alert("Password do not match");
        return;
    }
    if(createUsername.length < 4) {
        alert("Username must be at least 4 characters");
        return;
    }
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if(users.find(u => u.username === createUsername)) {
        alert("Username already exists!");
        return;
    }
    
    users.push({ username: createUsername, password: createPassword });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Signup successful! You can now login.");
    
    document.getElementById('createUsername').value = "";
    document.getElementById('createPassword').value = "";
    document.getElementById('confirmPassword').value = "";
    
    window.location.href = "index.html";
}


    
var firebaseConfig = {
    apiKey: "AIzaSyDpJqZ3NRYJsljfHc5ZSrsCPBsZXYj808Y",
    authDomain: "project101-2c7f3.firebaseapp.com",
    databaseURL: "https://project101-2c7f3-default-rtdb.firebaseio.com",
    projectId: "project101-2c7f3",
    storageBucket: "project101-2c7f3.appspot.com",
    messagingSenderId: "921362072580",
    appId: "1:921362072580:web:52aff109d344e48d96e151"
  };

// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}




// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJS6peY9rslv81SoN2Q08JcSTnVFYD_2E",
    authDomain: "construapp-v1.firebaseapp.com",
    databaseURL: "https://construapp-v1.firebaseio.com",
    projectId: "construapp-v1",
    storageBucket: "construapp-v1.appspot.com",
    messagingSenderId: "312248850383"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
    
    if (user) {       
        window.location.href = "menu.html";
    } else {
        // No user is signed in.
    }
});

$("#btnLogin").click(function login() {
    var email = $("#user").val();
    var password = $("#pass").val();

   

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
    });
        
   
});


       



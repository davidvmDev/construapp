$("#btnLogin").click(function login() {
    var userEmail = $("#user").val();
    var userPass = $("#pass").val();
    window.alert(userEmail + " " + userPass);
});

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


var config = {
    apiKey: "AIzaSyDJS6peY9rslv81SoN2Q08JcSTnVFYD_2E",
    authDomain: "construapp-v1.firebaseapp.com",
    databaseURL: "https://construapp-v1.firebaseio.com",
    projectId: "construapp-v1",
    storageBucket: "construapp-v1.appspot.com",
    messagingSenderId: "312248850383"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();


$("#cerrar").click(function logout() {
    firebase.auth().signOut().then(function () {
        location.href = "index.html";
    }).catch(function (error) {
        // An error happened.
    });
});


// Dom7
var $$ = Dom7;


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        },
        products: [
            {
                titulo: '1',
                title: 'Apple iPhone 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
            },
            {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
            },
            {
                id: '3',
                title: 'Apple iPhone X',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
            },
        ]
      // Demo products for Catalog section      
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});



// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

//db.collection("cemento").get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//        console.log(`${doc.tipo} => ${doc.data()}`);
//    });
//});
//db.collection('cemento').add({

//    place: "hola"
//});

//db.collection('cemento').get().then((snapshot) => {
//    snapshot.docs.forEach(doc => {
//        console.log(doc.data())
//    })
//})

    function Agregar () {
    window.alert("hola");
    var titulo = document.getElementById("titulo").value;
    var deposito = document.getElementById("deposito").value;
    var tipo = document.getElementById("tipo").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("url").value;
    var direccion = "/producto/";
    db.collection('cemento').add({
        titulo: titulo,
        deposito: deposito,
        tipo: tipo,
        precio: precio,
        direccion: direccion,
        imgP: imagen
    });
};







var config = {
    apiKey: "AIzaSyDJS6peY9rslv81SoN2Q08JcSTnVFYD_2E",
    authDomain: "construapp-v1.firebaseapp.com",
    databaseURL: "https://construapp-v1.firebaseio.com",
    projectId: "construapp-v1",
    storageBucket: "construapp-v1.appspot.com",
    messagingSenderId: "312248850383"
};


var app = new Framework7({
	// App root element
	root: '#app',
	// App Name
	name: 'My App',
	// App id
	id: 'com.myapp.test',
	// Enable swipe panel
	panel: {
		swipe: 'left',
	},
	// Add default routes
	routes: [
        {
        	path: '/cemento/',
        	url: 'cemento.html',
        },
        {
            path: '/index/',
            url: 'index.html',
        },
	],
	// ... other parameters
    panel: {
        swipe: 'left',
        leftBreakpoint: 768,
        rightBreakpoint: 1440,
    }
});
// Initialize Firebase

firebase.initializeApp(config);

$("#cerrar").click(function logout() {
    firebase.auth().signOut().then(function () {
        location.href = "index.html";
    }).catch(function (error) {
        // An error happened.
    });
});

var mainView = app.views.create('.view-main');
var $$ = Dom7;
$$('.panel-left').on('panel:open', function () {
    console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
    console.log('Panel left: opened');
});

// Instance Events
var panelRight = app.panel.right;
panelRight.on('open', function () {
    console.log('Panel right: open');
});
panelRight.on('opened', function () {
    console.log('Panel right: opened');
});

// App Events
app.on('panelClose', function (panel) {
    console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
    console.log('Panel ' + panel.side + ': closed');
});
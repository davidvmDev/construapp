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
            path: '/about/',
            url: 'about.html',
        },
    ],
    // ... other parameters
    panel: {
        swipe: 'left',
        leftBreakpoint: 768,
        rightBreakpoint: 1440,
    }
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
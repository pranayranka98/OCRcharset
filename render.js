var page = require('webpage').create();
page.open('file:///D:/chartaker.html', function() {
    setTimeout(function() {
        page.render('char3.png');
        phantom.exit();
    }, 1000);
});
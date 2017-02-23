var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:'Article One',
    heading: 'Article One|Vidhya Santhoshima',
    date:'Feb 23, 2017',
    content:` <p>Hello World this is aricle one.Hello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle o</p>
            
             <p>Hello World this is aricle one.Hello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle one
             </p>`
    
};

function createHtmlTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var template = `<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,initial-width=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;

return template;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
   res.send(createHtmlTemplate(articleOne))
   ;
});


app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-Three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one':{
    title:'Article One',
    heading: 'Article One|Vidhya Santhoshima',
    date:'Feb 23, 2017',
    content:` <p>Hello World this is aricle one.Hello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle o</p>
            
             <p>Hello World this is aricle one.Hello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle oneHello World this is aricle one
             </p>`
    
},
'article-two':{
    title:'Article Two',
    heading: 'Article Two|Vidhya Santhoshima',
    date:'Feb 23, 2017',
    content:` <p> Hello World this is article two.
             </p>`
    
},
'article-three':{
     title:'Article Three',
    heading: 'Article Three|Vidhya Santhoshima',
    date:'Feb 24, 2017',
    content:` <p> Hello World this is article Three.
             </p>`
    
}

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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter+1;
  res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
   res.send(createHtmlTemplate(articles[articleName]))
   ;
});

var names=[];
app.get('/submit/:name',function(req,res){
    var name = req.params.name;
    names.push(name);
   res.send(JSON.stringify(names));
   
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

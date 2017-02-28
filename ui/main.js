var button = document.getElementById('counter');

button.onclick=function(){
    
var request = xmlHttpRequest();

request.onreadystatechange = function(){
    
    if(request.readyState === XMLHttpRequest.DONE){
         if(request.status === 200){
          alert('Inside the response') ;  
        var count = document.getElementById('count');
        count.innerHTML = request.responseText.toString();
        
        
    }
        
    }
   
};

request.open('GET','http://santhoshima10.imad.hasura-app.io/counter',true);
request.send(null);

};

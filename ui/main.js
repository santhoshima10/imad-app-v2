var button = document.getElementById('counter');

button.onclick=function(){
    //  alert('Inside the onclick') ;  
    
var request = XMLHttpRequest();
request.open('GET','http://santhoshima10.imad.hasura-app.io/counter',true);
request.send(null);

request.onreadystatechange = function(){
    
    if(request.readyState === XMLHttpRequest.DONE){
        //alert('Inside the 1') ; 
         if(request.status === 200){
         // alert('Inside the 2') ;  
        var count = document.getElementById('count');
        count.innerHTML = request.responseText.toString();
        
        
    }
        
    }
   
};



};

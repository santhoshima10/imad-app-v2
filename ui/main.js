var button = document.getElementById('counter');

button.onclick=function(){
    //  alert('Inside the onclick') ;  
    
var request = new XMLHttpRequest();
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


var submitBtn = document.getElementById('submit_btn');

submitBtn.onclick=function(){
    
var nameInput = document.getElementById('nameInput');
var nameInputValue = nameInput.value;

    
var request = new XMLHttpRequest();
request.open('GET','http://santhoshima10.imad.hasura-app.io/submit?name='+nameInputValue,true);
request.send(null);

request.onreadystatechange = function(){
    
    if(request.readyState === XMLHttpRequest.DONE){
      
         if(request.status === 200){
             uList = document.getElementById('NameList');
             var output = request.responseText ;
             var names = JSON.parse(output);
             

            for (var i = 0 ;i < names.length;i++){
                uList.innerHTML += '<li>'+names[i]+'</li>';
            }
             
         
       
    }
        
    }
    
}
}






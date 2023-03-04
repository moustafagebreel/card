  var allProducts = document.querySelectorAll(".list li")
  var head = document.querySelector(".cardItme")
  var btn = document.querySelector("#btn1");
  var foot= document.querySelector(".foot h2");
  var count=document.querySelector('#count');
  var totalPrice = 0
  var  count=1;


   allProducts.forEach( function (item){
        item.onclick = function (){       
            document.getElementById('count').innerHTML=count++ 
            
        totalPrice += +(item.getAttribute("price")) 
            head.innerHTML+= item.textContent + '<br> <br>'  
            if (head.innerHTML != "" ){
                btn.style.display = "block"
                btn.style.color = "black"
                btn.style.backgroundColor = "rgb(226, 141, 12)"
                btn.style.width = "200px"
            }
        
    
        }
       
   })
   btn.onclick = function (){
    foot.innerHTML= (totalPrice)

   }
   






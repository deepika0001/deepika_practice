let string = ""; //blank string//
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  //click //
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);

      //in order to type input// 
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
}) 

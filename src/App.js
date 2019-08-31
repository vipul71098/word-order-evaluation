import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const word = ["winter","is","coming"];
    var ren = word.join(' ');
    var ran_word = [];
    const distinct =(value,index,self) => {
    return self.indexOf(value) === index;
    }

   do{//select word in  random order
      var randomItem = word[Math.floor(Math.random()*word.length)];
      ran_word.push(randomItem)
      var random_word = ran_word.filter(distinct)
      var len = ran_word.length
   }while(len <word.length*5)


  function CreateButton(s) {  
    var myDiv = document.getElementById("ans_grid");   
    var button = document.createElement('BUTTON');  
    button.className = 'btn';
    var text = document.createTextNode(s); 
    button.appendChild(text); 
    myDiv.appendChild(button);  
  } //end of create button



    
  var final =[];

  function Add(e){//function to add clicked button

    var check= [];
    final.push(e)
    for(var i=0;i<final.length;i++)//match each elements of array
    {
        if(final[i] == word[i])
        {
         check.push("matched")
        }
        else{
        check.push("unmatched")
        }  
    }
    if(check.length == word.length && check.indexOf("unmatched") == -1){

         document.getElementById("result").innerHTML = "<button class='ans_btn' >corrected</button>"

      }else if( check.length == word.length && check.indexOf("unmatched") !== -1){

        document.getElementById("result").innerHTML = "<button class='ans_btnw' >incorrect</button>"

      }
      else{

      }
    }   ///end of function add

  
    return (
      <div className='container'>
        <center className='heading'><h1>Mini Project</h1></center>
        <div className='text'>
          {ren}
        </div>
        <div className='display'>{ 
          random_word.map((w) => { return <button className='btn' onClick={() => {Add(w);CreateButton(w)}}>{w}</button>})
          }
        </div>
        <div className='ans_grid'>
        <div  id='ans_grid'></div>
        
        </div>
        <div className='result'>
             <div id='result'></div>    
        </div> 
     </div>
    )
  }
}


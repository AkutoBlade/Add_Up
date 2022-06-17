
function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1>AddUp</h1>
    <label>List:
    <div id="List" type="text" placeholder="age">
     
    </div>
    <br>
    <br>
    </label>
    <label>Answer:
         <input id="Answer" type="text" placeholder="answer">
         
        </input>
        </label>
        <br>
        <button id="Button" type="button" onclick="Converter()">Converter</button>
    </form>`
    
    }
    
    Create()
    let age =[3,4,7,4,2,7,2,6,9];
    document.getElementById("List").innerHTML= age;
     let day= document.getElementById("Answer");
    

function Converter(){
   let total = eval((age.join("+")))
  document.getElementById('Answer').value= total;
}

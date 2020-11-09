showNote();

// if a user adds a note, add to a local storage:-


let addBtn= document.getElementById('addBtn');
addBtn.addEventListener("click", function (e){
    let addTxt=document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes==null) {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNote();
}
)

// Function to show Elements from LocalStorage
function showNote(params) {
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach((element,index) => {
        html+=`
        <div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id = ${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>    
        `;
    });
  
    let notesElm = document.getElementById('notes');
    if (notesObj.length !=0) {
        notesElm.innerHTML = html;
        
    }
    else{
        notesElm.innerHTML = `Nothing to Show! Please add Your Note`
    }

}

//Fuction to Delete a Note:

deleteNote =(index) => {
console.log("I am deleted");

let notes = localStorage.getItem("notes");

    if (notes==null) {
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNote();

}


//fuction for Searching the Notes:-

let search = document.getElementById('searchTxt');


search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(element => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        }
        else{
            element.style.display = "none";
        }
    });
})



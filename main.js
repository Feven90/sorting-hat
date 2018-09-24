
const jumbotronStartButton = document.getElementById("reveal");
jumbotronStartButton.addEventListener('click', () => {
        let domString = `<form class="text-ligth w-50 p-3">
        <div class="form-group">
          <label for="exampleInputEmail1">StudentName</label>
          <input id="input" type="text" required class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name" required>
        </div>
        <button id="sort" type="submit" class="btn btn-primary">Submit</button>
      </form>`;
        printToDom(domString, 'form');
        sort();
})


const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const expel = () => {
    const expelButton = document.getElementsByClassName('expel');
    for (let i=0; i< expelButton.length; i++){
        const element = expelButton[i];
        element.addEventListener("click", (e)=> {
            e.preventDefault();
            // delete the card that the button was on 
            // we need to get the delete button we clicked to delete that card, so use e.target
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
            // .parentNode 
            // if it is a DOM node we can use .remove()
        })
    }
}
const sort = () => {
const sortButton = document.getElementById('sort');
 sortButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    const studentInput = document.getElementById('input').value;
    if (studentInput === ""){
        document.getElementById('empty_input').innerHTML = "Please enter your name";
    }
    else {
    const schools = ["Godric Gryffindor","Helga Hufflepuff","Rowena Ravenclaw","Salazar Slytherin"];
    const i = Math.floor(Math.random() * 4);
    document.getElementById('card').innerHTML += `<div id="color" class="card text-white w-25 bg-info m-2">
                                                    <div class="card-body">
                                                    <h5 class="card-title">${studentInput}</h5>
                                                    <p class="card-text">${schools[i]}</p>
                                                    <button class="expel" href="#" class="btn btn-danger deleteButton">Expel</button>
                                                    </div>
                                                 </div>`
clearTextBox();
expel();
    }
})
};

let clearTextBox = ("click", () => {
    document.getElementById("input").value = '';
});



const jumbotronStartButton = document.getElementById("revele");
jumbotronStartButton.addEventListener('click', () => {
        let domString = `<form>
        <div class="form-group">
          <label for="exampleInputEmail1">StudentName</label>
          <input id="input" type="text" class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name">
        </div>
        <button id="sort" type="submit" class="btn btn-primary">Submit</button>
      </form>`;
        printToDom(domString, 'form');
        sort();
})

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const sort = () => {
const sortButton = document.getElementById('sort');
 sortButton.addEventListener('click', (e) => {
    e.preventDefault();
    const schools = ["Hogwarts School of Witchcraft and Wizardry","Beauxbatons Academy of Magic", "Castelobruxo",
                    "Durmstrang Institute","Ilvermorny","Mahoutokoro School of Magic",
                    "Uagadou School of Magic", "Koldovstoretz"];
    const i = Math.floor(Math.random() * 9);
    const studentInput = document.getElementById('input').value;
    document.getElementById('card').innerHTML += `<div class="card w-25 m-2">
                                                    <div class="card-body">
                                                    <h5 class="card-title">${studentInput}</h5>
                                                    <p class="card-text">${schools[i]}</p>
                                                    <button id="expel" href="#" class="btn btn-danger deleteButton">Expel</button>
                                                    </div>
                                                 </div>`
})
};
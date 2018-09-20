


const sortingButton = document.getElementById("revele");
sortingButton.addEventListener('click', () => {
    // let element = document.getElementById('form');
    // const buildNewToDoCard = () => {
        let domString = `<form>
        <div class="form-group">
          <label for="exampleInputEmail1">StudentName</label>
          <input type="text" class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>;`;
        printToDom(domString, 'form');
        // activateDeletes();
    
});

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML = stringToPrint;
}

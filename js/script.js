//need to create a flip switch for the read variable to place on card
let bookArr = [];
let bookInfoArr = [];
let overlay = document.querySelector(".overlay");
const newBookForm = document.querySelector(".bookForm");
const bookSec = document.querySelector(".bookSection");
//create elements outside

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function() {
        return `"${this.title}"\nby ${this.author}\n${this.pages}.pgs`
    }
}

//add event listener on li click to bring up new book form
const addBookButton = document.querySelector("li");
addBookButton.addEventListener("click", newBookAnimation);

function newBookAnimation(){
    overlay.style.visibility = 'visible';
    overlay.style.animation = 'increaseOpacity 1.5s forwards';
    newBookForm.style.animation = 'formSlideTop 1.5s forwards';
}

const cancelButton = document.querySelector(".cancelButton");
cancelButton.addEventListener("click", removeBookForm);
overlay.addEventListener("click", removeBookForm);

function removeBookForm(){
    newBookForm.style.animation = 'formSlideBack 1.5s forwards';
    overlay.style.animation = 'decreaseOpacity 1.5s forwards';
    setTimeout(function(){
        overlay.style.visibility = 'hidden';
    }, 1500)
    setTimeout(clearInputFields, 1500);
}

const subButton = document.querySelector(".submitButton");
subButton.addEventListener("click",function(){
    //this needs to be within an if statement that determines if all the proper input fields are filled(method???)
    if(checkInputsHaveValue()){
        getInputAppendBookObject();
        //create a new book card
        createBookCardElements();
    }
})

function getInputAppendBookObject(){//this should be activated as soon as
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read").value;
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    bookArr.push(newBook);
}

function createBookCardElements(){
    //this creates the read checkbox for the book card
    let book = bookArr[(bookArr.length)-1];
    for(let key in bookArr[-1]){
        console.log(bookArr[-1][key]);
    }

    const div = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = "Read: ";
    label.setAttribute('for', 'readCard');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'readCard');
    // let readBool = book.read;
    input.checked = document.getElementById("read").checked;
    div.appendChild(label);
    div.appendChild(input);

    //this creates the book info for the rest of the book card
    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pgs`;
    const author = document.createElement('p');
    author.textContent = `${book.author}`;
    const title = document.createElement('p');
    title.textContent = `${book.title}`;
    const sampleBookCard = document.createElement('div');
    sampleBookCard.setAttribute('class', 'sampleBook');

    //this adds everything to the card
    sampleBookCard.appendChild(title);
    sampleBookCard.appendChild(author);
    sampleBookCard.appendChild(pages);
    sampleBookCard.appendChild(div);
    bookSec.appendChild(sampleBookCard);

    removeBookForm();
}

function clearInputFields(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function checkInputsHaveValue(){
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    if(title.value && author.value && pages.value){
        return true;
    }
    return false;
}

//event delegation for close buttons on cards
const sectionB = document.querySelector(".bookSection");

sectionB.addEventListener("click", (e) => {
    if(e.target.tagName === 'SPAN'){
        //get info from clicked card
        //remove from array
        //remove parent(bookCard)
    }
});

function getBookInfo(closeButton){
    let nextSibling = closeButton.nextElementSibling;
    for(let i = 0; i < 3; i++){
        bookInfoArr.push(nextSibling.innerText);
        nextSibling = nextSibling.nextElementSibling;
    }
}
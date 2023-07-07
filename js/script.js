//need to create a flip switch for the read variable to place on card
let bookArr = [];
let overlay = document.querySelector(".overlay");
const newBookForm = document.querySelector(".bookForm");
const bookSec = document.querySelector(".bookSection");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function() {
        return `"${this.title}" by ${this.author} \n${this.pages}.pgs`
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
}

const subButton = document.querySelector(".submitButton");
subButton.addEventListener("click",function(){
    getInputAppendBookObject;//might need parenthesis
    //create a new book card
})

function getInputAppendBookObject(){//this should be activated as soon as 
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read").value;
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    if(titleInput && authorInput && pagesInput){//so long as title and author have some input then push into array
        bookArr.push(newBook);
    }
    for(let i = 0; i < bookArr.length; i++){//test code
        console.log(bookArr[i]);
    }
}

function createBookCardElements(){

}
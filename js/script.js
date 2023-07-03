//need to create a flip switch for the read variable to place on card
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function() {
        return `"${this.title}" by ${this.author} \n${this.pages}.pgs`
    }
}
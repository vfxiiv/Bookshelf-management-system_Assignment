let books=["The Great Gatsby", "Sons and Lovers", "To Kill A Mockingbird", "Pride and Prejudice"];

// function 1 to add book to front

function addingToFront(){
    books.unshift(document.getElementById("text").value);
    console.log(books);
    bookshelves();

}

// function 2 to add book to end

function addingToEnd(){
    books.push(document.getElementById("text").value);
    console.log(books);
    bookshelves();
}

// update function (?)
function bookshelves(){
    if(books.length===0){
        document.getElementById("books").innerHTML=`<h4>No books on the shelf.</h4>`;
    }
    else{
        document.getElementById("books").innerHTML=`<h4>Front Of Shelf </h4>`;
        for(let i=0; i<books.length;i++){
            document.getElementById("books").innerHTML+=`<li>${books[i]}</li>`;

        }
        document.getElementById("books").innerHTML+=`<h4>End Of Shelf</h4>`;
    }
}
bookshelves();

function removingfromFront(){
    books.shift();
    bookshelves();

}

function removingFromEnd(){
    books.pop();
    bookshelves();
}
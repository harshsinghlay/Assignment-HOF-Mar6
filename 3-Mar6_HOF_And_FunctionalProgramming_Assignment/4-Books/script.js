
let books = [["math",{author:"harsh",year:2005}],["hindi",{author:"deepansu",year:2008}],["english",{author:"tushar",year:2015}],["computer",{author:"aman",year:2023}]]
console.log(books);

let booksAfter2010 =  books.filter((book)=>{
    return book[1].year>2010;
}).map((book)=>{
    return [book[0],{author : book[1].author.toUpperCase(),year:book[1].year}];
})
console.log(booksAfter2010);


let arr = new Array();
arr.push(1,2,3,4,5,6);
console.log(...arr);
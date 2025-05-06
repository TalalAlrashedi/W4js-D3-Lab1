let books = {
  title: "trip to spain",
  author: "Leon kennedy",
  year: 2004,
  isAvailable: true,
  borrow: function () {
    if (this.isAvailable) {
      return (this.isAvailable = false);
    } else {
      return false;
    }
  },
  publisher: {
    name: "louis",
    location: {
      city: "madrid",
      country: "spain",
    },
  },
};

console.log(books);

console.log("--------------------------------------------");

console.log(books.title);
console.log("--------------------------------------------");

let thisYear = (books.year = 2025);

console.log(thisYear);
console.log("--------------------------------------------");

delete books.author;
console.log(books.isAvailable == false);
console.log("--------------------------------------------");

console.log(books.publisher);
console.log("--------------------------------------------");

console.log(books.publisher.location.city);
console.log("--------------------------------------------");

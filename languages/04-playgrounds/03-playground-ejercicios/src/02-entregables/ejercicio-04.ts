console.log("************** DELIVERABLE 04 *********************");

type Book = {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    { title: "El principito", isRead: true },
    { title: "Reina Roja", isRead: false },
];

const bookDoesntExist: string = 'That book it`s not in the list. Try with another one.';

function isBookRead(books: Book[], titleToSearch: string): boolean | string {
    const found = books.find((book) => book.title === titleToSearch);
    return found?.isRead ?? bookDoesntExist;
};

  
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // That book it`s not in the list. Try with another one.
// # SNACK 5
/* 
Snack 5 (Bonus) - Raccogli i libri

    Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base: https://boolean-spec-frontend.vercel.app/freetestapi al posto di: https://freetestapi.com/api/v1

    Ad esempio: https://boolean-spec-frontend.vercel.app/freetestapi/users per chiamare l'endpoint /users Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books). Testala con l’array [2, 13, 7, 21, 19] .
*/
const idBooks = [2, 13, 7, 21, 19];

async function getBooks(ids) {
  try {
    /* console.log("ids", ids); */
    const promises = ids.map((id) => {
      return fetch(
        `https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`
      ).then((res) => res.json());
    });
    /* console.log("promises", promises); */

    const books = await Promise.all(promises);
    /* console.log("books", books); */
    return books;
  } catch (error) {
    throw new Error(error.message);
  }
}

getBooks(idBooks)
  .then((data) => console.log("books", data))
  .catch((error) => console.error(error));

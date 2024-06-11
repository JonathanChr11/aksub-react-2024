// REST API
// GET = mengambil data dari database
// POST = mengirim data ke database
// PUT = mengupdate data yang sudah ada didatabase
// DELETE = menghapus data yang ada di db

// Async callbacks and promises
// async = asynchronous == tidak berurutan
// sync = berurutan
// callback = memanggil function difunction lain
// promises = janji

// Kapan sih Async Await itu digunakan?
// Pada saat melakukan sesuatu yang berat, mengambil data yang sangat banyak

// GET

// cara 1
// async function asyncAwaitData() {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos";
//     const request = await fetch(apiUrl);
//     // console.log(request)
//     const response = await request.json();
//     console.log(response);
// }

// asyncAwaitData();

// cara 2
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((result) => console.log(result));

async function getWuwaCharacters() {
    let apiUrl = "https://api.resonance.rest/characters";
    const request = await fetch(apiUrl);
    const response = await request.json();
    console.log(response, "response getWuwaCharacters");
    return response.characters;
}

// getWuwaCharacters()

async function getWuwaCharactersDetails() {
    const data = await getWuwaCharacters();
    let characters = [];

    await Promise.all(
        data.map(async (char, idx) => {
            console.log(char, idx);
            let apiUrl = `https://api.resonance.rest/characters/${char}`;
            const request = await fetch(apiUrl);
            const response = await request.json();
            // console.log(response)
            characters.push(response);
        })
    );

    console.log(characters);

    const container = document.getElementById("container");
    container.innerHTML = ""; //Empty String

    characters.forEach((character) => {
        const divTag = document.createElement("div");

        const titleTag = document.createElement("h1");
        titleTag.innerHTML = character.name;

        const descriptionTag = document.createElement("p");
        descriptionTag.innerHTML = character.quote;

        divTag.appendChild(titleTag);
        divTag.appendChild(descriptionTag);

        container.appendChild(divTag);
    });
}

// getWuwaCharactersDetails();

// POST
const postObject = {
    userId: 100,
    id: 101,
    title: "Hello World",
};

// cara 1
fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "POST",
    body: JSON.stringify(postObject),
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer eyadsadadsada'
    }
})
    .then((res) => res.json())
    .then((output) => console.log(output))
    .catch((err) => console.log(err));

// cara 2
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         userId: 100,
//         id: 101,
//         title: "Hello World",
//     }),
// })
//     .then((res) => res.json())
//     .then((output) => console.log(output));

// PUT
const putObject = {
    userId: 99,
    id: 201,
    title: "Halo Dunia",
};

fetch("https://jsonplaceholder.typicode.com/todos/1/", {
    method: "PUT",
    body: JSON.stringify(putObject),
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer eyadsadadsada'
    }
})
    .then((res) => res.json())
    .then((output) => console.log(output))
    .catch((err) => console.log(err));

// DELETE
fetch("https://jsonplaceholder.typicode.com/todos/1/", {
    method: "DELETE",
})
    .then((res) => console.log(res))
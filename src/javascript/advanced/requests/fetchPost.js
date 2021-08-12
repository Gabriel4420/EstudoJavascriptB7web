const addPosts = async() => {
    document.querySelector('#posts').innerHTML = 'Carregando ...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo teste',
            body: 'corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let JSONR = await req.json();

    console.log(JSONR);

}
const loadPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(resultado => {
            return resultado.json();
        })
        .then((json) => {
            montarBlog(json)
            document.querySelector('body').style.backgroundImage = 'radial-gradient(rgb(100, 6, 100), rgb(19, 67, 155))';
            document.querySelector('.allPosts').innerHTML = json.length;

        })
        .catch(error => {
            console.error(error);
        })
}

const montarBlog = (lista) => {
    let html = '';
    for (let i in lista) {
        html += `<h1>${lista[i].title}</h1>`;
        html += `<p>${lista[i].body}</p>`;

    }

    document.querySelector('#posts').innerHTML = html;
};
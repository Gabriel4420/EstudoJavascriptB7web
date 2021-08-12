async function send() {
    let archive = document.querySelector('#archive').files;
    let body = new FormData();
    body.append('title', 'blablabla');
    body.append('arquivo', archive);
    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'multipart/form-data'
        }
    })
}
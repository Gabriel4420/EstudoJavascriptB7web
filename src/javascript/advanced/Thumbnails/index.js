function show() {
    let image = document.querySelector('#image').files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;
    document.querySelector('#area').appendChild(img);

}
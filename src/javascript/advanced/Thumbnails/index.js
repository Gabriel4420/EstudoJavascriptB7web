function show() {
    let image = document.querySelector('#image').files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;
    document.querySelector('#area').appendChild(img);

}
/* 
    Mostrando thumbnail com File Reader 

    let reader = new FileReader();

    let img = document.getElementById('img').files[0];

    reader.onload =  () => {
        let image = document.createElement('img');

        img.src = reader.result;

        img.width = 200;

        document.querySelector('#area').appendChild(image);
    }

    reader.readAsDataURL(img);

*/
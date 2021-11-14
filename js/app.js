let contexto = '/PWA-Camera-P7/sw.js';
let url = window.location.href;


let player = $('#player')
let photoUser = $('#photoUser')

let btnCamera = $('#btnCamera')
let btnCameraBack = $('#btnCameraBack')
let btnTakePhoto = $('#btnTakePhoto')

let tipo = ""

const CAMARA = new Camera(player[0]);

btnCamera.on('click', () => {
    console.log("Abrir camara frontal");

    CAMARA.encender().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });

    tipo = "Frontal"
})

btnCameraBack.on('click', () => {
    console.log("Abrir camara trasera");

    CAMARA.encenderBack().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });

    tipo = "Trasera"
})

btnTakePhoto.on('click', () => {
    console.log("Tomar foto");

    CAMARA.apagar();


    let photoHtml = $(`<div class="col-sm-6" 
                        <div class="card" style="width: 300px;">
                            <img src="${CAMARA.takePhoto()}" width="300" height="300" id="photoUser">
                            <div class="card-body">
                                <p class="card-text">${tipo}</p>
                            </div>
                        </div>
                    </div>`);
    $("#divPhoto").append(photoHtml)
})

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        contexto = '/sw.js';
    }

    navigator.serviceWorker.register(contexto);
}







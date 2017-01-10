function swift(){
    let element = document.getElementById("image");
    if(element.src.match("open")){
        element.src = "../image/eye_close.png";
    }else {
        element.src = "../image/eye_open.png"
    }
}
let qrInput = document.querySelector('#text');
let qrBody = document.querySelector('.qr-code');
let downloadBtn = document.querySelector('.download');
let generateBtn = document.querySelector('.generate');

console.log(qrInput.value);

const generateQrCode = () => {
    qrBody.innerHTML = "";
    let qrCode = new QRCode(qrBody,
        {
            text: qrInput.value,
            width: 300,
            height: 200,
            colorDark: "#000000",
            colorLight: "#fff"
        }
    )
}


generateBtn.addEventListener("click", (e) => {
    console.log("click");
    e.preventDefault();
    if (qrInput.value == "") {
        alert("Enter the value of text box");
    } else {
        generateQrCode();
    }
});

// if user press enter btn query submitted to generate QR Code
qrInput.addEventListener('keydown', (e) => {

    if (e.key === "Enter") {
        if (qrInput.value == "") {
            alert("Enter the value of text box");
        } else {
            generateQrCode();
        }
    }
});

// download QR Code
downloadBtn.addEventListener("click", () => {

    let img = document.querySelector(".qr-code img");

    if (img != null) {
        let imgAtt = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtt);
    } else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});
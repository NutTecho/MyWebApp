const {initializeApp} = require("firebase/app");
const { getStorage ,  ref , uploadBytes , uploadString , updateMetadata ,uploadBytesResumable } = require("firebase/storage")
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const {Blob} = require('buffer');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 8080

const firebaseConfig = {
    apiKey: "AIzaSyDe9oyLW_CvymjYz_K2S8s18MI77WvkM48",
    authDomain: "nutproject0405.firebaseapp.com",
    databaseURL: "https://nutproject0405.firebaseio.com",
    projectId: "nutproject0405",
    storageBucket: "nutproject0405.appspot.com",
    messagingSenderId: "653699668763",
    appId: "1:653699668763:web:0607a8bfe4f136ffc291be"
  };
  
// Initialize Firebase
const conf = initializeApp(firebaseConfig);
const storage = getStorage(conf);
const imageref = ref(storage,'images/test1.jpg');
var filename = [];
const reader = new FileReader();
// const blob = new Blob([],)

// const file = new File([],'D:/VSCODE/MyWebApp/Firebase_project/Airplane.jpg');

app.get('/st1', async function(req,res) {
 
const metadata = {
    contentType: 'image/jpeg',
};
reader.readAsArrayBuffer

await rea('D:/VSCODE/MyWebApp/Firebase_project/Airplane.jpg', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})
    new Uint8Array(data)
    filename = data;
})

// reader.onload = function(e) {
//     const blob = new Blob([new Uint8Array(e.target.result)], {type: file.type });
//     console.log(blob);
// };
// const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// uploadString(imageref, message2, 'base64' , metadata).then((snapshot) => {
//     res.status(200).send('Uploaded a base64 string!');
// });

// Upload the file and metadata
const uploadTask = await uploadBytesResumable(imageref, filename, metadata);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log('error : ' + error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
}) 

})

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

server.listen(PORT, hostname,() => {
console.log(`Server running at http://${hostname}:${PORT}/`);
})
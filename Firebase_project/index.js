const {initializeApp} = require("firebase/app");
const {getDatabase , ref , child, onValue,set,get,push,update,remove,setPriority,setWithPriority } = require("firebase/database");
const {getFirestore , collection , doc ,  getDoc, getDocs, setDoc, addDoc , updateDoc , deleteDoc , deleteField,onSnapshot} = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const { getStorage ,  ref ,uploadBytes , uploadString , updateMetadata } = require("firebase/storage")
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

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
  const realtime = getDatabase(conf);
  const firestore = getFirestore(conf);
  const db = collection(firestore,"demo");
  const storage = getStorage(conf);
  const imageref = ref(storage,'myimage');
  // const auth = getAuth(conf);
  
app.get('/st1', function(req,res) {
  // Base64 formatted string
  const metadata = {
    contentType: 'image/jpeg',
  };
  const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storage, message2, 'base64' , metadata).then((snapshot) => {
  console.log('Uploaded a base64 string!');
});
})  


app.get('/ft1', function(req, res) {
  // const querySnapshot = await getDocs(collection(firestore, "demo"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  getDoc(doc(db,"data1"))
  .then(snap => {
    if(snap.exists()){
      res.send(snap.data());
    }
    else
    {
      res.send("no data");
    }
  })
   
  });
 
app.get('/ft2', function(req, res) {
  setDoc(doc(db,"data4"),{
      "name":"banana",
      "age" : 12
  }).then( res.send("send done!"))
});
 

app.get('/', function(req, res) {
  res.status(200).send('Hello world');
});

app.get('/fb1', function(req, res) {
//   const starCountRef = ref(realtime,'/');
//   onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   //updateStarCount(postElement, data);
//   // console.log(snapshot.val());
//   res.send(snapshot.val())
// });

  get(child(ref(realtime,"/"))).then(data => {
    if(data.exists()){
      res.send(data.val());
    }
    else
    {
      res.send("No data");
    }
  })

});

app.get('/fb2', function(req, res) {
set(ref(realtime,'test'), {
  name: "banana",
  age: 13,
})
.then( res.send("send complete"))

});

app.get('/fb3', async function(req, res) {
  await push(ref(realtime,'data1'), {
    name: "apple",
    age: 16,
  }).then(res.send("push complete"))
  // .then( res.send("send complete"))

  update(ref(realtime,'data1'),{

  }).then()


  remove(ref(realtime,'data1'),{

  }).then()

  
  });
  
server.listen(PORT, hostname,() => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
})



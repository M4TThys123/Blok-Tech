const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

const movies = [
  {title: "The Hulk", genre: "Action", jaartal: 1999},
  {title: "Pulp Fiction", genre: "Action", jaartal: 1989},
  {title: "Spidermen", genre: "Action", jaartal: 2012}
]

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//homepagina
app.get('/', (req, res) => {
  res.render('home',{})
});

//movies
app.get('/movies', (req, res) => {
    res.render('listOfMovies', {title: "lijst van films", movies})
});

//movies onderverdeelde pagina
app.get('/movies/:movieId', (req, res) => { 
    res.send(`<h1>Detailpagina van film ${req.params.movieId} </h1>`)
});

//404 foutmelding
app.use(function (req, res, next) {
    res.status(404).send("Sorry we kunnen deze pagina niet vinden!")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


/Deel Matthijs Featcher
var chats = [
  {"naam": "Matthijs", "afbeelding":"afb1", "games":"white"},
  {"naam":"Kees", "afbeelding":"500", "games":"white"}

 ]; 
 
 app.post('/chat_home', async (req, res) => {
  //  console.log(chats[0]["naam"]);
   console.log(chats);
  //  var chats =  new chats {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  //  var newPerson = new Person("John", "Doe", "50", "blue");
   });
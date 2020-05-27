const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const fetch = require("node-fetch")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-akshay:Test123@akshay-kannan-5pv2j.mongodb.net/myWeb",{useUnifiedTopology: true,useNewUrlParser: true});




const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    likes: Number
  });
  
  const User = mongoose.model("User",usersSchema);

  
  

app.get("/",function(req,res){
    function consultPokemon(){
        let id = Math.round(Math.random() * 150);
      var url = "https://pokeapi.co/api/v2/pokemon/"+id;
      fetch(url)
    .then(function(response){
        response.json()
    .then(function(pokemon){
        genPoke(pokemon);
    })
    })
  
    }
  
    function genPoke(pokemon){
        const name = pokemon.name;
        const img = pokemon.sprites.front_default;

        User.find({_id:"5ecd28800e0b903bc49d65ca"},function(err,foundLike){
            res.render("index",{likeContent: foundLike[0].likes,pokemon: name,pokeImg:img});
        })
       
        
       
        
    }
     
    consultPokemon();
    
    
});


app.post("/",function(req,res){
    uName = req.body.name;
    uEmail = req.body.email;

    const user1 = new User({
        name: uName,
        email: uEmail
    });

    user1.save();
  
    

    res.redirect("/"+"#contact");
});

app.post("/like",function(req,res){

    
    
    User.find({_id:"5ecd28800e0b903bc49d65ca"},function(err,foundLike){
        
         var l = foundLike[0].likes;
         l=l+1;
         

         User.updateOne({_id:"5ecd28800e0b903bc49d65ca"},{likes: l},function(err){
            if(err){
                console.log(err);
            }else{
                console.log("success");

            }
    
        })
        function consultPokemon(){
            let id = Math.round(Math.random() * 150);
          var url = "https://pokeapi.co/api/v2/pokemon/"+id;
          fetch(url)
        .then(function(response){
            response.json()
        .then(function(pokemon){
            genPoke(pokemon);
        })
        })
      
        }
      
        function genPoke(pokemon){
            const name = pokemon.name;
            const img = pokemon.sprites.front_default;
              
            res.render("index",{likeContent: l,pokemon: name,pokeImg:img});
           
           
            
           
            
        }
         
        consultPokemon();
    });

    
    

    

    

    

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
    console.log("Server started");
});
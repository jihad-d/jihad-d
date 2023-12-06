// index.js : créer mon propre serveur
// importer le module http,fs (créer un serveur js)
const http = require('http');
// fs : file system : gere les fichiers /mémoires
const fs = require("fs");
// créer le serveur
const server = http.createServer((requete,reponse)=>{
    if(requete.url == "/"){
        fs.readFile("index.html","utf8", function (err,data){
            if(!err){
                reponse.writeHeader(200,{"content-type":"text/html;charset=UTF-8"});
                reponse.write(data);
                reponse.end();
            }else{
                console.log(err);
                }
        });

    }else if (requete.url == "/contact"){
        try{
        var data = fs.readFileSync("index.html","utf8");
        reponse.writeHeader(200,{"content-type":"text/html;charset=UTF-8"});
        reponse.write(data);
        reponse.end();
        }catch(err){
            console.log(err)
        }
        
    }else if (requete.url == "/prestation"){
        //writeFile : ajt ou écrase le contenu d'un fichier
        //appendFile : ajt du contenu dans un fichier
        //fs.writeFile("ecrire.txt",".ajouter ....","utf8",function(err){
        fs.appendFile("ecrire.txt",".ajouter ....","utf8",function(err){
            if(!err){
                reponse.end("ok");
            }else{
                console.log(err);
            }
        })

    }else if (requete.url == "/sync"){
        //writeFile : ajt ou écrase le contenu d'un fichier
        //appendFile : ajt du contenu dans un fichier
        //fs.writeFile("ecrire.txt",".ajouter ....","utf8",function(err){
        fs.appendFileSync("ecrire.txt","ajouter texte sync","utf8");

    }else{
        reponse.end("page introuvable");
    }
});

server.listen(5000,"127.0.0.1",function (){
    console.log("serveur lancé ...!");
});
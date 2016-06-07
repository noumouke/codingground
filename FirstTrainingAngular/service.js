app.factory("factory",function(){
    var movies= [{
        id:1,
        Title:"Avatar",
        annee:'01/12/2006',
        acteurs:["albert","flaubert","noumouke","test"],
        realisateur:"speilberg",
        synopsis: "film parle ...",
        prix:112,
        taux:4,
        image:""
    },
    {
         id:2,
        Title:"L'Avatar",
        annee:'01/01/2015',
        acteurs:["albert","flaubert","noumouke","test"],
        realisateur:"speilberg",
        synopsis: "film parle ...",
        prix:100,
        taux:3,
        image:""
    },
    ];
    
    return movies;
    
});

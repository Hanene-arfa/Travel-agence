var dog= {
    //les propriètés du chien
    name:"Chouette", 
    color:"white",
    age:4,
    // Une méthode aboie
    aboie : function(){console.log("Wouaaf wouaaf wouaaf");},
    };


console.log(dog);
console.log(dog.name);
console.log(dog["age"]);
console.log("----------------");
for (var property in dog)
{
    console.log(dog[property]); 
}
console.log("----------------");
dog.aboie(); // Exécute la méthode (la fonction)
    
// autre méthode pour créer un objet
var cut= new Object();
cut.name="Mimi";
cut.color = "Brown";
cut.age = 2;
for (var property in cut)
    {
        console.log(cut[property]);
    }
// méthode d'un objet
// déclaration de la méthode (la fonction)
cut.miaule = function(number)
{
    while(number>0)
        {
           console.log("miaw miaw");
            number--;
        }
}
cut.miaule(5); // Exécuter la méthode (la fonction)

//Fnction constructeur d'objets
function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
        console.log("Wouaaf", this.name);
    }
}

var petitCaniche = new Dog ("Choupette", "white", 4);
var grosPitbull= new Dog("Rex","black",2);
console.log(petitCaniche);
console.log(grosPitbull);
petitCaniche.aboie();

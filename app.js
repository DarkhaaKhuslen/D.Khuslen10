// Object -> index,[]
// object -> {key:value} -> olon utga hadgalah
let phone = {
    brand : "iphone",
    color : "blue",
    year : 2024,
    isBroken : false,
    call : function(){
        console.log('calling...');
    }
}
console.log(phone);
console.log(phone.brand);
console.log(phone['color']);
phone.call();
// person -> 
let person = {
    name: "Khuslen",
    age: 17,
    huis : true,
    hello : function(){
        // this 
        console.log('Hello, My name is '+ this.name);
        console.log("I am "+ this.age + " years old");
    },    
    address:{
        country:"Mongolia",
        city:"UB",
        distript:"BGD",
        apertment:{
            name: "Viva",
            building:48,
            toot:4,
        }
    }
}
person.hello();
console.log (person.address.apertment.toot);
let animeSite = {
    anime0:{
        name: "Demon slayer",
        ep:50,
        watch:true,
        category:"adventure",
    },
    anime1:{
        name: "One piece",
        ep:1121,
        watch:true,
        category:"adventure",
    },
    anime2:{
        name: "tokyo ghoul",
        ep:222,
        watch:true,
        category:"Horror,romance",
    },
    anime3:{
        name: "Black clover",
        ep:135,
        watch:true,
        category:"adventure",
    },
    anime4:{
        name: "Naruto",
        ep:557,
        watch:false,
        category:"adventure",
    },   
}
console.log(animeSite);
// for ->for(i=1,i=10;i++){} -> es5
// for in -> es6 -> object
for(key in animeSite){
    // console.log(animeSite[key].name);
    // console.log(animeSite[key].ep);
    if(animeSite[key].ep<100 && animeSite[key].watch==true){
        console.log(animeSite[key].name);
    }
}
let company ={
    a0:{
        ner:"Dawaa",
        nas:"27",
        Dugaar:"9904 4264",
        khuis:"er",
        gmail:"Dawaa@gmail.com",
    },
    a1:{
        ner:"Temuulen",
        nas:"28",
        Dugaar:"9905 4894",
        khuis:"er",
        gmail:"Temka@gmail.com",
    },
    a2:{
        ner:"Khuslen",
        nas:"30",
        Dugaar:"9906 6458",
        khuis:"er",
        gmail:"Khuslen@gmail.com",
    },
    a3:{
        ner:"Darkhanbayr",
        nas:"31",
        Dugaar:"9907 5558",
        khuis:"er",
        gmail:"Darkhanbayroo@gmail.com",
    },
    a4:{
        ner:"Suwdaa",
        nas:"26",
        Dugaar:"8004 3333",
        khuis:"em",
        gmail:"Suwdaa@gmail.com",
    },
    a5:{
        ner:"Oyunbayr",
        nas:"29",
        Dugaar:"8005 4444",
        khuis:"em",
        gmail:"Oyunbayr@gmail.com",
    },
    a6:{
        ner:"Egshiglen",
        nas:"27",
        Dugaar:"8007 2222",
        khuis:"em",
        gmail:"Egshiglen@gmail.com",
    },
    a7:{
        ner:"Anar",
        nas:"40",
        Dugaar:"9577 0009",
        khuis:"er",
        gmail:"Anraa@gmail.com",
    },
    a8:{
        ner:"Altkaa",
        nas:"27",
        Dugaar:"9484 4571",
        khuis:"er",
        gmail:"Altkaa@gmail.com",
    },
    a9:{
        ner:"Tamir",
        nas:"28",
        Dugaar:"9666 0009",
        khuis:"er",
        gmail:"Tamir@gmail.com",
    },
}
console.log(company);
for(key in company){
    console.log(company[key].ner);
    if(company[key].nas>25 ){
        console.log(company[key].nas);
    }
}
let em=0, er=0;
for(key in company){
    if(company[key].khuis=="em"){
        em++;
    }else if(company[key].khuis=="er")
        er++;
    };
console.log("em"+em);
console.log("er"+er);
let niilber = 0;
for(key in company){
    niilber = niilber+company[key].nas;
}
console.log(niilber/10);
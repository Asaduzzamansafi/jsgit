let team7 = ["kakashi","naruto","sasuke","sakura",7];

document.write(team7[1]);

document.write("<br>");

document.write(team7.length); 

document.write("<br>");

document.write(team7[team7.length-2]);

document.write("<br>");

// for Each 
team7.forEach(function(element,index){
    document.write(element + index +" ");
});

document.write("<br>");

document.write(team7 + "<br>");


team7.push("sai");

document.write(team7 + "<br>");

team7.unshift("yamato");

document.write(team7 + "<br>");
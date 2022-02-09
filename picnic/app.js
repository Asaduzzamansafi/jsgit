const people = (e=0) =>{

    let per100 = e*5000;

    if(e>0 && e<=100){

        per100 = e*5000;
    }else{
        per100 = 100*5000;
    }

    let per200 = e*4000;

    if(e>100 && e <=200){

        per200 = 4000*(e-100);
    }else if(e<101){
        per200 = 0;
    }else{
        per200 = 4000*100;
    }

    let restof = e*3000;

    if(e>200){

        restof = 3000*(e-200)
    }else{
        restof = 0;
    }
    return per100 + per200 + restof

}
console.log(people(501))
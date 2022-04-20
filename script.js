const path ="images/";

const pictures =["backgound.Jpg,graphisme-menu.png"];

const picture = document.querySelector("img")

//compteur

let counter =0

const autoslide=()=>{

    if (counter===pictures.length-1){
        counter = 0
    }
    
    else {
    
        //ajoute 1 à notre compteur
        counter+=1;
    
        
    }
    picture.src =`${path}${pictures[counter]}`
}
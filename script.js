//DICHIARAZIONI
let start = document.getElementById("start");



//AVVIO AL GIOCO
start.addEventListener("click",

    ()=>{
        let cond = 0;
        let classe = "";
        let grid = document.getElementById("gridContainer");
        let score = document.querySelector(".punteggio");
        let contatore = document.getElementById("contatore");

        let level = document.getElementById("selectLevel").value;
        grid.innerHTML = "";
        grid.classList.remove("d-none");
        grid.classList.add("d-flex");
        score.classList.remove("d-none");


        //1 CASE: LIVELLO DIFFICIEL
        if(level == 1){
        
            cond = 100;
            classe = "content-1";

        // 2 CASE: LIVELLO MEDIO
        }else if(level == 2){
           
            cond = 81;
            classe= "content-2";

        //3 CASE: LIVELLO FACILE
        }else{

            cond = 49;
            classe = "content-3";
        }


        let arrBoom = getRandomArr(1, cond, 16);
        let indexBoom = 0;
        let points = 0;
        contatore.innerHTML = points;
        console.log(arrBoom)

        for(let i = 1; i <= cond; i++){

            let element = document.createElement("div");
            var bombaPresa = false;

            element.classList.add("content");
            element.classList.add(classe);    
            element.innerHTML = i;

            if(arrBoom[indexBoom] == i){

                indexBoom++;

                element.addEventListener("click",
            
                    ()=>{
                        if(!bombaPresa){

                            if(element.style.backgroundColor != "red"){

                                console.log("hai cliccato l'elemento numero: "+ i);
                                element.style.backgroundColor = "red";
                                bombaPresa = true;
                            }
                        }
                        //scopriBombe(grid, element, cond, arrBoom);
                        
                    }
                )
            }else{

                element.addEventListener("click",
            
                    ()=>{

                        if(!bombaPresa){
                            
                            if(element.style.backgroundColor != "blue"){

                                element.style.backgroundColor = "blue";
                                points++;
                                contatore.innerHTML = points;
                                console.log("hai cliccato l'elemento numero: "+ i);
                            }
                        }
                    }
                )

            }
        
            grid.append(element)
        }

    }

)

function getRandomArr(minNum, maxNum, arrLength){

    const arrayRed = [];
   

    while(arrayRed.length < arrLength){

        let newNumber = getRandom (minNum, maxNum);

        if(!arrayRed.includes(newNumber)){

            arrayRed.push(newNumber);
        }
    }

    arrayRed.sort((a, b) => a - b);

    return arrayRed;
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
function scopriBombe(grid, element, cond, arrboom){

    let index = 0;

    for(let i = 0; i < cond; i++){

        if(arrboom[index] == i){

        }
    }
}
*/
    




//DICHIARAZIONI
let grid = document.getElementById("gridContainer");
let start = document.getElementById("start");



//AVVIO AL GIOCO
start.addEventListener("click",

    ()=>{
        let cond = 0;
        let classe = "";

        let level = document.getElementById("selectLevel").value;
        grid.innerHTML = "";
        grid.classList.remove("d-none");
        grid.classList.add("d-flex");


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
        console.log(arrBoom)

        for(let i = 1; i <= cond; i++){

            let element = document.createElement("div");
            element.classList.add("content");
            element.classList.add(classe);    
            element.innerHTML = i;

            if(arrBoom[indexBoom] == i){

                indexBoom++

                element.addEventListener("click",
            
                    ()=>{
                        console.log("hai cliccato l'elemento numero: "+ i);
                        element.style.backgroundColor = "red";
                    }
                )
            }else{

                element.addEventListener("click",
            
                ()=>{
                    console.log("hai cliccato l'elemento numero: "+ i);
                    element.style.backgroundColor = "blue";
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


    




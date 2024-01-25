let boxes = document.querySelectorAll(".box");
// console.dir(boxes);
let resetbtn = document.querySelector(".reset");
// console.dir(resetbtn);
let newGame = document.querySelector(".new");
let msgContainer = document.querySelector(".msg");
let msgPara = document.querySelector("#winMsg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,6],
    [6,7,8]
]

const resetGame = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
}
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was Clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;


        checkWinner();

        if(count==9 && !checkWinner()){
            showDraw();
            count =0;
        }
    })
})



let disableButton = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}

let enableButton = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
     msgPara.innerText = `Congratulations!! Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableButton();
}
const showDraw = () => {
    msgPara.innerText = `It was a Draw!!`;
    msgContainer.classList.remove("hide");
    disableButton();
}


const checkWinner = () => {
    for(let patterns of winPatterns){
        // console.log(patterns[0] , patterns[1] , patterns[2]);
        // console.log(boxes[patterns[0]].innerText ,
        //             boxes[patterns[1]].innerText , 
        //             boxes[patterns[2]].innerText
        //             );

        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;
        
        let count =0;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log(val1 , "Won the game!!");
                showWinner(val1);
                
            }
        }
        
        
        
    }
}




newGame.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);
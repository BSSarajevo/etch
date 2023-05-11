let size = 16;
let penColor = "black";

document.querySelector(".slider").value = Math.sqrt(size);
document.querySelector(".sliderValue").innerHTML = `${size}x${size}`;


boardCreation(size);







document.querySelector(".slider").oninput = function () {
    size = Math.pow(2, this.value);
    document.querySelector(".sliderValue").innerHTML = `${size}x${size}`;
    boardCreation(size);
}







/* Function for creating the drawing board */
function boardCreation(size) {
    const board = document.querySelector(".drawing");
    /* If we are resizing the canvas first deleta all children */
    if (board.hasChildNodes()) {
        deleteChildren(board);
    }
    addChildren(size, board);
}

/* deleting children  for resize */
function deleteChildren(board) {
    while (board.firstChild) {
        board.firstChild.remove();
    }
}


/* Makes a grid of child divs that are used as canvas pixels*/
function addChildren(size, board) {
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.id = i + 1;
        square.className = "pixel";
        board.insertAdjacentElement("beforeend", square);
    }
    pen(penColor);
}

/*  Event listener for drawing pen 
    Pen colors will be changed here
*/
function pen(penColor) {
    document.querySelectorAll(".pixel").forEach(element => {
        element.addEventListener(
            "mouseover",
            (event) => {
                if(penColor==='random'){
                    randomColor=Math.floor(Math.random()*16777215).toString(16);
                    event.target.style.backgroundColor = "#" + randomColor;
                }else{
                event.target.style.backgroundColor = penColor;}
            },
            false
        );
    });
}

document.querySelector(".buttons").addEventListener(
    'click',(event) => {
        const  isButton= event.target.nodeName === 'BUTTON';
        if(!isButton){
            return;
        }
        pen(event.target.id) 
    },
    false
);

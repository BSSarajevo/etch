let sizeDrawing = 5;
let size=Math.pow(2,document.querySelector(".slider").value) ;
document.querySelector(".sliderValue").innerHTML=size;
boardCreation(sizeDrawing);



const pixel=document.querySelectorAll(".pixel");

pixel.forEach(element => {
    element.addEventListener(
        "mouseover",
        (event) => {
          event.target.style.backgroundColor = "orange";
          console.log(element.id);
        },
        false
      );    
});

document.querySelector(".slider").oninput = function(){
    console.log(this.value);
    document.querySelector(".sliderValue").textContent=this.value;
}








function boardCreation(size) {
    const board = document.querySelector(".drawing");
    deleteChildren(board);
    addChildren(size, board);
}
/* deleting children  before resize */
function deleteChildren(board) {
    while (board.firstChild) {
        board.firstChild.remove();
    }
}
/* Makes a grid of child divs */
function addChildren(size, board) {
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.id = "pixel";
        square.className = "pixel";
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }
}

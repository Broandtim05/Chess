document.getElementsByTagName("table")[0].style.backgroundColor = "green";
document.getElementsByTagName("table")[0].style.border = "salmon solid";
// Iterate through each td element and makes its dimensions 80px by 80px
// Iterates through each element to give each square its appropriate color
// Important to remember that these are the td elements.

var tdElements = document.getElementsByTagName("td");
for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].style.border = "forest green";
  tdElements[i].style.width = "80px";
  tdElements[i].style.height = "80px";
  console.log(tdElements[i].id);
  var boardIds = tdElements[i].id;
  console.log(boardIds.includes("a") || boardIds.includes("c") || boardIds.includes("e") || boardIds.includes("g"));
  
 
  
  if (boardIds.includes("a") || boardIds.includes("c") || boardIds.includes("e") || boardIds.includes("g")){
    
    
    if(boardIds.includes("1") || boardIds.includes("3") || boardIds.includes("5") || boardIds.includes("7")){
          tdElements[i].style.backgroundColor = "light green";
    }
    if(boardIds.includes("2") || boardIds.includes("4") || boardIds.includes("6") || boardIds.includes("8")){
      tdElements[i].style.backgroundColor = "white";
    }
  }


  if (boardIds.includes("b") || boardIds.includes("d") || boardIds.includes("f") || boardIds.includes("h")){
    
    
    if(boardIds.includes("1") || boardIds.includes("3") || boardIds.includes("5") || boardIds.includes("7")){
          tdElements[i].style.backgroundColor = "white";
    }
    if(boardIds.includes("2") || boardIds.includes("4") || boardIds.includes("6") || boardIds.includes("8")){
      tdElements[i].style.backgroundColor = "light green";
    }
  }

  
}
// Style the board
document.getElementsByTagName("span")[0].style.position = "fixed";
document.getElementsByTagName("span")[0].style.top = "50%";
document.getElementsByTagName("span")[0].style.left = "50%";
document.getElementsByTagName("span")[0].style.translate = ('-50%,-50%')

// drag and drop with imgs

// white pieces
const wPawn = document.querySelectorAll(".white_pawn");
const wRook = document.querySelectorAll(".white_rook");
const wKnight = document.querySelectorAll(".white_knight");
const wBishop = document.querySelectorAll(".white_bishop");
const wQueen = document.querySelectorAll(".white_queen");
const wKing = document.querySelectorAll(".white_king");

const bPawn = document.querySelectorAll(".black_pawn");
const bRook = document.querySelectorAll(".black_rook");
const bKnight = document.querySelectorAll(".black_knight");
const bBishop = document.querySelectorAll(".black_bishop");
const bQueen = document.querySelectorAll(".black_queen");
const bKing = document.querySelectorAll(".black_king");

const W_combinedElements = Array.from(wQueen).concat(Array.from(wKing)).concat(Array.from(wBishop)).concat(Array.from(wKnight)).concat(Array.from(wRook)).concat(Array.from(wPawn));

const B_combinedElements = Array.from(bQueen).concat(Array.from(bKing)).concat(Array.from(bBishop)).concat(Array.from(bKnight)).concat(Array.from(bRook)).concat(Array.from(bPawn));

const combinedElements = Array.from(W_combinedElements).concat(Array.from(B_combinedElements));

console.log(combinedElements)


// -----------------------------EVERYTHING FROM HERE DOWN IS IN PROGRESS!!!-----------------------------

var empty = document.getElementsByClassName('empty')

for (const empties of empty){
  empties.addEventListener('dragover', dragOver);
  empties.addEventListener('dragenter', dragEnter);
  empties.addEventListener('dragleave', dragLeave);
  empties.addEventListener('drop', dragDrop);
}

for (const pawn of wPawn){
  pawn.addEventListener('dragstart', dragStart);
  pawn.addEventListener('dragend', dragEnd);
} 

 for (const pawn of bPawn){
  pawn.addEventListener('dragstart', dragStart);
  pawn.addEventListener('dragend', dragEnd);
}

for (const rook of wRook){
  rook.addEventListener('dragstart', dragStart);
  rook.addEventListener('dragend', dragEnd);
}

for (const rook of bRook){
  rook.addEventListener('dragstart', dragStart);
  rook.addEventListener('dragend', dragEnd);
}

for (const knight of wKnight){
  knight.addEventListener('dragstart', dragStart);
  knight.addEventListener('dragend', dragEnd);
}

for (const knight of bKnight){
  knight.addEventListener('dragstart', dragStart);
  knight.addEventListener('dragend', dragEnd);
}

for (const bishop of wBishop){
  bishop.addEventListener('dragstart', dragStart);
  bishop.addEventListener('dragend', dragEnd);
}

for (const bishop of bBishop){
  bishop.addEventListener('dragstart', dragStart);
  bishop.addEventListener('dragend', dragEnd);
}

for (const queen of wQueen){
  queen.addEventListener('dragstart', dragStart);
  queen.addEventListener('dragend', dragEnd);
}

for (const queen of bQueen){
  queen.addEventListener('dragstart', dragStart);
  queen.addEventListener('dragend', dragEnd);
}

for (const king of wKing){
  king.addEventListener('dragstart', dragStart);
  king.addEventListener('dragend', dragEnd);
}

for (const king of bKing){
  king.addEventListener('dragstart', dragStart);
  king.addEventListener('dragend', dragEnd);
}
globalThis.formerMovingObject = null;
globalThis.formerMovingObjectClass = null;
globalThis.formerMovingObjectColor = 'black';
function dragOver(e){
  e.preventDefault();
  console.log("Over");
}

function dragEnter(e){
  e.preventDefault();
  console.log("Enter");
  globalThis.formerClassName = this.className;
  // IN PROGRESS!!
  if(this.childElementCount == 1){
    globalThis.squareContent = this.firstChild.className;
    console.log(squareContent);
  }
  //this.className += ' hovered';
  
  
}

function dragLeave(){
  console.log("Leave");
  //this.className = 'empty';
  this.className = formerClassName;
  //globalThis.formerClassName = this.className;
  
}

function dragDrop(){
  console.log("Drop");
  
  if(validMove()){
    this.replaceChildren();
    this.append(movingObject);
    this.className = 'empty filled';
    globalThis.formerMovingObject = movingObject;
    globalThis.formerMovingObjectClass = movingObjectClass;
    globalThis.formerMovingObjectColor = movingObjectColor;
    console.log(this.firstChild.className);
  } else{
    
  }

}


function validMove(){
  if (formerMovingObjectColor == movingObjectColor){
    return false
  } else{
    return true
    
  }
    
}


function dragStart(){
  console.log("Start");
  globalThis.movingObject = this;
  globalThis.movingObjectClass = movingObject.className;
  globalThis.movingObjectColor = movingObjectClass[0] + movingObjectClass[1] + movingObjectClass[2] + movingObjectClass[3] + movingObjectClass[4];
  console.log(movingObjectColor);
  if(this.className.includes('pawn')){
    console.log('PAWN ON THE MOVE!!!!');
    globalThis.movingPawn = true
    
  }

    if(this.className.includes('rook')){
    console.log('ROOK ON THE MOVE!!!!');
    movingRook = true;
  } 

    if(this.className.includes('bishop')){
    console.log('BISHOP ON THE MOVE!!!!');
    movingBishop = true;
  } 

    if(this.className.includes('knight')){
    console.log('KNIGHT ON THE MOVE!!!!');
    movingKnight = true;
  } 
    if(this.className.includes('queen')){
    console.log('QUEEN ON THE MOVE!!!!');
    movingQueen = true;
  } 

    if(this.className.includes('king')){
    console.log('KING ON THE MOVE!!!!');
    movingKing = true;
  } 
  this.className += ' hold';
  //setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
  console.log("End");
  this.className = movingObjectClass;
  console.log(movingObjectClass[4]);
  
}

 /* function whitePawn(id_letter, id_number){
  if (id_number == 2){
    //console.log(id_letter + (id_number+1));
    //console.log(id_letter + (id_number+2));
    console.log(document.getElementById(id_letter + (id_number+0)).parentElement.children[0].className);
    document.getElementById(id_letter + (id_number+0)).parentElement.children[0].className +=" red";
    console.log(document.getElementById(id_letter + (id_number+1)));
    console.log(document.getElementById(id_letter + (id_number+2)));
    document.getElementById(id_letter + (id_number+1)).style.backgroundColor = "yellow";
    document.getElementById(id_letter + (id_number+2)).style.backgroundColor = "yellow";
  }

  else{
    //document.getElementById(id_letter + (id_number+0)).style.backgroundColor = "red";
    //document.getElementById(id_letter + (id_number+1)).style.backgroundColor = "yellow";
    
  }
} */




/* for(var x of combinedElements){
  this.className += ' fill'
}

for (const pawn of wPawn){
  pawn.addEventListener('dragover', dragOver);
  pawn.addEventListener('dragenter', dragEnter);
  pawn.addEventListener('dragleave', dragLeave);
  pawn.addEventListener('drop', dragDrop);
}

 for (const pawn of bPawn){
  pawn.addEventListener('dragover', dragOver);
  pawn.addEventListener('dragenter', dragEnter);
  pawn.addEventListener('dragleave', dragLeave);
  pawn.addEventListener('drop', dragDrop);
}

for (const rook of wRook){
  rook.addEventListener('dragover', dragOver);
  rook.addEventListener('dragenter', dragEnter);
  rook.addEventListener('dragleave', dragLeave);
  rook.addEventListener('drop', dragDrop);
}

for (const rook of bRook){
  rook.addEventListener('dragover', dragOver);
  rook.addEventListener('dragenter', dragEnter);
  rook.addEventListener('dragleave', dragLeave);
  rook.addEventListener('drop', dragDrop);
}

*/

/* for (const knight of wKnight){
  knight.addEventListener('dragover', dragOver);
  knight.addEventListener('dragenter', dragEnter);
  knight.addEventListener('dragleave', dragLeave);
  knight.addEventListener('drop', dragDrop);
}

for (const knight of bKnight){
  knight.addEventListener('dragover', dragOver);
  knight.addEventListener('dragenter', dragEnter);
  knight.addEventListener('dragleave', dragLeave);
  knight.addEventListener('drop', dragDrop);
}

for (const bishop of wBishop){
  bishop.addEventListener('dragover', dragOver);
  bishop.addEventListener('dragenter', dragEnter);
  bishop.addEventListener('dragleave', dragLeave);
  bishop.addEventListener('drop', dragDrop);
}

for (const bishop of bBishop){
  bishop.addEventListener('dragover', dragOver);
  bishop.addEventListener('dragenter', dragEnter);
  bishop.addEventListener('dragleave', dragLeave);
  bishop.addEventListener('drop', dragDrop);
}

for (const queen of wQueen){
  queen.addEventListener('dragover', dragOver);
  queen.addEventListener('dragenter', dragEnter);
  queen.addEventListener('dragleave', dragLeave);
  queen.addEventListener('drop', dragDrop);
}

for (const queen of bQueen){
  queen.addEventListener('dragover', dragOver);
  queen.addEventListener('dragenter', dragEnter);
  queen.addEventListener('dragleave', dragLeave);
  queen.addEventListener('drop', dragDrop);
}

for (const king of wKing){
  king.addEventListener('dragover', dragOver);
  king.addEventListener('dragenter', dragEnter);
  king.addEventListener('dragleave', dragLeave);
  king.addEventListener('drop', dragDrop);
}

for (const king of bKing){
  king.addEventListener('dragover', dragOver);
  king.addEventListener('dragenter', dragEnter);
  king.addEventListener('dragleave', dragLeave);
  king.addEventListener('drop', dragDrop);
} */



/* function dragStart(){
  console.log("start");
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
  console.log("end");
  this.className = 'fill';
  
}

function dragOver(e){
  console.log("Over");
  e.preventDefault();
}

function dragEnter(e){
  console.log("Enter");
  e.preventDefault();
  this.className += ' hovered'
}

function dragLeave(){
  console.log("Leave");
  this.className = 'empty';
}

function dragDrop(){
  console.log("Drop");
  this.className = 'empty'
  //this.append(fill);
} 

*/
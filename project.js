
 let colorPink = document.getElementById('colors')
 let h1Color = document.getElementById('h1ColorChange')

 var color = document.createElement(color)
 
 
  let click = true
  //Essa função
  function populateBoard(size) { 
    var board = document.querySelector('#board')
     var squares = board.querySelectorAll('div')
     squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`
    let valor = document.querySelector('.valor')
    let valor2= document.querySelector('.valor2')
    valor.textContent = size
    valor2.textContent =size
   

    let amount = size *size
    for(let i = 0 ; i< amount;i++) {
        var square = document.createElement('div');
        
        square.style.backgroundColor = "blue";
        board.appendChild(square)
        square.addEventListener('mouseover',colorSquare)
       
        
    }
    if(color === 'clear') {
      this.style.backgroundColor = 'blue'
    }
    
   
    }

     populateBoard(16)

     
     function changeSize(input){
      if(input >= 2&&input <= 100){
        populateBoard(input)
      }
      else {
        console.log("Too many divs")
      }
     }
    function colorSquare() {
    if(click){if(color ==='random') {
      this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    } 
    else if(color=== 'erase' ){
        this.style.backgroundColor = 'blue'
    }
     else if (color === 'colorPink') {
      this.style.backgroundColor = colorPink.value
     }
    
}
    
    }
    
    function ChangeColor(choice) {
      color = choice
    }
    function clearBoard () {
      var board = document.querySelector('#board')
      var squares = board.querySelectorAll('div')
      squares.forEach((div) => div.style.backgroundColor = 'blue')

    }
    document.querySelector('body').addEventListener('click', () =>{
      click = !click
    })
    function h1colorchanger (){
     h1Color.style.color = colorPink.value
    }

    
    // function random_hex_color_code ()  {
    //   let n = (Math.random() * 0xfffff * 1000000).toString(16);
    //   return '#' + n.slice(0, 6);
    // };
    
   
    
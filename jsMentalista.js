

    var target = parseInt(Math.random() * 10);
    var chances = 5;
    var acerto = false;


function processoChute(){

    var chute = parseInt(document.getElementById("input").value);

    if(chute < target) {

        chances--;

        document.getElementById("resultado").innerHTML = 
        `
        <p>Wrong, target is bigger, ${chances} chances left</p>

        `
        document.getElementById("input").value = "";

        return false;
    }
    
    else if(chute > target) {

        chances--;

        document.getElementById("resultado").innerHTML = 
        `
        <p>Wrong, target is lower, ${chances} chances left</p>

        `
        document.getElementById("input").value = "";

        return false;
    }
    
    else if(chute == target) {
        chances--;
        return true;
    } 

    
}


function chute(){

    var result = processoChute();

    if(result == true){
        document.getElementById("resultado").innerHTML = 
        `
        <p>Congrats you made it!</p>
        <p>Chances left: ${chances}</p>
        
        <button id="botao" onclick="window.location.reload()">Try Again</button>
        `
        document.body.style.backgroundImage = "url(img/parabens.gif)"; 
        document.body.style.backgroundSize = "60%";
        document.body.style.backgroundRepeat = "repeat";
        document.getElementById("container").style.background = "hidden";
        document.getElementById("input").disabled = true;
        document.getElementById("botao").disabled = true;
    } else if (chances == 0){
        window.location.href = "perdeu.html";
    }

}

function resetar(){
    window.location.href = "index.html";
}
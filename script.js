let input1;
let input2;
let heading;

document.getElementById("btn").onclick = function (){
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    console.log(input1)
    console.log(input2)
    if (input1 == "31" && input2 == "12"){
        document.getElementById("heading").innerHTML = "Correct!!";
        document.getElementById("hint1").innerHTML = "";
        document.getElementById("hint2").innerHTML = "";
        document.getElementById("surat").src = "sussy-letter.png";
        document.getElementById("pic").src = "baobao.jpg";
        var btn = document.getElementById("btn-content");
        btn.src = "Component 2.png"
        var audio = document.getElementById("lagu");
        audio.play();
    } else if (input1 == "31" && input2 > "12"){
        document.getElementById("hint1").innerHTML = "Correct";
        document.getElementById("hint2").innerHTML = "Lower";
    } else if (input1 > "31" && input2 == "12"){
        document.getElementById("hint1").innerHTML = "Lower";
        document.getElementById("hint2").innerHTML = "Correct";
    } else if (input1 > "31" && input2 > "12"){
        document.getElementById("hint1").innerHTML = "Lower";
        document.getElementById("hint2").innerHTML = "Lower";
    } else if (input1 < "31" && input2 < "12"){
        document.getElementById("hint1").innerHTML = "Higher";
        document.getElementById("hint2").innerHTML = "Higher";
    } else if (input1 < "31" && input2 == "12"){
        document.getElementById("hint1").innerHTML = "Higher";
        document.getElementById("hint2").innerHTML = "correct";
    } else if (input1 == "31" && input2 < "12"){
        document.getElementById("hint1").innerHTML = "Correct";
        document.getElementById("hint2").innerHTML = "Higher";
    } else if (input1 > "31" && input2 < "12"){
        document.getElementById("hint1").innerHTML = "Lower";
        document.getElementById("hint2").innerHTML = "Higher";
    } else if (input1 < "31" && input2 > "12"){
        document.getElementById("hint1").innerHTML = "Higher";
        document.getElementById("hint2").innerHTML = "Lower";
    } 
}
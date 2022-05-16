var choice = 1

var r = 255;
var g = 255;
var b = 38;
function rgb(){
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)  
}
    
function pallete(choice,value){
    console.log(choice,value)
    document.getElementById(choice).style.backgroundColor = value
}

document.querySelector(".gen").addEventListener("click",function(){
    rgb()
    document.getElementById("main").style.backgroundColor = `rgb(${r},${g},${b})`
})

document.querySelector(".sav").addEventListener("click",function(){
    
    list = [document.getElementById("one").style.backgroundColor,
    document.getElementById("two").style.backgroundColor,
    document.getElementById("three").style.backgroundColor,
    document.getElementById("four").style.backgroundColor,
    document.getElementById("five").style.backgroundColor,
    document.getElementById("six").style.backgroundColor,
    document.getElementById("seven").style.backgroundColor,
    document.getElementById("eight").style.backgroundColor,
    document.getElementById("nine").style.backgroundColor]

    if (!(list.includes(`rgb(${r}, ${g}, ${b})`))){
        
    if(choice === 1){
        pallete("one",`rgb(${r}, ${g}, ${b})`)
        console.log("damn")
    }
    else if(choice === 2){
        pallete("two",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 3){
        pallete("three",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 4){
        pallete("four",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 5){
        pallete("five",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 6){
        pallete("six",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 7){
        pallete("seven",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 8){
        pallete("eight",`rgb(${r}, ${g}, ${b})`)
    }
    else if(choice === 9){
        pallete("nine",`rgb(${r}, ${g}, ${b})`)  
    }
    if(choice === 9){
        choice = 0
    }
    choice = choice +1
}

})
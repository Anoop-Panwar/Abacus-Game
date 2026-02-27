//text hidden visble content
let initialText =  document.querySelector(".intial-text")
let startText =  document.querySelector(".started-text")
let winText =  document.querySelector(".win-text")


// random number generate as target number
let randomNumber = Math.floor(Math.random() * 99999) + 1;
let formattedNumber = randomNumber.toString().padStart(5, "0");

let targetNum = document.getElementById("target-number")
targetNum.innerHTML= formattedNumber;

// user target value update
let count = [0 ,0 ,0 , 0 , 0];
let userNumber = document.getElementById("user-number");

    // user target update count function
function updateUserScore(){

    initialText.classList.add("hidden");
    startText.classList.remove("hidden");


    userNumber.innerHTML = count.join("");

    let beadsContainers = document.querySelectorAll(".beads-container");
    beadsContainers.forEach(function(container, index){

        // clean container
        container.innerHTML = "";

        //beads increase as count increase
        for(let i = 0; i < count[index]; i++){

            let newBead = document.createElement("div");
            newBead.classList.add("bead");

            container.appendChild(newBead);
        }

    });

    if(count.join("") === formattedNumber ){
       winText.classList.remove("hidden");
       startText.classList.add("hidden");
        
    }else{
        winText.classList.add("hidden");
    }
}

// select rods
let rods = document.querySelectorAll(".rod");
let rodsArray = Array.from(rods); // selectes rods elemets ko array mai convert kara 


// function works on incresaing button
const incBtn = document.querySelectorAll(".increaseBtn");
incBtn.forEach(function(button){

    button.addEventListener("click", function(){

        let rod = this.closest(".rod");  // this line find btn parent rod
        let rodIndex = rodsArray.indexOf(rod); // this line find selected rod of index from the rodsArray
        console.log(rodIndex)

        count[rodIndex] = (count[rodIndex] + 1)
        console.log(count);


        // condtion for carry on beads
        if(count[rodIndex] > 9){
            if(rodIndex>0){
                count[rodIndex-1] = count[rodIndex-1] + 1  
            }

            count[rodIndex] = 0;
        }

        updateUserScore()
        
    })
})

//function works on decrease button
const decBtn = document.querySelectorAll(".decreaseBtn");
decBtn.forEach(function(button){

    button.addEventListener("click", function(){
        
        let rod = this.closest(".rod");
        let rodIndex = rodsArray.indexOf(rod);
        console.log(rodIndex);

        // condition to protect count number goes to negative(-)
        if(count[rodIndex]>0){
            count[rodIndex] = count[rodIndex] = (count[rodIndex] - 1);
            console.log(count)
        }else{
           count[rodIndex] = 0; 
        }

        updateUserScore()
    })


})

// new question reset all elements
let nextQuestion = document.querySelector(".next-question");
nextQuestion.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 99999) + 1;
    formattedNumber = randomNumber.toString().padStart(5, "0");

    targetNum = document.getElementById("target-number")
    targetNum.innerHTML= formattedNumber;

    count = [0 ,0 ,0 , 0 , 0];
    updateUserScore()

    startText.classList.add("hidden");

    initialText.classList.remove("hidden")
    
})
 
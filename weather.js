const form = document.queryselector("form");
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const list = document.querySelector(".container .cities");

localStorage.setItem("apiKey", EncryptStringAES ("6daec791559c4b09ad7d5b52ef59c4c7"));

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeatherdataFromApi();
    //alert("form was submitted")
    form.reset();
    input.value = "";
    //target visualViewport. currentTarget
    //e.currentTarget.reset
})

const getWeatherdataFromApi = () =>{
    https://app.getpostman.com/join-team?invite_code=8b9b6f45289e501d6b2d91ba13831599
}


let ratingButtons=document.querySelectorAll(".rating ul ui");
let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let rating=1;
function clickedbutton(id){
    removeactive();
    ratingButtons[id-1].className="active";
    rating=id;
}
function removeactive(){
    for(let i=0;i<ratingButtons.length;i++)
    {
        ratingButtons[i].className="";
    }
}

function showPage2(){
    document.querySelector(".rank").textContent=rating;
    card1.style.display="none";
    card2.style.display="block";

}

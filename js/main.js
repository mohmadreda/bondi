let li = document.querySelectorAll(".lists li");
let feats = document.querySelectorAll(".feat");


li.forEach((l)=>{
 l.onclick = function(){
    feats.forEach((feat) =>{
        feat.parentElement.classList.remove("display");
    })
     li.forEach((l)=>{
         l.classList.remove("active");
     })
     l.classList.add("active");
     feats.forEach((feat) =>{
        if(feat.getAttribute("data-work") !== l.getAttribute("data-work")){
            feat.parentElement.classList.add("display");
        }
     }
     )
     if(l.getAttribute("data-work") == "all"){
        feats.forEach((feat) =>{
            feat.parentElement.classList.remove("display");
        })
     }
 }

}
)
console.log(li)
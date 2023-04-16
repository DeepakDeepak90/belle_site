

const productimage=document.querySelectorAll(".prodi img");
const productImageSlide=document.querySelector(".imagesl");
// const productImageSlide=document.querySelector(".image-slider");
const addinme=document.querySelector(".cart-wrapper")
let activeImageSlide=0;

productimage.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        productimage[activeImageSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.style.backgroundImage=`url("${item.src}")`;
        activeImageSlide=i;
    })
})




var productDetails= document.getElementById("ProductPrice-product-template");
function showProductInfo(id){
    fetch("/assets/myjs/api.json")
    .then(response => response.json()
    .then(response=>{                                                                                                      
        response.forEach(e=>{
            if(id==e.id){
                
document.getElementById("prid").src = e.imgsrc[0];
document.getElementById("pridd").src = e.imgsrc[1];
document.getElementById("priddd").src = e.imgsrc[2];
document.getElementById("pridddd").src = e.imgsrc[3];
productimage[0].click();
productDetails.innerHTML="Price : " + e.price + " Rs/-";
            }
       })
    })
        )
}

// alert();

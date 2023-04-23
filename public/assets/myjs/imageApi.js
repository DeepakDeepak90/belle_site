let arrayValue=JSON.parse(localStorage.getItem("data")) || [];
let idOfCart;
let total_price=0;
arrayValue.forEach(e=>{
    let aaa= document.getElementById("minicartsaman")  
    var d = parseInt(e.price);
    total_price+= d;
    
fetch(`/price/${total_price}`,{method:"get"})
     aaa.innerHTML+=`
     <li class="item">
     <a class="product-image" href="#">
         <img src="${e.img}" alt="Elastic Waist Dress - Black / Small" title="" />
     </a>
     <div class="product-details">
         <a href="#" class="remove"><i class="anm anm-times-l" aria-hidden="true" onclick="remove_cart_item(${e.id})"></i></a>
         <a href="#" class="edit-i remove"><i class="anm anm-edit" aria-hidden="true"  ></i></a>
         <a class="pName" href="cart.html">Elastic Waist Dress</a>
         <div class="variant-cart">Gray / XXL</div>
         <div class="wrapQtyBtn">
             <div class="qtyField">
                 <span class="label">Qty:</span>
                 <a class="qtyBtn minus" href="javascript:void(0);"><i class="fa anm anm-minus-r" aria-hidden="true"></i></a>
                 <input type="text" id="Quantity" name="quantity" value="1" class="product-form__input qty">
                 <a class="qtyBtn plus" href="javascript:void(0);"><i class="fa anm anm-plus-r" aria-hidden="true"></i></a>
             </div>
         </div>
            <div class="priceRow">Price :
             <div class="product-price">
                 <span class="money">${e.price} Rs/-</span>
             </div>
         </div>
     </div>
 </li>
     `
})

document.getElementById("CartCount").innerHTML=arrayValue.length;
var cartid=[];
    function getthis(id){
       fetch("/assets/myjs/api.json")
    .then(response => response.json()
    .then(response=>{ 
        response.forEach(e => {
            if(e.id==id){
                  let data={
                    img:e.imgsrc[0],
                    price:e.price,
                    id:e.id,
                  }
                  arrayValue.push(data);
            localStorage.setItem("data",JSON.stringify(arrayValue));
             cartlength=arrayValue;
            
            }
        });  
    })
    )
    }
    function showProductInfo(){
        let productInfo=document.getElementById("tbody");
        let productPricing=document.getElementById("product-pricing");
        
        let b=JSON.parse(localStorage.getItem("data"))
    for(let i=0;i<b.length;i++){
        let aa=b[i];
        productInfo.innerHTML +=`
                <tr class="cart__row border-bottom line1 cart-flex border-top">
                                    <td class="cart__image-wrapper cart-flex-item">
                                        <a href="#"><img class="cart__image" id="cartimg" src="${aa.img}" alt="Minerva Dress black"></a>
                                    </td>
                                    <td class="cart__meta small--text-left cart-flex-item">
                                        <div class="list-view-item__title">
                                            <a href="#">Minerva Dress black</a>
                                        </div>
                                    </td>
                                    <td class="cart__price-wrapper cart-flex-item">
                                        <span class="money" id="price">${aa.price}</span>
                                    </td>
                                    <td class="cart__update-wrapper cart-flex-item text-right">
                                        <div class="cart__qty text-center">
                                            <div class="qtyField">
                                                <a class="qtyBtn minus" href="javascript:void(0);"><i class="icon icon-minus"></i></a>
                                                <input class="cart__qty-input qty" type="text" name="updates[]" id="qty" value="1" pattern="[0-9]*">
                                                <a class="qtyBtn plus" href="javascript:void(0);"><i class="icon icon-plus"></i></a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right small--hide cart-price">
                                        <div><span class="money" id="total">${aa.price}</span></div>
                                    </td>
                                    <td class="text-center small--hide"><p  class="btn btn--secondary cart__remove" onclick="removeItem(${aa.id})" title="Remove tem"><i class="icon icon anm anm-times-l"></i></p></td>
                                </tr>
                `
        // console.log(aa.img);
    }
    let total=0;
    for(let i=0;i<b.length;i++){
        let aa=b[i];
        let zode= parseInt(aa.price)
        total +=zode;
        // console.log(total);
               
                // ;
                productPricing.innerHTML=`
                <div class="solid-border">	
                              <div class="row border-bottom pb-2">
                                <span class="col-12 col-sm-6 cart__subtotal-title">Subtotal</span>
                                <span class="col-12 col-sm-6 text-right"><span class="money">INR ${total}</span></span>
                              </div>
                             
                              <div class="row border-bottom pb-2 pt-2">
                                <span class="col-12 col-sm-6 cart__subtotal-title">Shipping</span>
                                <span class="col-12 col-sm-6 text-right">Free shipping</span>
                              </div>
                              <div class="row border-bottom pb-2 pt-2">
                                <span class="col-12 col-sm-6 cart__subtotal-title"><strong>Grand Total</strong></span>
                                <span class="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right"><span class="money">INR ${total}</span></span>
                              </div>
                              <div class="cart__shipping">Shipping &amp; taxes calculated at checkout</div>
                              
                              <input type="submit" name="checkout" id="cartCheckout" class="btn btn--small-wide checkout" value="Proceed To Checkout" >
                              <div class="paymnet-img"><img src="assets/images/payment-img.jpg" alt="Payment"></div>
                              <p><a href="#;">Checkout with Multiple Addresses</a></p>
                            </div>
                `
           
                
             
            }
            
}


function removeItem(id){
    // console.log(id);
    arrayValue.forEach(e=>{
        if (id===e.id) {
            
            var fordelete = arrayValue.indexOf(e);
            if (fordelete > -1) {
                // alert(fordelete)
                arrayValue.splice(fordelete, 1);
                localStorage.setItem("data", JSON.stringify(arrayValue));
                const myTimeout = setTimeout(myGreeting, 500);
              }
              function myGreeting() {
                window.location.reload();
              }
        }
    })   
}
function remove_cart_item(id) {
    arrayValue.forEach(e=>{
        if (id===e.id) {
            
            var fordelete = arrayValue.indexOf(e);
            if (fordelete > -1) {
                // alert(fordelete)
                arrayValue.splice(fordelete, 1);
                localStorage.setItem("data", JSON.stringify(arrayValue));
                const myTimeout = setTimeout(myGreeting, 500);
              }
              function myGreeting() {
                window.location.reload();
              }
        }
    })
}


// const mac14=document.getElementById('mac14');
// mac14.addEventListener('click',()=>{
//     const priceEl=document.getElementById('macPrice').innerText;
//     const fullnameEl=document.getElementById('fullname').value;
//     const productNameEl=document.getElementById('productName').innerText;
//     const addressEl=document.getElementById('Address').value;
//     console.log(priceEl,addressEl,fullnameEl,productNameEl);

//     const confirmationDivEl=document.getElementById('confirmation');
//     // console.log(confirmationDivEl);
//     const heading=document.createElement('h2');
//     heading.className='text-center';
//     const header=document.createElement('h4');
//     const productName=document.createElement('p');
//     const address=document.createElement('p');
//     const price=document.createElement('p');
//     heading.innerText='Order Confirmation';
//     header.innerText=fullnameEl;
//     productName.innerHTML=`Product Name : ${productNameEl}`;
//     address.innerText=`Address : ${addressEl}`;
//     price.innerText=`Total Price : ${priceEl}`;
//    confirmationDivEl.append(heading,header,productName,address,price);
//    confirmationDivEl.classList.add('p-5');
// })
let orders=0;
function getConfirm(){
    const priceEl=document.getElementById('macPrice').innerText;
    const fullnameEl=document.getElementById('fullname').value;
    const productNameEl=document.getElementById('productName').innerText;
    const addressEl=document.getElementById('Address').value;
    // console.log(priceEl,addressEl,fullnameEl,productNameEl);
    confirm('Order Confirmation');

    const confirmationDivEl=document.getElementById('confirmation');
    // console.log(confirmationDivEl);
    const heading=document.createElement('h2');
    heading.className='text-center';
    const header=document.createElement('h4');
    const productName=document.createElement('p');
    const address=document.createElement('p');
    const price=document.createElement('p');
    heading.innerText='Order Confirmation';
    header.innerText=fullnameEl;
    productName.innerHTML=`Product Name : ${productNameEl}`;
    address.innerText=`Address : ${addressEl}`;
    price.innerText=`Total Price : ${priceEl}`;
   confirmationDivEl.append(heading,header,productName,address,price);
   confirmationDivEl.classList.add('p-5'); 
   orders++;
   localStorage.setItem('noOfOrders',orders);
}



//Find the number of orders
const orderEl=document.getElementById('orders');
const ordersCount=document.getElementById('ordersCount');
// console.log(orderEl);
orderEl.addEventListener('click',()=>{
    const count=localStorage.getItem('noOfOrders');
    ordersCount.innerText=`Number of Orders Placed : ${count}`;
})
// const api={
//     createOrder:function(cart,generateSummary){
//         setTimeout(()=>{
//             console.log('This are the cart items ' + cart);
//             console.log('Order is Created for you!');
//             generateSummary();
//         },1000)
//     },
//     orderSummary:function(itemsInOrder,paymentOpt){
//         setTimeout(()=>{
//             console.log('Order Summary is created for you!',+ itemsInOrder);
//             paymentOpt();
//         },1000)
//     },
//     paymentDetails:function(){
//         setTimeout(()=>{
//             console.log('Payment Done Successfully!');
//         },1000)
//     }
// }
// const cart=['shirt','pant','shoes'];
// //api to create order
// api.createOrder(cart,()=>{
//     api.orderSummary(cart,()=>{
//         api.paymentDetails();// the code is growing horizontally aka inversion of control & pyramid of doom
//     });
// })

const api={
    //creating order
    //order details summary
    //payment details
    creatingOrder:function(cart,callBack){
        setTimeout(()=>{
            console.log('The created order includs following items: '+cart);
            const orderId=Math.floor(Math.random());
            callBack(orderId);
        },1000)
    },
    orderDetailsSummary:function(orderId,callBack){
        setTimeout(()=>{
            console.log('This is the orderId '+ orderId);
            callBack(orderId);
        },1000)
    },
    paymentDetails:function(orderId){
        setTimeout(()=>{
            console.log('Your payment was done successfully for orderId '+ orderId);
            console.log('Your payment id is #AUDI12341ALWU');
            console.log('Thanks for shopping with us');
        },1000)
    }
}

const cart=['shirt','pant','shoes'];
api.creatingOrder(cart,(orderId)=>{
    api.orderDetailsSummary(orderId,(orderId)=>{
        api.paymentDetails(orderId);
    })
})
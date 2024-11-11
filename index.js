const api={
    createOrder:function(cart,generateSummary){
        setTimeout(()=>{
            console.log('This are the cart items ' + cart);
            console.log('Order is Created for you!');
            generateSummary();
        },1000)
    },
    orderSummary:function(itemsInOrder,paymentOpt){
        setTimeout(()=>{
            console.log('Order Summary is created for you!',+ itemsInOrder);
            paymentOpt();
        },1000)
    },
    paymentDetails:function(){
        setTimeout(()=>{
            console.log('Payment Done Successfully!');
        },1000)
    }
}
const cart=['shirt','pant','shoes'];
//api to create order
api.createOrder(cart,()=>{
    api.orderSummary(cart,()=>{
        api.paymentDetails();// the code is growing horizontally aka inversion of control & pyramid of doom
    });
})

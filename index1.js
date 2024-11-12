//if samething to be done with the promise it would look like below

const api={
    createOrder:function(){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
            const orderId=Math.ceil(Math.random());
           if(orderId){
            console.log('Order created successfully!')
            resolve();
           } else{
            reject();
           }
           },1000)
        })
    },
    orderDetails:function(cartItems){
        return new Promise((resolve,reject)=>{
            if(cartItems){
                console.log('This is the order details: '+ cartItems)
                resolve();
            } else{
                reject();
            }
        })
    },
    paymentDetails:function(orderId){
        return new Promise((resolve,reject)=>{
            if(orderId){
                console.log('Payment for the orderId '+ orderId + ' was done successfully');
                resolve();
            } else{
                console.log('Payment unsuccessfull, Please try again!');
                reject();
            }
        })
    }
}
const cart=['shirt','pant','shoes']
api.createOrder().then(()=>api.orderDetails(cart)).then(()=>api.paymentDetails(Math.ceil(Math.random())));
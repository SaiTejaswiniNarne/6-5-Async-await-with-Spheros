async function getData(){
      console.log(a())
    //   .then(function(data){
    //     console.log(data)
    //   })

      console.log(b()) 
    //   .then(function(data){
    //     console.log(data)
    //   })

}

async function a(){
    i = 0
    while(i<100000000){
        i++;
    }
    return await Promise.resolve(0)
}

async function b(){
    i = 0
    while(i<100000000){
        i++;
    }
    return await Promise.resolve(1)
}


















var p = new Promise((resolve,reject){
    
    return resolve()/reject()
}) 
p.then(function(){
    console.log("a")
})
 


var p = new Promise((resolve,reject){
    
    return resolve()/reject()
 }) 
await p
console.log("a") 
 
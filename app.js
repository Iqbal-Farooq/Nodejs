// new Promise((resolve,reject)=>{
//     resolve()
//     })
//     .then(console.log(1))
//     setTimeout(()=>{
//     console.log(2)
//     },0)
//     console.log(3)

    // const bfObject = {
    //     value: 42,
    //     gfFunction: function() {
    //     setTimeout(function() { console.log("Result: ", this.value); }, 1000);
    //     },
    //     }
        
    //     bfObject.gfFunction();

    let sum=()=>{
        console.log('sum')
    }
    let isEven=(num)=>{
        if(num%2==0){
            console.log('the Given Number ',num,"is Even")
        }
        else{
            console.log('the Given Number ',num,"is Odd")
        }
    }
    module.exports ={isEven,sum}
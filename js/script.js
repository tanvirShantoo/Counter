let result=document.querySelectorAll('.result')

let arr = Array.from(result)

arr.map((item)=>{
    let i = 0

    let count = ()=>{
        i++
        item.innerHTML=i

        if(i==item.dataset.counter){
            clearInterval(stop)
        }
    }
    let stop = setInterval(()=>{
        count()
    },100 / item.dataset.counter)
})
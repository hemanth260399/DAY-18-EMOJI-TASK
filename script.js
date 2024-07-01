document.querySelector("button").addEventListener("click",foo)
async function foo(){
    try{
    let data=await fetch(`https://emojihub.yurace.pro/api/random/group/face-positive`)
    let res=await data.json()
    let box_ele=document.querySelector(".collabel")
    box_ele.innerHTML=res.htmlCode[0]
}catch(ERROR){
    console.log(ERROR)
}
}
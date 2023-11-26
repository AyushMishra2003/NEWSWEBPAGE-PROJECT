const url='https://newsapi.org/v2/top-headlines'
const key='786a0c3965b74488a5a09057fa50fe9f'
const country='in'
const pure_url=`${url}?country=${country}&apikey=${key}`


async function gettopheadling(){
    try{
        const response=await fetch(pure_url)
        const data=await response.json()
        const articarray=data.articles
       // console.log(articarray);
        const result=articarray.filter(function(data){
             if(data.urlToImage!=null)
             {
                return data
             }
        })
        let index=0;
        result.forEach(function(item){
            if(index<1)
            {
                document.getElementById('right-top').innerHTML+=`<div class="topchild1"><img src="${item.urlToImage}"><a href=${item.url}>${item.title}</a></div>`
            }
            else
            {
                if(index<=3)
                {
                    document.getElementById('left-top').innerHTML+=`<div class="topchild2"><img src="${item.urlToImage}"> <a href="${item.url}">${item.title}</a></div>`   
                }
                else
                {
                    if(index<=7)
                    {
                        document.getElementById('middle').innerHTML+=`<div class="middlechild"><img src="${item.urlToImage}"> <a href="${item.url}">${item.title}</a></div>`
                    }   
    
                    else
                    {
                        if(index<=9)
                        {
                            document.getElementById('bottom').innerHTML+=`<div class="bottomchild"><img src="${item.urlToImage}"> <a href="${item.url}">${item.title}</a></div>` 
                        }
                        else
                        {
                            document.getElementById('recent').innerHTML+=`
                            <div class="item"><img src="${item.urlToImage}"> <a href="${item.url}">${item.title}</a></div>`
                        }
                    }
                }
            }
            index++
        });
    } catch(error){
        console.log(error);
    }
}
gettopheadling()

let scroolcontainer=document.getElementById('recent')
let back=document.getElementById('back')
let forward=document.getElementById('forward')
console.log(scroolcontainer)
console.log(back)
console.log(forward);

scroolcontainer.addEventListener("wheel",function(item){
    item.preventDefault()
    scroolcontainer.scrollLeft+=item.deltaY
})
back.addEventListener("click",function(){
    console.log("ayu");
    scroolcontainer.scrollleft-=900
})

forward.addEventListener("click",function(){
    console.log("mis");
    scroolcontainer.scrollLeft+=900
})
let check=true
const hambtn=document.getElementById('hambtn') 
const close=document.getElementById('closebar')    
const nav=document.getElementById('nav')
console.log(hambtn);
console.log(close);
hambtn.addEventListener("click",function(){
   
      nav.style.display="flex"
      hambtn.style.display="none"
      close.style.display="flex"
})
close.addEventListener("click",function(){
   nav.style.display="none"
   hambtn.style.display="flex"
   close.style.display="none"
})
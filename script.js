const url='https://newsapi.org/v2/top-headlines'
const key='786a0c3965b74488a5a09057fa50fe9f'
const country='in'
const pure_url=`${url}?country=${country}&apikey=${key}`


async function gettopheadling(){
    try{
        const response=await fetch(pure_url)
        const data=await response.json()
        console.log(data);
            document.getElementById('right-top').innerHTML+=`<div class="topchild1"><img src="${data.articles[0].urlToImage}"><a href=${data.articles[0].url}>${data.articles[0].title}</a></div>`
        // document.getElementById('right-top').innerHTML+=`<div class="topchild1"><img src="${data.articles[0].urlToImage}"><a href=${data.articles[0].url}>${data.articles[0].title}</a></div>`
        // document.getElementById('top').innerHTML+=`<div class="parent"><img src="${data.articles[1].urlToImage}"><p>${data.articles[1].description}</p><a href=${data.articles[1].url}>Go to link</a></div>`
        // data.articles.forEach(element => {
        //     document.getElementById('left-top').innerHTML+=`<div class="topchild2"><img src="${element.urlToImage}"> <a href="${element.url}">${element.title}</a></div>`
        // });
        // // document.getElementById('left-top').innerHTML+=`<div class="topchild2"><img src="${data.articles[1].urlToImage}"> <a href="${data.articles[1].url}">${data.articles[1].title}</a></div>`
        // for(let index=6;index<=8;index++)
        // {
        //     document.getElementById('bottom-right-top').innerHTML+=`<div class="right-topchild1"><img src="${data.articles[index].urlToImage}"><a href=${data.articles[index].url}>${data.articles[index].title}</a></div>`
        // }
        for(let index=1;index<=4;index++)
        {
           document.getElementById('left-top').innerHTML+=`<div class="topchild2"><img src="${data.articles[index].urlToImage}"> <a href="${data.articles[index].url}">${data.articles[index].title}</a></div>`   
        }
        for(let index=5;index<=9;index++)
        {
           document.getElementById('middle').innerHTML+=`<div class="middlechild"><img src="${data.articles[index].urlToImage}"> <a href="${data.articles[index].url}">${data.articles[index].title}</a></div>`   
        }
        for(let index=10;index<=11;index++)
        {
           document.getElementById('bottom').innerHTML+=`<div class="bottomchild"><img src="${data.articles[index].urlToImage}"> <a href="${data.articles[index].url}">${data.articles[index].title}</a></div>`   
        }
        for(let index=12;index<=19;index++)
        {
           document.getElementById('recent').innerHTML+=`
           <div class="recentchild"><img src="${data.articles[index].urlToImage}"> <a href="${data.articles[index].url}">${"Click To Read Articles--"}</a></div>` 
        }
    } catch(error){
        console.log(error);
    }
}

gettopheadling()
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
                document.getElementById('right-top').innerHTML+=`<div class="topchild1"><img src="${result[0].urlToImage}"><a href=${result[0].url}>${result[0].title}</a></div>`
            }
            else
            {
                if(index<=4)
                {
                    document.getElementById('left-top').innerHTML+=`<div class="topchild2"><img src="${result[index].urlToImage}"> <a href="${result[index].url}">${result[index].title}</a></div>`   
                }
                else
                {
                    if(index<=9)
                    {
                        document.getElementById('middle').innerHTML+=`<div class="middlechild"><img src="${result[index].urlToImage}"> <a href="${result[index].url}">${result[index].title}</a></div>`   
                    }
                    else
                    {
                        if(index<=11)
                        {
                            document.getElementById('bottom').innerHTML+=`<div class="bottomchild"><img src="${result[index].urlToImage}"> <a href="${result[index].url}">${result[index].title}</a></div>` 
                        }
                        else
                        {
                            document.getElementById('recent').innerHTML+=`
                            <div class="recentchild item"><img src="${result[index].urlToImage}"> <a href="${result[index].url}">${"Click To Read Articles--"}</a></div>` 
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
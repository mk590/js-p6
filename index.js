console.log('postman tutorial')

/*
//.value wala issue

// let url=document.getElementById('url').value;
const url=document.getElementById('url').value;
console.log(url)
// ye undefined show karega 

const reqBox=document.getElementById('')
const get=document.getElementById('get')
const post=document.getElementById('post')

let type;
if (get.checked) {
    type=get.value;
} else {
    type=post.value;
    
}

console.log(type)
// ye wala bhi sahi output nahi dega 

*/

let showArea=document.getElementById("responseJsonText")

showArea.style.display='none';
const btn=document.getElementById('submit')
btn.addEventListener('click',test)
function test() {
    const url=document.getElementById('url').value;
    console.log(url)

    const get=document.getElementById('get')
    const post=document.getElementById('post')
    
    let type;
    if (get.checked) {
        type=get.value;
    } else {
        type=post.value;
        
    }
    
    console.log(type)  


    const xhr=new XMLHttpRequest();
    xhr.open(type,url,true)
    xhr.getResponseHeader('content-type','application/json')

    xhr.onload=function () {
        showArea.style.display='block';
        showArea.innerHTML=JSON.parse(this.responseText);
    }

    xhr.send()
}

/**
 * hua ye ki jo code likha wo page load hote hi data fetch kar liya us time to by default data tha wahi load hua 
 * isliyse button ke andar dalne par sahi kam kiya 
 */

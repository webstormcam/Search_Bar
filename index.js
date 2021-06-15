document.getElementById('usernameInput').addEventListener('keyup',function(event){
    let username=event.target.value.toLowerCase()
    console.log(username);
    
})

let allNamesDOMCollection=[]
let ul=document.getElementById('results')
let items=ul.getElementsByTagName('li')
for(var i=0; i<items.length;i++){
     allNamesDOMCollection.push(items[i])
}


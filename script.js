let btn=document.querySelector('button');
let inp=document.querySelector('input')
let border=document.querySelector('.border')
let show=document.querySelector('#show')
let show1=document.querySelector('#show-2')
let loading='https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif'



btn.addEventListener('click',(e)=>{
    e.preventDefault()

   if(inp.value==''){
alert('Daxil edin')
   }
   else {
    show.innerHTML=` <img src="${loading}" class="img-thumbnail mt-5" alt="">`
    fetch(`https://source.unsplash.com/random/700×500/?${inp.value}`).then((response)=>{
show.innerHTML=` <img src="${response.url}"  alt=""  class="img-thumbnail "  style="width: 700px; height: 500px;">`

    }).catch((err)=>{
console.log(err);
    })

    fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=37f526f613924fbea549a01ccb33f875`)
	.then(response => response.json()).then((response)=>{
        let x=''
        border.style.display='block'
        for(key in response){
          
           x+=`<li style="list-style: none; text-align:center; width:400px;">  ${key} </li>`   
           show1.innerHTML=x
            
        }
     x=''
       
    }).catch((err)=>[
console.log(err)
    ])
	

    // inp.value=''
   }
})




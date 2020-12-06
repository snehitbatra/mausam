
//fetch('http://localhost:3000/weather?search=london').then((response)=>{ response.json().then((data)=>{ if(data.error){console.log('bad')} else {console.log(data.location)}} ) }   )
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message=document.querySelector('#data')
const msg=document.querySelector('#dat')
const m=document.querySelector('#da')


weatherform.addEventListener('submit' , (e)=>{ e.preventDefault()
const lo=search.value 
fetch('http://localhost:3000/weather?search='+ lo).then((response)=>{ response.json().then((data)=>{ if(data.error){message.textContent="oopsie"} else {message.textContent=data.location ; 
msg.textContent="the temperature in " +data.location+" is "+data.temperature+" degree celcius " ;m.textContent=" date and time is "+data.date } } ) } )

} )

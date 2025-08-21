const apiKey = "1e1d843285dca3527823a30d305cd7f9";
const Temp = document.getElementById('temp');
const description = document.getElementById('Description');
const Windspeed = document.getElementById('windspeed');
document.getElementById('getweather').addEventListener('click',()=>{
    const city = document.getElementById('field').value.trim();

    if(city===""){
    Temp.textContent = '';
    description.textContent = '';
    Windspeed.textContent = '⚠️please enter city name';return;
    }
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
   fetch(url)
   .then(response =>{
    if(!response.ok) throw new Error('City not found');
    return response.json();
   }
   )
   .then(data => {
    Temp.textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    description.textContent =`🌥️ description:${data.weather[0].description}`;
    Windspeed.textContent = `💨windspeed:${data.wind.speed}m/s`;
    
   })
   .catch(err =>{
    Temp.textContent = '';
    description.textContent = '';
    Windspeed.textContent = '❌Error:City not found';
    
   });

 
    
});
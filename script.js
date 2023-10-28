const apikey = "f38fa0db4c94c296e0a07dbfa8a481d1";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=f38fa0db4c94c296e0a07dbfa8a481d1&nits=metric"
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
document.querySelector(".weather").style.display="block";

async function checkweather(){
    const response = await fetch(apiUrl+`&appid = ${apikey}`);
    var data = response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.getElementById(".temp").innerHTML = Math.round(data.main.temp) +"k";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = object.wind.speed +"km/h";
    if(data.weather[0].main=="clouds"){
        weatherIcon:src="https://tse2.mm.bing.net/th?id=OIP.tSgdC54E9QQ_40YkYkSUgAHaG4&pid=Api&P=0&h=220"
    }
    else if(data.weather[0].main=="clear"){
        weatherIcon:src="https://tse4.mm.bing.net/th?id=OIP.zHk-Xf2axi6euiRj6_gjNwHaHv&pid=Api&P=0&h=220"
    }

else if(data.weather[0].main=="rain"){
    weatherIcon:src="https://tse1.mm.bing.net/th?id=OIP.r8_K7pjjQO1XSFvUMPAlQAHaGt&pid=Api&P=0&h=220"
}
else if(data.weather[0].main=="drizzle"){
    weatherIcon:src="https://tse1.mm.bing.net/th?id=OIP.4YX-AKkdbSa8vgGf4RwUYQHaH0&pid=Api&P=0&h=220"
}
else if(data.weather[0].main=="mist"){
    weatherIcon:src="http://www.caspianwebmet.com/img/legendIcons/mist.png"
}
}
checkweather();
searchbtn.addEventListener("click",()=>
{
    checkweather(searchbox.value)
})
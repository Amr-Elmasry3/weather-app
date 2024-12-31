// Access To Element We Will Use Them

let input= document.querySelector(".search input");
let searchIcon= document.querySelector(".search i");
let erorrImg= document.querySelector(".erorr-img");
let content= document.querySelector(".content");
let allStateIcon= Array.from(document.querySelectorAll(".icon img"));
let temperature= document.querySelector(".temperature");
let cityName= document.querySelector(".city-name");
let humidityValue= document.querySelector(".percentage");
let windSpeedValue= document.querySelector(".number");

// Main Code

let apiKey= "6ff832752657f3ae08b8fd81209f4f79";
let city;

searchIcon.onclick= function (){
  city= input.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then((response) => {
    let myData= response.json();
    return myData;
  }).then((data) => {
    console.log(data);
  
    if (data.cod === 200){
      erorrImg.style.cssText= "display: none";
      content.style.cssText= "display: block";
      
      // Appere The State Weather Icon
      allStateIcon.forEach((icon) => {
        if (icon.src.includes(`${data.weather[0].icon}`)){
          icon.style.cssText= "display: block";
        }
        else {
          icon.style.cssText= "display: none";
        }
      })

      // Appere The Temperature And The City
      temperature.innerHTML= `${Math.round(data.main.temp)}°C`;
      cityName.innerHTML= `${data.name}`;

      // Appere Humidity And Wind Speed
      humidityValue.innerHTML= `${data.main.humidity} %`;
      windSpeedValue.innerHTML= `${Math.round(data.wind.speed)} KM/H`;
    }
    else {
      erorrImg.style.cssText= "display: block";
      content.style.cssText= "display: none";
    }
  })
}

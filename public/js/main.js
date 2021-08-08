const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');


const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');



const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value; 
    
     if(cityVal==""){
         city_name.innerText=`plz enter city to be searched`;

     }else{
         try {
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7eadb0e69e8fee3ec40c43254da485cf`;
        const response = await fetch(url);
        const data= await response.json();
        const arrData=[data];

        city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;

        const tempMood = arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        if(tempMood=="Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        if(tempMood=="Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }

             }catch{
            city_name.innerText=`plz enter existing city to be searched`; 
         }

     }
}

submitBtn.addEventListener('click',getInfo);

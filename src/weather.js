import React,{useState} from 'react';



/*const api= {
    key:"963f779953298c04abe2b669ccb83186",
    base:"https://api.openweathermap.org/data/2.5/"
}; 

function Weath(){
    const[query, setquery]=useState();
    const[ weather, setweather]= useState({});
    
    const search = evt =>{
        if(evt.key==="enter"){
            fetch('$(api.base)weather?q=${query}&units=metric&APPID=${api.key}')
        .then(res =>res.json())  
        .then(result =>{
            setweather(result);
            setquery('')
            console.log(result);});
            
        }
         
    }
    const dateBuilder = (dd)=> {
        let months = [ "january", "february", "march", "april", "may", "june", "july", 
        "august", "september", "october", "november", "december"];
    let days = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
    let day= days [dd.getDay()];
    let date= dd.Date();
    let month= months[dd.getMonth()];
    let year= dd.getFullYear();
    return ('$day $date $month $year')
    }

return(
    <div className="Weather">
      <main>
          <div className=" search-box">
              <input type="text" className="searchbar" 
              placeholder="search..."
              onChange={ e=> setquery(e.target.value)} 
                value={query} onKeyPress={search}
            
                />   
          </div>
          <div className="location-bar">
<div className ="location" >Greater Accra, Ghana</div>
<div className="date">{dateBuilder( new Date())}</div>
</div>
<div className="weather-box">
    <div className="temp">
      15°c
    </div>
    <div className="weather">sunny</div>
     </div>
    
          </main>
        </div>
);

}
export default Weath;*/
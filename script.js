async function getWatherForecast(city){
    const respone = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=xanten&appid=4e6038d3bc8665071248d68354c43356');
    const data = await respone.json();
}
import './App.css'

function App () {
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidty: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidty: '45%',
      windSpeed: '10 km/h'
    },
    'London': {
      temperature: '15°C',
      humidty: '70%',
      windSpeed: '20 km/h'
    }

  }
  return (
    <div>
      <input type='text' id='citySearch' placeholder='Search for a city...' />
      <button id='searchButton'>Search</button>
      <div id='weatherData'>
        <div>Temperature: </div>
        <div>Humidity: </div>
        <div>Wind Speed: </div>
        <div>City not found </div>
      </div>
      <div id='previousSearches'>
        Component
      </div>
    </div>
  )
}

export default App

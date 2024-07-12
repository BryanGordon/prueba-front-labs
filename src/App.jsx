import { useState } from 'react'
import './App.css'

function App () {
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h'
    },
    'London': {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h'
    }

  }

  const [search, setSearch] = useState('')
  const [render, setRender] = useState(false)

  function WeatherData ({ city }) {
    return (
      <>
        <div>Temperature: {city.temperature} </div>
        <div>Humidity: {city.humidity}</div>
        <div>Wind Speed: {city.windSpeed}</div>
      </>
    )
  }

  function NoWeather () {
    return (
      <>
        <div>City not found </div>
      </>
    )
  }

  const getWeather = (city) => {
    if (mockWeatherData[`${city}`]) {
      setRender(true)
    } else {
      setRender(false)
    }
  }

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} type='text' id='citySearch' placeholder='Search for a city...' />
      <button onClick={() => getWeather(search)} id='searchButton'>Search</button>
      <div id='weatherData'>
        {
          render
            ? <WeatherData city={mockWeatherData[`${search}`]} />
            : <NoWeather />
        }
      </div>
      <div id='previousSearches'>
        Component
      </div>
    </div>
  )
}

export default App

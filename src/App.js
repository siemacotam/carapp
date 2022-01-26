import { Marker } from "google-maps-react";
import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import cars from './map.json'
import PopUp from "./PopUp";

export default function App() {
    const [markers, setMarkers] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(null)
    const [carsData, setCarsData] = useState(null)
    const [filterOption, setFilterOption] = useState(null)
    const [filteredData, setFilteredData] = useState(null)

    const a = () => {
        let carArray = [...cars.objects]
        for(let i =0; i < 30; i++){
          let newCar ={name: 'car' , batteryLevelPct: 0, location: {latitude: 0, longitude: 0,}, rangeKm: 0, status:'AVAILABLE', platesNumber:'dw12345'}
          let randomLatiNumber = Math.random()*4 - 1
          let randomLongiNumber = Math.random()*4 - 1
          let batteryStatus = Math.floor(Math.random()*100)
          let rangeKmStatus = Math.floor(Math.random()*400)
          let carStatus = (Math.random()>=0.5)? 1 : 0;
          let newCarPlates = Math.floor(Math.random()*99999)
          if(carStatus === 1 ){newCar.status = 'AVAILABLE'} else {newCar.status = 'TAKEN'}
          newCar.rangeKm = rangeKmStatus
          newCar.platesNumber = 'WI'+ newCarPlates
          newCar.batteryLevelPct = batteryStatus
          newCar.location.latitude = cars.objects[0].location.latitude - randomLatiNumber
          newCar.location.longitude = cars.objects[0].location.longitude - randomLongiNumber
          newCar.location.latitude = newCar.location.latitude.toFixed(6)
          newCar.location.longitude = newCar.location.longitude.toFixed(6)
          carArray.push(newCar)
        }
        setCarsData(carArray)
        setFilteredData(carArray)
        setFilterOption("ALL")
        return carArray
    }

    const b = () => {
        switch (filterOption) {
            case 'ALL':
                setFilteredData(carsData)
              break;
            case 'AVAILABLE':
                setFilteredData(carsData.filter(i => i.status === 'AVAILABLE'))
                
              break;
            case 'TAKEN':
                setFilteredData(carsData.filter(i => i.status === 'TAKEN'))
                break;
            case '75':
                setFilteredData(carsData.filter(i => i.batteryLevelPct >75))
                break;
            case '50':
                setFilteredData(carsData.filter(i => i.batteryLevelPct >50))
                    break;
            case '25':
                setFilteredData(carsData.filter(i => i.batteryLevelPct >25))
                    break;
          }
          console.log('fd',filteredData)
    }

    const c = () => {
        console.log('fd w c', filteredData)
        const carStatus = filteredData && filteredData.map(el => {
            const lati = Number(el.location.latitude).toFixed(6)
            const longi = Number(el.location.longitude).toFixed(6)
            return <Marker key={el.platesNumber} position={{ lat: Number(lati), lng: Number(longi) }}   onClick={()=>{
              setIsOpen(true)
              setData(el)
              }} icon={el.status === 'AVAILABLE' ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"} />
          })
          return carStatus
    }

    useEffect(()=>{a()},[])
    useEffect(()=>{b()},[filterOption])
    useEffect(()=>{setMarkers(c())},[filteredData])


  return <div className="appWrap">
      <Header />
      <Main markers={markers} data={carsData} setFilterOption={setFilterOption} filterOption={filterOption} />
      <PopUp 
      open={isOpen} setIsOpen={setIsOpen} data={data} 
      /> 
      <Footer />
  </div>

}
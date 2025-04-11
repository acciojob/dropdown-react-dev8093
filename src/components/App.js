import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { getAllStates, getCities, getLandmarks } from "../data/stateData";



let allStates = getAllStates()

function App() {
	const [currentState, setCurrentState] = useState("Madhya Pradesh");
	const [cityList, setCityList] = useState(()=>getCities("Madhya Pradesh"));
	const [currentCity, setCurrentCity] = useState("Indore");
	const [landmarkList, setLandmarkList] = useState(()=>getLandmarks("Madhya Pradesh", "Indore"));

	


	useEffect(()=>{
		let x =  getCities(currentState)
		setCityList(x)
		// console.log(cityList)
		setCurrentCity(x[0])
		// setLandmarkList(getLandmarks(currentState, x[0]))
	}, [currentState])

	useEffect(()=>{
		setLandmarkList(getLandmarks(currentState, currentCity))
	},[currentCity])
	
	
	return (
	<div id="main">

		<select onChange={(e)=>setCurrentState(e.target.value)}>
			{
				allStates.map(state=>(
					<option key={state} value={state}>{state}</option>
				))
			}
		</select>

		<select onChange={(e)=> setCurrentCity(e.target.value)}>
			{
				cityList.map(city=>(
					<option key={city} value={city}>{city}</option>
				))
			}
		</select>

		<select>
			{
				landmarkList.map(landmark=>(
					<option key={landmark} value={landmark}>{landmark}</option>
				))
			}
		</select>
		
	</div>
	);
}


export default App;

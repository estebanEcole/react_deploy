import styles from "./tracks.module.css";
import {useEffect, useState} from "react";

const Tracks = () => {
	
	const [year, setYear] = useState("2022");
	const [tracksArray, setTracksArray] = useState([])
	const [yearsArray, setYearsArray] = useState([
		{id : "1", year : "2022"},
		{id : "2", year : "2021"},
		{id : "3", year : "2020"},
		{id : "4", year : "2019"},
		{id : "5", year : "2018"},
		{id : "6", year : "2017"},
		{id : "7", year : "2016"},
		{id : "8", year : "2015"},
		{id : "9", year : "2014"},
		{id : "10", year : "2013"},
		{id : "11", year : "2012"},
		{id : "12", year : "2011"},
		{id : "13", year : "2010"},
		{id : "14", year : "2009"},
		{id : "15", year : "2008"},
		{id : "16", year : "2007"},
		{id : "17", year : "2006"},
		{id : "18", year : "2005"},
		{id : "19", year : "2004"},
		{id : "20", year : "2003"},
		{id : "21", year : "2002"},
		{id : "22", year : "2001"},
		{id : "23", year : "2000"},
		{id : "24", year : "1999"},
		{id : "25", year : "1998"},
		{id : "26", year : "1997"},
		{id : "27", year : "1996"},
		{id : "28", year : "1995"},
		{id : "29", year : "1994"},
		{id : "30", year : "1993"},
		{id : "31", year : "1992"},
		{id : "32", year : "1991"},
		{id : "33", year : "1990"},
		{id : "34", year : "1989"},
		{id : "35", year : "1988"},
		{id : "36", year : "1987"},
		{id : "37", year : "1986"},
		{id : "38", year : "1985"},
		{id : "39", year : "1984"},
		{id : "40", year : "1983"},
		{id : "41", year : "1982"},
		{id : "42", year : "1981"},
		{id : "43", year : "1980"},
		{id : "44", year : "1979"},
		{id : "45", year : "1978"},
		{id : "46", year : "1977"},
		{id : "47", year : "1976"},
		{id : "48", year : "1975"},
		{id : "49", year : "1974"},
		{id : "50", year : "1973"},
		{id : "51", year : "1972"},
		{id : "52", year : "1971"},
		{id : "53", year : "1970"},
		{id : "54", year : "1969"},
		{id : "55", year : "1968"},
		{id : "56", year : "1967"},
		{id : "57", year : "1966"},
		{id : "58", year : "1965"},
		{id : "59", year : "1964"},
		{id : "60", year : "1963"},
		{id : "61", year : "1962"},
		{id : "62", year : "1961"},
		{id : "63", year : "1960"},
		{id : "64", year : "1959"},
		{id : "65", year : "1958"},
		{id : "66", year : "1957"},
		{id : "67", year : "1956"},
		{id : "68", year : "1955"},
		{id : "69", year : "1954"},
		{id : "70", year : "1953"},
		{id : "71", year : "1952"},
		{id : "72", year : "1951"},
		{id : "73", year : "1950"}
	])
	
	function getTracks(year) {
		return fetch('https://ergast.com/api/f1/' + year + '/circuits.json')
	}
	
	useEffect( () => {
		const test = async () => {
			const response = await getTracks(year);
			const data = await response.json()
			console.log('data: ', data)
			setTracksArray(data.MRData.CircuitTable.Circuits)
			console.log('tracksArray: ', tracksArray)
		}
		test()
		return () => {};
	}, [year])
	
	function handlerYearChange(e){
		setYear(e.target.value)
	}
	
	return (
		<div className={styles.F1}>
			<div className={styles.interior}>
				<div>
					
					<select onChange={handlerYearChange}>
						<option value="">-- select a year --</option>
						{yearsArray.map((year)=> {
							return <option key={year.id} value={year.year}> {year.year} </option>
						})}
					</select>
					
					<table>
						<tbody>
						<tr>
							<th className={styles.column1}>Nom</th>
							<th className={styles.column2}>Pays</th>
							<th className={styles.column3}>Ville</th>
							<th className={styles.column4}>Information</th>
						</tr>
						
						{tracksArray.map((tracks, index)=> {
							return <tr key={index}>
								<td className={styles.column1}>{tracks.circuitName}</td>
								<td className={styles.column2}>{tracks.Location.country}</td>
								<td className={styles.column3}>{tracks.Location.locality}</td>
								<td className={styles.column4}>
									<a className={styles.biography} href={tracks.url}>Description</a>
								</td>
							</tr>
						}, 1000)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Tracks;
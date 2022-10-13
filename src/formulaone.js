import React, { Suspense, lazy } from 'react';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
	Route,
} from "react-router-dom";
import Pilots from "./F1/pilots";
import Tracks from "./F1/tracks";
import Error from "./F1/error"
import styles from './formulaone.module.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Pilots />,
		errorElement: <Error />
	},
	{
		path: "/Tracks",
		element: <Tracks />,
		errorElement: <Error />
	},
]);

const F1 = () => {
	
	return (
		<div>
			<div className={styles.F1}>
				<div className={styles.divButton}>
					<div className={styles.interiorDivButton}>
						<a className={styles.aButton} href={`/`}>
							<span className={styles.textButton}>Pilots</span>
						</a>
					</div>
					<div className={styles.interiorDivButton}>
						<a className={styles.aButton} href={`/Tracks`}>
							<span className={styles.textButton}>Tracks</span>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.spacer}></div>
			<RouterProvider router={router} />
		</div>
	
	);
}

export default F1;
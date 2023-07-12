// import styles from '../styles/Charts.module.css';
// import Navbar from '../components/navbar/Navbar';
// import { useEffect, useRef } from 'react';
// import Chart, { ChartConfiguration, ChartItem } from 'chart.js/auto';
// import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
// import { getRecentlyPlayed, getTopArtists, getTopSongs } from '../utils/requests/userData';
// import { topArtistsToTreemap } from '../utils/conversions';

// Chart.register(TreemapController, TreemapElement);

// const data = [
//     { category: 'main', value: 1 },
//     { category: 'main', value: 2 },
//     { category: 'main', value: 3 },
//     { category: 'other', value: 4 },
//     { category: 'other', value: 5 },
// ];

// const Charts = () => {
//     const canvas = useRef<HTMLCanvasElement>(null);
//     const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance

//     useEffect(() => {
//         const setUpMap = async () => {
//             if(!canvas.current) return;

//             const spotifyData = await getTopArtists('short_term', 'jmurphy5613')
//             const mapData = topArtistsToTreemap(spotifyData)
//             console.log(mapData)


//             const ctx = canvas.current.getContext('2d') as ChartItem<'treemap'>;

//             function colorFromRaw(ctx: any, border: boolean) {
//                 if (ctx.type !== 'data') {
//                     return 'transparent';
//                 }
//                 const value = ctx.raw.v;
//                 let alpha = value / 9;
//                 const color = '167, 178, 255';
//                 return 'rgba(' + color + ', ' + alpha + ')';
//             }

//             const config: ChartConfiguration = {
//                 type: 'treemap',
//                 data: {
//                     datasets: [
//                         {
//                             label: 'My First dataset',
//                             tree: mapData,
//                             key: 'value',
//                             groups: ['genre'],
//                             borderColor: 'rgba(167, 178, 255)',
//                             // borderWidth: 1,
//                             spacing: -0.5, // Animations look better when overlapping a little
//                             backgroundColor: (ctx: CanvasRenderingContext2D) => colorFromRaw(ctx, true),
//                             labels: {
//                                 display: true,
//                                 font: {
//                                     size: '10rem',
//                                     family: 'Outfit'
//                                 },
//                                 align: 'center',
//                                 color: 'white',
//                                 // formatter(ctx) {
//                                 //     if (ctx.type !== 'data') {
//                                 //       return;
//                                 //     }
//                                 //     return [ctx.raw.v];
//                                 // },
//                             }
//                         },
//                     ],
//                 },
//                 options: {
//                     maintainAspectRatio: false,
//                     plugins: {
//                         legend: {
//                             display: false,
//                         },
//                         tooltip: {
//                             displayColors: false,
//                         },
//                     },
//                 },
//             };

//             if (chartRef.current) {
//                 chartRef.current.destroy();
//             }

//             chartRef.current = new Chart(ctx, config); // Store the chart instance

//             // No need to return a cleanup function here

//             // Clean up the chart instance on component unmount
//             return () => {
//                 if (chartRef.current) {
//                     chartRef.current.destroy();
//                 }
//             };
//         };


//         setUpMap()
//     }, []);

//     return (
//         <>
//             <Navbar />
//             <div className={styles.container}>
//                 <div className={styles['treemap-container']}>
//                     <canvas ref={canvas}></canvas>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Charts;

import styles from '../styles/Charts.module.css'
import Navbar from '../components/navbar/Navbar'
import { useEffect, useRef } from 'react'


import Chart, { ChartItem } from 'chart.js/auto';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';

Chart.register(TreemapController, TreemapElement);

const Charts = () => {

    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvas.current) return
        const ctx = canvas.current.getContext('2d');

        function colorFromRaw(ctx, border) {
            if (ctx.type !== 'data') {
                return 'transparent';
            }
            const value = ctx.raw.v;
            let alpha = (1 + Math.log(value)) / 5;
            const color = '255, 255, 255';
            if (border) {
                alpha += 0.5;
            }
            return 'rgba(' + color + ', ' + alpha + ')'
        }

        const config = {
            type: 'treemap',
            data: {
                datasets: [
                    {
                        label: 'My First dataset',
                        tree: [1, 2, 3, 4, 5],
                        borderColor: (ctx) => colorFromRaw(ctx, true),
                        borderWidth: 1,
                        spacing: -0.5, // Animations look better when overlapping a little
                        backgroundColor: (ctx) => colorFromRaw(ctx, true),
                    }
                ],
            },
        };

        const chart = new Chart(ctx, config);
        return () => chart.destroy();

    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <canvas className={styles.treemap} ref={canvas}></canvas>
            </div>
        </>

    )
}

export default Charts
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/GraphStyles.css'

const WindGraph = () => {
    const [windData, setWindData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            const dummyData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
            setWindData(dummyData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy the previous chart instance
        }

        const ctx = document.getElementById('wind-chart');
        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: windData.length }, (_, i) => `Sample ${i + 1}`),
                datasets: [{
                    label: 'Wind Speed',
                    data: windData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Samples'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Wind Speed (m/s)'
                        },
                        suggestedMin: 0, // Set the minimum value for the Y-axis
                        suggestedMax: Math.max(...windData) + 10, // Set the maximum value for the Y-axis
                        // Adjust the step size for better scaling
                        ticks: {
                            stepSize: 5
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Real-time Wind Detection Graph',
                        font: {
                            size: 18
                        }
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: (context) => `Wind Speed: ${context.raw} m/s`
                        }
                    }
                }
            }
        });

        chartRef.current = newChart;

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy(); // Ensure that the chart is destroyed when the component unmounts
            }
        };
    }, [windData]);

    return (
        <div>
            <canvas id="wind-chart"></canvas>
        </div>
    );
};

export default WindGraph;


import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/GraphStyles.css';

const WindGraph = () => {
    const [windData, setWindData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('Zagreb-Maksimir');
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            let dummyData;

            switch (selectedLocation) {
                case 'Zagreb-Maksimir':
                    dummyData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 36));
                    break;
                case 'Zagreb-Grič':
                    dummyData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 36));
                    break;
                case 'Samobor':
                    dummyData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 36));
                    break;
                // Add more cases for other locations as needed
                default:
                    dummyData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 36));
            }

            setWindData(dummyData);
        };

        fetchData();
    }, [selectedLocation]);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy the previous chart instance
        }

        const ctx = document.getElementById('wind-chart');
        const currentHour = new Date().getHours(); // Get current hour
        const hours = Array.from({ length: 24 }, (_, i) => (currentHour + i) % 24); // Create array of hours in a circle

        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hours.map(hour => hour.toString().padStart(2, '0')), // Convert hours to strings and pad with leading zeros if needed
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
                            text: 'Time (hours)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Wind Speed (km/h)'
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
                            label: (context) => `Wind Speed: ${context.raw} km/h`
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
            <div className="dropdown-container">
                <label htmlFor="location-select">Select Location: </label>
                <select
                    id="location-select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="Zagreb-Maksimir">Zagreb-Maksimir</option>
                    <option value="Zagreb-Grič">Zagreb-Grič</option>
                    <option value="Samobor">Samobor</option>
                    <option value="Lekenik">Lekenik</option>
                    <option value="Puntijarka (Medvednica)">Puntijarka (Medvednica)</option>
                    <option value="Krapina">Krapina</option>
                    <option value="Varaždin">Varaždin</option>
                    <option value="Križevci">Križevci</option>
                    <option value="Bilogora">Bilogora</option>
                    <option value="Daruvar">Daruvar</option>
                    <option value="Bjelovar">Bjelovar</option>
                    <option value="Sisak">Sisak</option>
                    <option value="Gorice (kod Nove Gradiške)">Gorice (kod Nove Gradiške)</option>
                    <option value="Kutjevo">Kutjevo</option>
                    <option value="Slavonski Brod">Slavonski Brod</option>
                    <option value="Valpovo-Tiborjanci">Valpovo-Tiborjanci</option>
                    <option value="Osijek-Čepin">Osijek-Čepin</option>
                    <option value="Bilje">Bilje</option>
                    <option value="Beli Manastir">Beli Manastir</option>
                    <option value="Vinkovci-Novo Selo">Vinkovci-Novo Selo</option>
                    <option value="Ilok">Ilok</option>
                    <option value="Račinovci">Račinovci</option>
                    <option value="Gradište">Gradište</option>
                    <option value="Karlovac">Karlovac</option>
                    <option value="Bosiljevo">Bosiljevo</option>
                    <option value="Ogulin">Ogulin</option>
                    <option value="Plaški">Plaški</option>
                    <option value="Otočac">Otočac</option>
                    <option value="Ličko Lešće">Ličko Lešće</option>
                    <option value="NP Plitvička jezera">NP Plitvička jezera</option>
                    <option value="Gospić">Gospić</option>
                    <option value="Gračac">Gračac</option>
                    <option value="Parg-Čabar">Parg-Čabar</option>
                    <option value="Pazin">Pazin</option>
                    <option value="Čepić">Čepić</option>
                    <option value="Pula-aerodrom">Pula-aerodrom</option>
                    <option value="Porer">Porer</option>
                    <option value="Rovinj">Rovinj</option>
                    <option value="Poreč">Poreč</option>
                    <option value="Opatija">Opatija</option>
                    <option value="Rijeka">Rijeka</option>
                    <option value="Malinska">Malinska</option>
                    <option value="Senj">Senj</option>
                    <option value="Zavižan">Zavižan</option>
                    <option value="Rab">Rab</option>
                    <option value="Mali Lošinj">Mali Lošinj</option>
                    <option value="Silba">Silba</option>
                    <option value="Zadar">Zadar</option>
                    <option value="Veli Rat">Veli Rat</option>
                    <option value="Knin">Knin</option>
                    <option value="Drniš">Drniš</option>
                    <option value="Šibenik">Šibenik</option>
                    <option value="Sinj">Sinj</option>
                    <option value="Split-Marjan">Split-Marjan</option>
                    <option value="Split-aerodrom">Split-aerodrom</option>
                    <option value="Makarska">Makarska</option>
                    <option value="Imotski">Imotski</option>
                    <option value="Hvar">Hvar</option>
                    <option value="Komiža">Komiža</option>
                    <option value="Ploče">Ploče</option>
                    <option value="Dubrovnik">Dubrovnik</option>
                    <option value="Gruda">Gruda</option>
                    <option value="Prevlaka">Prevlaka</option>
                    <option value="Lastovo">Lastovo</option>
                    <option value="Palagruža">Palagruža</option>
                </select>
            </div>
            <canvas id="wind-chart"></canvas>
        </div>
    );
};

export default WindGraph;
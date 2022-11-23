import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';


var classNames = require('classnames');

export default function GenderWeightMortality(props) {

    const [display, setDisplay] = useState(true)

    const data = props.data

    let BW = [[{ gender: "M", bw: '400-600', D: 0, A: 0 }, { gender: "F", bw: '400-600', D: 0, A: 0 }],
    [{ gender: "M", bw: '600-800', D: 0, A: 0 }, { gender: "F", bw: '600-800', D: 0, A: 0 }],
    [{ gender: "M", bw: '800-1000', D: 0, A: 0 }, { gender: "F", bw: '800-1000', D: 0, A: 0 }],
    [{ gender: "M", bw: '1000-1200', D: 0, A: 0 }, { gender: "F", bw: '1000-1200', D: 0, A: 0 }],
    [{ gender: "M", bw: '1200-1400', D: 0, A: 0 }, { gender: "F", bw: '1200-1400', D: 0, A: 0 }],
    [{ gender: "M", bw: '1400-1600', D: 0, A: 0 }, { gender: "F", bw: '1400-1600', D: 0, A: 0 }],
    [{ gender: "M", bw: '1600-1800', D: 0, A: 0 }, { gender: "F", bw: '1600-1800', D: 0, A: 0 }],
    [{ gender: "M", bw: '1800-2000', D: 0, A: 0 }, { gender: "F", bw: '1800-2000', D: 0, A: 0 }],
    [{ gender: "M", bw: '2000-2200', D: 0, A: 0 }, { gender: "F", bw: '2000-2200', D: 0, A: 0 }],
    [{ gender: "M", bw: '2200-2400', D: 0, A: 0 }, { gender: "F", bw: '2200-2400', D: 0, A: 0 }],
    [{ gender: "M", bw: '2400-2700', D: 0, A: 0 }, { gender: "F", bw: '2400-2700', D: 0, A: 0 }]]

    // map BW data
    data.forEach(d => {
        let bw = parseInt(d.birthweight)
        if (bw >= 400 & bw < 600) { // bw range 400-599
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[0][0].D += 1
                } else {
                    BW[0][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[0][1].D += 1
                } else {
                    BW[0][1].A += 1
                }
            }
        }


        if (bw >= 600 & bw < 800) { // bw range 600-799
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[1][0].D += 1
                } else {
                    BW[1][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[1][1].D += 1
                } else {
                    BW[1][1].A += 1
                }
            }
        }

        if (bw >= 800 & bw < 1000) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[2][0].D += 1
                } else {
                    BW[2][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[2][1].D += 1
                } else {
                    BW[2][1].A += 1
                }
            }
        }

        if (bw >= 1000 & bw < 1200) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[3][0].D += 1
                } else {
                    BW[3][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[3][1].D += 1
                } else {
                    BW[3][1].A += 1
                }
            }
        }

        if (bw >= 1200 & bw < 1400) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[4][0].D += 1
                } else {
                    BW[4][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[4][1].D += 1
                } else {
                    BW[4][1].A += 1
                }
            }
        }

        if (bw >= 1400 & bw < 1600) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[5][0].D += 1
                } else {
                    BW[5][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[5][1].D += 1
                } else {
                    BW[5][1].A += 1
                }
            }
        }

        if (bw >= 1600 & bw < 1800) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[6][0].D += 1
                } else {
                    BW[6][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[6][1].D += 1
                } else {
                    BW[6][1].A += 1
                }
            }
        }

        if (bw >= 1800 & bw < 2000) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[7][0].D += 1
                } else {
                    BW[7][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[7][1].D += 1
                } else {
                    BW[7][1].A += 1
                }
            }
        }

        if (bw >= 2000 & bw < 2200) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[8][0].D += 1
                } else {
                    BW[8][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[8][1].D += 1
                } else {
                    BW[8][1].A += 1
                }
            }
        }

        if (bw >= 2200 & bw < 2400) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[9][0].D += 1
                } else {
                    BW[9][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[9][1].D += 1
                } else {
                    BW[9][1].A += 1
                }
            }
        }

        if (bw >= 2400 & bw < 2700) {
            if (d.gender === 'male') { // male
                if (d.death === '1') {
                    BW[10][0].D += 1
                } else {
                    BW[10][0].A += 1
                }
            } else { // female
                if (d.death === '1') {
                    BW[10][1].D += 1
                } else {
                    BW[10][1].A += 1
                }
            }
        }


    })

    let bwMale = []
    let bwFemale = []

    BW.forEach(d => {
        bwMale.push(Math.round((d[0].D / (d[0].D + d[0].A)) * 1000) / 10)
        bwFemale.push(Math.round((d[1].D / (d[1].D + d[1].A)) * 1000) / 10)
    })

    const birthweightRange = [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2700]
    const genderWeightMortalityOptions = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Male', 'Female']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: 'Save',
                }
            },
            itemSize: 10
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: birthweightRange
        },
        yAxis: {
            type: 'value',
            name: '%',
            axisLabel: {
                formatter: "{value} %"
            }
        },
        series: [
            {
                name: 'Male',
                type: 'line',
                data: bwMale
            },
            {
                name: 'Female',
                type: 'line',
                data: bwFemale
            }
        ]
    };

    function showGraph() {
        console.log("child is clicked")
        setDisplay(() => !display)
    }

    return (
        <div>
            <ReactECharts className={classNames(
                display ? "block" : "hidden"
            )} option={genderWeightMortalityOptions} />

            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded-full text-xs"
                    onClick={showGraph}>
                    {display ? 'HIDE' : 'SHOW'}
                </button>
            </div>

        </div>
    )
}
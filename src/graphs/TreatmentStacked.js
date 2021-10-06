import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

var classNames = require('classnames');

export default function TreatmentStacked(props) {

    const [display, setDisplay] = useState(true)

    const data = props.data

    const MAS = []
    data.map(d => {
        MAS.push({ mas: d.MaternalAntenatalSteroid, death: d.death })
    })

    let noMasDeath = 0
    let inMasDeath = 0
    let fullMasDeath = 0
    let noMasAlive = 0
    let inMasAlive = 0
    let fullMasAlive = 0

    MAS.map(d => {
        if (d.mas === 'no treatment' & d.death === '1') {
            noMasDeath += 1
        } else if (d.mas === 'incomplete treatment' & d.death === '1') {
            inMasDeath += 1
        } else if (d.mas === 'complete treatment' & d.death === '1') {
            fullMasDeath += 1
        } else if (d.mas === 'no treatment' & d.death === '0') {
            noMasAlive += 1
        } else if (d.mas === 'incomplete treatment' & d.death === '0') {
            inMasAlive += 1
        } else if (d.mas === 'complete treatment' & d.death === '0') {
            fullMasAlive += 1
        }
    })

    const noMasMortality = Math.round((noMasDeath / (noMasDeath + noMasAlive)) * 1000) / 10
    const inMasMortality = Math.round(inMasDeath / (inMasDeath + inMasAlive) * 1000) / 10
    const fullMasMortality = Math.round((fullMasDeath / (fullMasDeath + fullMasAlive)) * 1000) / 10
    const treatment = ['no', 'in', 'full']
    const treatmentStackedOptions = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {         
                type: 'shadow'        
            }
        },
        legend: {
            data: ['Death', 'Alive'],

            align: "left"
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: 'Save',
                }
            },
            itemSize: 12
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: treatment
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: "%",
                axisLabel: {
                    formatter: "{value} %"
                }
            }
        ],
        series: [

            {
                name: 'Death',
                type: 'bar',
                stack: 'treatment',
                emphasis: {
                    focus: 'series'
                },
                data: [noMasMortality, inMasMortality, fullMasMortality]
            },
            {
                name: 'Alive',
                type: 'bar',
                stack: 'treatment',
                emphasis: {
                    focus: 'series'
                },
                data: [100 - noMasMortality, 100 - inMasMortality, 100 - fullMasMortality]
            },

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
            )} option={treatmentStackedOptions} />

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
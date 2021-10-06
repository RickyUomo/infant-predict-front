import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

var classNames = require('classnames');

export default function TreatmentBar(props) {
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

    const treatment = ['no', 'in', 'full']
    const masDeath = [noMasDeath, inMasDeath, fullMasDeath]
    const masAlive = [noMasAlive, inMasAlive, fullMasAlive]

    const treatmentBarOptions = {

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
            itemSize: 12
        },
        xAxis: {
            type: 'category',
            data: treatment,
            axisPointer: {
                type: 'shadow'
            }
        },
        yAxis: {
            type: 'value',
        },
        legend: {
            data: ['Death', 'Alive']
        },
        series: [
            {
                name: 'Death',
                type: 'bar',
                data: masDeath
            },
            {
                name: 'Alive',
                type: 'bar',
                data: masAlive
            }

        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    function showGraph() {
        console.log("child is clicked")
        setDisplay(() => !display)
    }

    return (
        <div>
            <ReactECharts className={classNames(
                display ? "block" : "hidden"
            )} option={treatmentBarOptions} />

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
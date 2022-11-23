import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

var classNames = require('classnames');

export default function GenderMultipPie(props) {


    const [display, setDisplay] = useState(true)

    const data = props.data

    const pie = { MaleD: 0, MaleA: 0, FemaleD: 0, FemaleA: 0 }

    data.forEach(d => {
        if (d.Multip === 'yes') {
            if (d.gender === 'male') {
                if (d.death === '1') {
                    pie.MaleD += 1
                } else {
                    pie.MaleA += 1
                }
            } else {
                if (d.death === '1') {
                    pie.FemaleD += 1
                } else {
                    pie.FemaleA += 1
                }
            }
        }
    })

    const option = {

        tooltip: {
            trigger: 'item',
            formatter: '{c} ({d}%)'
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    title: 'Save',
                }
            },
            itemSize: 10
        },
        legend: {
            orient: 'vertical',
            left: 'left',

        },
        series: [
            {
                type: 'pie',
                radius: '80%',
                data: [
                    { value: pie.MaleD, name: 'Male Death' },
                    { value: pie.MaleA, name: 'Male Alive' },
                    { value: pie.FemaleD, name: 'Female Death' },
                    { value: pie.FemaleA, name: 'Female Alive' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
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
            )} option={option} />

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

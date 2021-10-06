import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';


var classNames = require('classnames');

export default function GenderGestDeath(props) {

    const [display, setDisplay] = useState(true)

    const data = props.data


    // gest part
    let GEST = [[{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }], //gest === 22 GEST[0]
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }],
    [{ gender: "M", D: 0, A: 0 }, { gender: "F", D: 0, A: 0 }]] // gest === 32 GEST[10]


    // map GEST
    data.forEach(d => {

        if (Math.round(d.gest) === 22 & d.gender === 'male' & d.death === '1') {
            GEST[0][0].D += 1
        } else if (Math.round(d.gest) === 22 & d.gender === 'male' & d.death === '0') {
            GEST[0][0].A += 1
        } else if (Math.round(d.gest) === 22 & d.gender === 'female' & d.death === '1') {
            GEST[0][1].D += 1
        } else if (Math.round(d.gest) === 22 & d.gender === 'female' & d.death === '0') {
            GEST[0][1].A += 1
        }

        if (Math.round(d.gest) === 23 & d.gender === 'male' & d.death === '1') {
            GEST[1][0].D += 1
        } else if (Math.round(d.gest) === 23 & d.gender === 'male' & d.death === '0') {
            GEST[1][0].A += 1
        } else if (Math.round(d.gest) === 23 & d.gender === 'female' & d.death === '1') {
            GEST[1][1].D += 1
        } else if (Math.round(d.gest) === 23 & d.gender === 'female' & d.death === '0') {
            GEST[1][1].A += 1
        }

        if (Math.round(d.gest) === 24 & d.gender === 'male' & d.death === '1') {
            GEST[2][0].D += 1
        } else if (Math.round(d.gest) === 24 & d.gender === 'male' & d.death === '0') {
            GEST[2][0].A += 1
        } else if (Math.round(d.gest) === 24 & d.gender === 'female' & d.death === '1') {
            GEST[2][1].D += 1
        } else if (Math.round(d.gest) === 24 & d.gender === 'female' & d.death === '0') {
            GEST[2][1].A += 1
        }

        if (Math.round(d.gest) === 25 & d.gender === 'male' & d.death === '1') {
            GEST[3][0].D += 1
        } else if (Math.round(d.gest) === 25 & d.gender === 'male' & d.death === '0') {
            GEST[3][0].A += 1
        } else if (Math.round(d.gest) === 25 & d.gender === 'female' & d.death === '1') {
            GEST[3][1].D += 1
        } else if (Math.round(d.gest) === 25 & d.gender === 'female' & d.death === '0') {
            GEST[3][1].A += 1
        }

        if (Math.round(d.gest) === 26 & d.gender === 'male' & d.death === '1') {
            GEST[4][0].D += 1
        } else if (Math.round(d.gest) === 26 & d.gender === 'male' & d.death === '0') {
            GEST[4][0].A += 1
        } else if (Math.round(d.gest) === 26 & d.gender === 'female' & d.death === '1') {
            GEST[4][1].D += 1
        } else if (Math.round(d.gest) === 26 & d.gender === 'female' & d.death === '0') {
            GEST[4][1].A += 1
        }

        if (Math.round(d.gest) === 27 & d.gender === 'male' & d.death === '1') {
            GEST[5][0].D += 1
        } else if (Math.round(d.gest) === 27 & d.gender === 'male' & d.death === '0') {
            GEST[5][0].A += 1
        } else if (Math.round(d.gest) === 27 & d.gender === 'female' & d.death === '1') {
            GEST[5][1].D += 1
        } else if (Math.round(d.gest) === 27 & d.gender === 'female' & d.death === '0') {
            GEST[5][1].A += 1
        }

        if (Math.round(d.gest) === 28 & d.gender === 'male' & d.death === '1') {
            GEST[6][0].D += 1
        } else if (Math.round(d.gest) === 28 & d.gender === 'male' & d.death === '0') {
            GEST[6][0].A += 1
        } else if (Math.round(d.gest) === 28 & d.gender === 'female' & d.death === '1') {
            GEST[6][1].D += 1
        } else if (Math.round(d.gest) === 28 & d.gender === 'female' & d.death === '0') {
            GEST[6][1].A += 1
        }

        if (Math.round(d.gest) === 29 & d.gender === 'male' & d.death === '1') {
            GEST[7][0].D += 1
        } else if (Math.round(d.gest) === 29 & d.gender === 'male' & d.death === '0') {
            GEST[7][0].A += 1
        } else if (Math.round(d.gest) === 29 & d.gender === 'female' & d.death === '1') {
            GEST[7][1].D += 1
        } else if (Math.round(d.gest) === 29 & d.gender === 'female' & d.death === '0') {
            GEST[7][1].A += 1
        }

        if (Math.round(d.gest) === 30 & d.gender === 'male' & d.death === '1') {
            GEST[8][0].D += 1
        } else if (Math.round(d.gest) === 30 & d.gender === 'male' & d.death === '0') {
            GEST[8][0].A += 1
        } else if (Math.round(d.gest) === 30 & d.gender === 'female' & d.death === '1') {
            GEST[8][1].D += 1
        } else if (Math.round(d.gest) === 30 & d.gender === 'female' & d.death === '0') {
            GEST[8][1].A += 1
        }

        if (Math.round(d.gest) === 31 & d.gender === 'male' & d.death === '1') {
            GEST[9][0].D += 1
        } else if (Math.round(d.gest) === 31 & d.gender === 'male' & d.death === '0') {
            GEST[9][0].A += 1
        } else if (Math.round(d.gest) === 31 & d.gender === 'female' & d.death === '1') {
            GEST[9][1].D += 1
        } else if (Math.round(d.gest) === 31 & d.gender === 'female' & d.death === '0') {
            GEST[9][1].A += 1
        }

        if (Math.round(d.gest) === 32 & d.gender === 'male' & d.death === '1') {
            GEST[10][0].D += 1
        } else if (Math.round(d.gest) === 32 & d.gender === 'male' & d.death === '0') {
            GEST[10][0].A += 1
        } else if (Math.round(d.gest) === 32 & d.gender === 'female' & d.death === '1') {
            GEST[10][1].D += 1
        } else if (Math.round(d.gest) === 32 & d.gender === 'female' & d.death === '0') {
            GEST[10][1].A += 1
        }

    })

    let gestMale = []
    let gestFemale = []

    GEST.forEach(d => {
        gestMale.push(Math.round((d[0].D / (d[0].D + d[0].A)) * 1000) / 10)
        gestFemale.push(Math.round((d[1].D / (d[1].D + d[1].A)) * 1000) / 10)
    })

    const gest = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
    const genderGestDeathOptions = {
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
            data: gest
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
                data: gestMale
            },
            {
                name: 'Female',
                type: 'line',
                data: gestFemale
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
            )} option={genderGestDeathOptions} />

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


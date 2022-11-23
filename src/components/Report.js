import React, { useRef } from 'react'
import ReactECharts from 'echarts-for-react';
import { PDFExport } from "@progress/kendo-react-pdf";
import './report.css'



export default function Report(props) {

    const pdfExportComponent = useRef(null)

    const birthweight = props.birthweight
    const gest = props.gest
    const MAS = props.MAS
    const gender = props.gender
    const multip = props.multip
    const level_3 = props.level_3
    const data = props.data
    const treePro = props.treePro
    const fuzzyPro = props.fuzzyPro
    let high = null
    let low = null

    if (treePro > fuzzyPro) {
        high = treePro
        low = fuzzyPro
    } else {
        high = fuzzyPro
        low = treePro
    }

    let cohort = [{ gest1: null, D1: 0, A1: 0 },
    { gest2: null, D2: 0, A2: 0 },
    { gest3: null, D3: 0, A3: 0 }]


    data.forEach(d => {
        if (gest === '22') {

            if (Math.round(parseFloat(d.gest)) === 22 & d.gender === gender & d.death === '1') {
                cohort[0].gest1 = 22
                cohort[0].D1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 22 & d.gender === gender & d.death === '0')) {
                cohort[0].A1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 23 & d.gender === gender & d.death === '1')) {
                cohort[1].gest2 = 23
                cohort[1].D2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 23 & d.gender === gender & d.death === '0')) {
                cohort[1].A2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 24 & d.gender === gender & d.death === '1')) {
                cohort[2].gest3 = 24
                cohort[2].D3 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 24 & d.gender === gender & d.death === '0')) {
                cohort[2].A3 += 1
            }

        } else if (gest === '32') {

            if (Math.round(parseFloat(d.gest)) === 30 & d.gender === gender & d.death === '1') {
                cohort[0].gest1 = 30
                cohort[0].D1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 30 & d.gender === gender & d.death === '0')) {
                cohort[0].A1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 31 & d.gender === gender & d.death === '1')) {
                cohort[1].gest2 = 31
                cohort[1].D2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 31 & d.gender === gender & d.death === '0')) {
                cohort[1].A2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 32 & d.gender === gender & d.death === '1')) {
                cohort[2].gest3 = 32
                cohort[2].D3 += 1
            } else if ((Math.round(parseFloat(d.gest)) === 32 & d.gender === gender & d.death === '0')) {
                cohort[2].A3 += 1
            }

        } else {
            let g1 = Math.round(parseFloat(gest)) - 1
            let g2 = Math.round(parseFloat(gest))
            let g3 = Math.round(parseFloat(gest)) + 1

            if (Math.round(parseFloat(d.gest)) === g1 & d.gender === gender & d.death === '1') {
                cohort[0].gest1 = g1
                cohort[0].D1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === g1 & d.gender === gender & d.death === '0')) {
                cohort[0].A1 += 1
            } else if ((Math.round(parseFloat(d.gest)) === g2 & d.gender === gender & d.death === '1')) {
                cohort[1].gest2 = g2
                cohort[1].D2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === g2 & d.gender === gender & d.death === '0')) {
                cohort[1].A2 += 1
            } else if ((Math.round(parseFloat(d.gest)) === g3 & d.gender === gender & d.death === '1')) {
                cohort[2].gest3 = g3
                cohort[2].D3 += 1
            } else if ((Math.round(parseFloat(d.gest)) === g3 & d.gender === gender & d.death === '0')) {
                cohort[2].A3 += 1
            }

        }

    })

    // console.log(['this is cohort'], cohort)

    const gw1 = cohort[0].gest1
    const gw2 = cohort[1].gest2
    const gw3 = cohort[2].gest3

    const g1Sur = Math.round(cohort[0].A1 / (cohort[0].D1 + cohort[0].A1) * 1000) / 10
    const g2Sur = Math.round(cohort[1].A2 / (cohort[1].D2 + cohort[1].A2) * 1000) / 10
    const g3Sur = Math.round(cohort[2].A3 / (cohort[2].D3 + cohort[2].A3) * 1000) / 10

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['High bound Sur. Prob.', 'Low bound Sur. Prob.', 'similar cohort']
        },
        xAxis: {
            type: 'category',
            name: 'Gest. Week',
            nameLocation: "middle",
            data: [gw1, gw2, gw3],
            axisPointer: {
                type: 'shadow'
            },
            nameTextStyle: {
                lineHeight: 30
            }
        },
        yAxis: {
            name: 'Survival Prob.',
            type: 'value',
            min: 0,
            max: 100,
            axisLabel: {
                formatter: '{value} %'
            }

        },
        series: [
            {
                name: 'High bound Sur. Prob.',
                data: [high, high, high],
                type: 'line',
                color: 'blue'
            },
            {
                name: 'Low bound Sur. Prob.',
                data: [low, low, low],
                type: 'line',
                color: 'red'
            },
            {
                name: 'similar cohort',
                data: [g1Sur, g2Sur, g3Sur],
                type: 'bar'
            }
        ]
    };


    const handleExport = (e) => {
        e.preventDefault();
        pdfExportComponent.current.save();

    }

    return (
        <>
            <PDFExport ref={pdfExportComponent} paperSize="A2">
                <div className="border-2 border-black rounded shadow-2xl p-6 m-4 md:mx-32 lg:mx-48 xl:mx-60">


                    <h1 className="text-center text-3xl pb-2 font-bold">Report</h1>
                    <div className="flex justify-around text-lg pb-4">
                        <div>
                            <p>Ges. Week: {gest}</p>
                            <p>BW: {birthweight}</p>
                            <p>Gender: {gender}</p>
                        </div>
                        <div>
                            <p>MAS: {MAS ? 'yes' : 'no'}</p>
                            <p>Mul. Birth: {multip ? 'yes' : 'no'}</p>
                            <p>Level 3 Hospital: {level_3 ? 'yes' : 'no'}</p>
                        </div>
                    </div>

                    <hr className="border-dashed border-yellow-800" />

                    <div className="pt-6 md:flex md:items-center md:flex-col">
                        <div className="md:w-9/12">
                            <ReactECharts option={option} />
                        </div>

                        <div className="md:w-9/12">
                            <p>
                                <span className="text-lg font-bold">Description:</span><br />
                                The blue line represents the higher bound of survival probability
                                of the individual and the red line represents the lower bound of
                                survival probability of the individual. The two different
                                survival probability lines come from different ML models,
                                Compare to the survival prob. of similar gestational week infants,
                                you can grasp an overview of how's your baby compared to other cohort.
                            </p>
                        </div>

                        <br />
                        <form>
                            <label>Doctor Note:</label><br />
                            <textarea
                                className="border-2 border-black p-4 max-w-full"
                                rows={10}
                                cols={50}
                            />
                            <br />
                            <button
                                className="px-4 py-2 border-2 
                            border-black rounded
                            bg-blue-400 mt-2
                            cursor-pointer hover:bg-blue-600
                            font-bold"
                                onClick={handleExport}
                            >
                                Print
                            </button>
                        </form>

                    </div>

                </div>
            </PDFExport>
        </>
    )
}

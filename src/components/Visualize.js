import React, { useState, useEffect } from 'react';
import { ShimmerThumbnail } from "react-shimmer-effects";
import * as d3 from "d3";
import GenderGestDeath from '../graphs/GenderGestDeath'
import TreatmentBar from '../graphs/TreatmentBar'
import TreatmentStacked from '../graphs/TreatmentStacked'
import GenderWeightMortality from '../graphs/GenderWeightMortality'
import GenderMultipYesPie from '../graphs/GenderMultipYesPie'
import GenderMultipNoPie from '../graphs/GenderMultipNoPie'
import Level3Yes from '../graphs/Level3Yes'
import Level3No from '../graphs/Level3No'

const URL = 'https://gist.githubusercontent.com/RickyUomo/b55072a481d91469bf2700dad27ee313/raw/infants.csv'

function Visualize() {

    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(URL).then(data => {
            setData(data)
        })
    }, [])



    if (!data) { // loading effect
        return (
            <div className="m-10 grid grid-cols-2 gap-8">
                <div>
                    <ShimmerThumbnail rounded />
                </div>
                <div>
                    <ShimmerThumbnail rounded />
                </div>
                <div>
                    <ShimmerThumbnail rounded />
                </div>
                <div>
                    <ShimmerThumbnail rounded />
                </div>
                <div>
                    <ShimmerThumbnail rounded />
                </div>
                <div>
                    <ShimmerThumbnail rounded />
                </div>
            </div>

        )
    }


    return (

        <div className="m-10 grid grid-cols-2 gap-8">
            <div>
                <p className="text-center text-sm">
                    Death/Alive rate of different treatments
                    <br />
                    <span style={{ color: 'red', fontSize: '0.8em' }}>no:no treatment; in:incomplete; full:complete</span>
                </p>
                <TreatmentStacked data={data} />
            </div>

            <div>
                <p className="text-center text-sm">
                    Death/Alive number of 3 treatments
                    <br />
                    <span style={{ color: 'red', fontSize: '0.8em' }}>no:no treatment; in:incomplete; full:complete</span>
                </p>
                <TreatmentBar data={data} />
            </div>


            <div>
                <p className="text-center text-sm">
                    Mortality rate of gestational weeks
                </p>
                <GenderGestDeath data={data} />
            </div>

            <div>
                <p className="text-center text-sm">
                    Mortality rate of birthweight
                </p>
                <GenderWeightMortality data={data} />
            </div>


            <div>
                <p className="text-center text-sm">
                    Death/Alive percentage of having multiple birth
                </p>
                <GenderMultipYesPie data={data} />
            </div>

            <div>
                <p className="text-center text-sm">
                    Death/Alive percentage of not having multiple birth
                </p>
                <GenderMultipNoPie data={data} />
            </div>


            <div>
                <p className="text-center text-sm">
                    Death/Alive percentage in level 3 hospital
                </p>
                <Level3Yes data={data} />
            </div>

            <div>
                <p className="text-center text-sm">
                    Death/Alive percentage not in level 3 hospital
                </p>
                <Level3No data={data} />
            </div>
        </div>
    )

}

export default Visualize
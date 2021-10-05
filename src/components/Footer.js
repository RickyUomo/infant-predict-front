import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="pb-1">
                <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                        <span className="uppercase">About Data</span>
                        <span><a href="https://gist.github.com/RickyUomo/b55072a481d91469bf2700dad27ee313" class="text-blue-700  text-md hover:text-blue-500">GitHub Gist</a></span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="border-t-2 border-gray-300 m-0">
                    <p className="text-sm text-blue-700 font-bold text-center pt-2">
                        © 2021 by Ricky Kuo
                    </p>
                </div>
            </div>
        </div>
    )
}

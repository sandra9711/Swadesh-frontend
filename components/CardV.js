import React, { Component } from 'react'
import Image from 'next/image'

class CardV extends React.Component {
    render() {
        return (
            <div class="max-w-sm rounded-b-xl shadow-lg mx-16 my-10">
                <div class="flex ml-3 items-start ">
                    <button class="absolute z-20 h-6 bg-emerald rounded-xl text-xs text-white  px-3 mt-4">
                        Funded
                    </button>
                </div>
                <Image src={this.props.image} class="rounded-t-xl" />
                <div class="px-6 py-4 bg-white rounded-b-xl -mt-3 h-96">
                    <div class=" text-gray-900 font-bold text-xl mb-2">{this.props.name}</div>
                    <div class="flex">
                        <svg
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.99996 0C4.58596 0.00158807 3.23033 0.564001 2.23048 1.56385C1.23063 2.5637 0.668214 3.91933 0.666626 5.33333C0.666626 7.67333 3.99996 13.35 5.43196 15.6827C5.49164 15.7797 5.57518 15.8598 5.67462 15.9153C5.77405 15.9709 5.88606 16 5.99996 16C6.11403 16.0005 6.22631 15.9715 6.32584 15.9158C6.42538 15.8601 6.50879 15.7795 6.56796 15.682C7.99996 13.3507 11.3333 7.676 11.3333 5.33333C11.3317 3.91933 10.7693 2.5637 9.76944 1.56385C8.76959 0.564001 7.41396 0.00158807 5.99996 0V0ZM5.99996 7.66667C5.53847 7.66667 5.08734 7.52982 4.70363 7.27343C4.31991 7.01704 4.02084 6.65262 3.84424 6.22626C3.66764 5.7999 3.62143 5.33075 3.71146 4.87812C3.80149 4.4255 4.02372 4.00974 4.35004 3.68342C4.67637 3.3571 5.09213 3.13487 5.54475 3.04483C5.99737 2.9548 6.46653 3.00101 6.89289 3.17761C7.31925 3.35422 7.68366 3.65329 7.94005 4.037C8.19644 4.42072 8.33329 4.87184 8.33329 5.33333C8.33329 5.95217 8.08746 6.54566 7.64987 6.98325C7.21229 7.42083 6.6188 7.66667 5.99996 7.66667Z"
                                fill="#0F524B"
                            />
                        </svg>

                        <p class="text-gray-700 text-base ml-2 -mt-1">{this.props.loc}</p>
                    </div>
                    <div class="flex">
                        <div class="shadow h-2 w-80 bg-grey mt-2 rounded-3xl mt-8 sm:ml-2">
                            <div class="bg-emerald h-2 text-xs leading-none rounded-3xl py-1 text-center text-white w-70"></div>
                        </div>
                        <p class="text-xs text-emerald font-bold mt-7 ml-4">100% funded</p>
                    </div>
                    <div class=" justify-around lg:-ml-20 mt-10">
                        <div class="text-sm -mt-4 lg:ml-20">
                            <div class="flex items-start justify-between mt-1">
                                <p> Area</p>
                                <p class="font-bold">{this.props.area} </p>
                            </div>
                            <hr class="border-gray border-opacity-10 text-center text-2xl" />
                            <div class="flex items-start justify-between mt-1">
                                <p> Price </p>
                                <p class="font-bold">{this.props.Price}</p>
                            </div>
                            <hr class="border-gray border-opacity-10 text-center text-2xl" />
                            <div class="flex items-start justify-between mt-1">
                                <p> Yield </p>
                                <p class="font-bold">{this.props.yield}</p>
                            </div>
                            <hr class="border-gray border-opacity-10 text-center h-2 text-2xl" />
                        </div>

                        <div class="text-sm mt-1 lg:ml-20">
                            <div class="flex items-start justify-between -mt-1">
                                <p>Retun Target </p>
                                <p class="font-bold">{this.props.target}</p>
                            </div>
                            <hr class="border-gray border-opacity-10 text-center text-2xl" />
                            <div class="flex items-start justify-between mt-1">
                                <p> Funding Status </p>
                                <p class="font-bold">{this.props.funding}</p>
                            </div>
                            <hr class="border-gray border-opacity-10 text-center text-2xl" />
                        </div>
                    </div>
                    <button class="flex justify-around bg-emerald w-48 h-12 rounded-md ml-14 text-xs text-white p-4 mt-8">
                        View Opportunity
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.875 6.5H12.125"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.875 11.75L12.125 6.5L6.875 1.25"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}
export default CardV

import React, { Component, useState, useEffect } from 'react'
import Image from 'next/image'
import pav from '../images/Pav1.jpg'

class Card extends Component {
    //pav = require('../images/Pav1.jpg')

    render() {
        return (
            <div class="h-80 lg:max-w-full lg:flex w-full">
                <div
                    class="h-48 lg:h-80 w-11/12 lg:w-92 lg:max-w-sm flex-none bg-cover rounded-t-xl lg:rounded-t-none lg:rounded-l-xl text-center overflow-hidden"
                    title="The Pavilion">
                    <div>
                        <button class="absolute z-20 h-6 bg-yellow rounded-xl text-xs text-white -ml-40 px-3 mt-4">
                            Active
                        </button>
                    </div>
                    <Image src={pav} />
                </div>
                <div class="max-w-4xl w-96 w-11/12 bg-white rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl p-4 flex flex-col justify-between leading-normal ">
                    <div class="mb-8 ">
                        <div class="sm:ml-6 text-gray-900 font-bold text-xl mb-2">
                            The Pavilion III
                        </div>
                        <div class="flex sm:ml-6">
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

                            <p class="text-gray-700 text-base sm:ml-2 ml-18 -mt-1">
                                Outer Ring Road, Bangalore
                            </p>
                        </div>
                        <div class="flex">
                            <div class="shadow h-2 w-80 bg-grey mt-2 rounded-3xl mt-8 sm:ml-2">
                                <div class="bg-emerald h-2 text-xs leading-none rounded-3xl py-1 text-center text-white w-48"></div>
                            </div>
                            <p class="text-xs text-emerald font-bold mt-7 ml-4">64% funded</p>
                        </div>
                        <div class="lg:flex justify-around lg:-ml-10 mt-4">
                            <div class="text-sm lg:ml-8">
                                <div class="flex items-start justify-between mt-1">
                                    <p> Area </p>
                                    <p class="font-bold">52,277</p>
                                </div>
                                <hr class="w-60 border-gray border-opacity-10 text-center text-2xl" />
                                <div class="flex items-start justify-between mt-1">
                                    <p> Price psf </p>
                                    <p class="font-bold">$12,338</p>
                                </div>
                                <hr class="w-60 border-gray border-opacity-10 text-center text-2xl" />
                                <div class="flex items-start justify-between mt-1">
                                    <p> Yield </p>
                                    <p class="font-bold">9.14%</p>
                                </div>
                                <hr class="w-60 border-gray border-opacity-10 text-center text-2xl" />
                            </div>

                            <div class="text-sm mt-1">
                                <div class="flex items-start justify-between mt-1">
                                    <p> Return Target </p>
                                    <p class="font-bold">18.1%</p>
                                </div>
                                <hr class="w-60 border-gray border-opacity-10 text-center text-2xl" />
                                <div class="flex items-start justify-between mt-1">
                                    <p> Funding Status </p>
                                    <p class="font-bold">63%</p>
                                </div>
                                <hr class="w-60 border-gray border-opacity-10 text-center text-2xl" />
                            </div>
                        </div>
                    </div>
                    <button class="flex justify-around bg-yellow w-48 h-12 rounded-md ml-14 text-xs text-white p-4 mt-4">
                        Invest Now
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
export default Card

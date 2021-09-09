import React, {Component} from "react"
import "../styles/tailwind_output.css"
import Next_w from "../Files/next_w.png"
import Back_w from "../Files/back_w.png"

/*Image Paths*/
import { PopularPlacesData } from "../Data/PopularPlaces"
import { PopularRestroData } from "../Data/PopularPlaces"

class Popular extends Component{
    render(){

        const PopularPlaces = PopularPlacesData.map((Places)=>{
            return(
                <div class="relative flex-shrink-0 w-full overflow-hidden" >
                    <div class="absolute top-0 w-full h-100 bg-gradient-to-r from-yellow-800 via-yellow-800 to-transparent">
                        <div class="p-10 mt-8 space-y-16">
                            <p class="text-5xl font-extrabold tracking-wider text-gray-50">{Places.name}</p>
                            <p class="w-1/2 text-lg text-gray-300">{Places.desc}</p>
                        </div>

                        <div className="absolute flex space-x-14 left-8 bottom-3">
                            <div class="absolute p-2 transition-all duration-300 bg-black rounded-full cursor-pointer bg-opacity-30  hover:bg-opacity-50">
                                <img src={Back_w} class="w-9 h-9 -ml-1 select-none" />
                            </div>

                            <div class=" p-3 transition-all duration-300 bg-black rounded-full cursor-pointer bg-opacity-30 hover:bg-opacity-50">
                                <p className="text-xl font-extrabold text-gray-50">Explore more</p>
                            </div>
                        </div>
                    </div>
            
                    <img src={Places.img_path} class="float-right object-cover w-1/2 h-100"  />
                </div>
            )
        })
        
        const PopularRestro = PopularRestroData.map((Restro)=>{
            return(
                <div class="relative flex-shrink-0 w-full" >
                    <div class="absolute top-0 w-full h-103 bg-gradient-to-r from-yellow-800 via-yellow-800 to-transparent">
                        <div class="p-10 my-8 space-y-16 ">
                            <p class="text-5xl font-extrabold tracking-wider text-gray-50">{Restro.name}</p>
                            <p class="w-1/2 text-lg text-gray-300">{Restro.desc}</p>
                        </div>

                        <div className="absolute flex space-x-14 left-8 bottom-3">
                            <div class="absolute p-2 transition-all duration-300 bg-black rounded-full cursor-pointer bg-opacity-30  hover:bg-opacity-50">
                                <img src={Back_w} class="w-9 h-9 -ml-1 select-none" />
                            </div>

                            <div class=" p-3 transition-all duration-300 bg-black rounded-full cursor-pointer bg-opacity-30 hover:bg-opacity-50">
                                <p className="text-xl font-extrabold text-gray-50">Explore more</p>
                            </div>
                        </div>
                    </div>
            
                    <img src={Restro.img_path} class="float-right object-cover w-1/2 h-103"  />
                </div>
            )
        })

        return(
            <div class="">

                <div id="next_places" onclick="Slider_plac`es()" class="absolute right-0 z-40 w-16 transition-all duration-300 cursor-pointer bg-gradient-to-r from-transparent to-black h-103">
                    <img src={Next_w} class="w-12 h-12 ml-2 select-none mt-52 " />
                </div>

                <div id="popular-places" class="z-30 flex flex-row">
                    {PopularPlaces}
                </div>

                {/*Popular Restro*/}
                <div id="next_restro" onclick="Slider_restro()" class="absolute right-0 z-40 w-16 transition-all duration-300 cursor-pointer bg-gradient-to-r from-transparent to-black h-103">
                    <img src={Next_w} class="w-12 h-12 ml-2 select-none mt-52 " />
                </div>

                <div id="popular-restro" class="z-30 flex flex-row">
                    {PopularRestro}
                </div>
            </div>

        )
    }
}


export default Popular;

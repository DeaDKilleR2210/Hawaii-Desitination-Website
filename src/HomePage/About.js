import React, {Component} from "react"
import "../styles/tailwind_output.css"
import beach_background from "../Files/Hawaii_beach.jpg"

/*Image Paths*/
import { AboutHawaii } from "../Data/About_scroller-x"


class AboutPage extends Component{
    render(){

        const AbtHawaii = AboutHawaii.map((index)=>{
            return(
                <div className="relative bg-white h-105.5 w-100 cursor-pointer flex-shrink-0 rounded-md overflow-hidden">
                    <img src={index.img_path} className="object-cover w-100 h-80 "/>
                    <p className="mt-2 text-2xl font-extrabold tracking-wider text-center text-gray-900 uppercase ">{index.name}</p>
                    <p className="h-40 p-2 overflow-hidden font-semibold text-gray-600"><span className="text-gray-800">{index.span}</span> {index.desc}</p>
                </div>
            )
        }) 

        return(
            <div>
                <div className="absolute top-0 w-full h-screen bg-black bg-opacity-70">
                    <div className="p-10">
                        <div className="mt-10">
                            <p className="text-6xl font-extrabold text-center text-gray-50">About Hawaii</p>
                        </div>
                    </div>
                    
                    <div class="flex m-10 space-x-8 scroller-x">
                        {AbtHawaii}
                    </div>
                    
                    <div className="p-3 mx-auto mt-20 bg-black bg-opacity-75 cursor-pointer hover:bg-opacity-60 max-w-max backdrop-blur-md backdrop-filter">
                        <p className="text-xl font-semibold tracking-wider text-gray-100 select-none">Explore More</p>
                    </div>
                </div>
                
                <img src={beach_background} className="object-cover w-full h-screen" />
            </div>

        )
    }
}


export default AboutPage;

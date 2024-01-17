import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r
        from-sky-500 to-sky-700 mb-8 " >
            <div className=" mx-auto px-8
             py-12 flex flex-col md:flex-row
             items-center justify-evenly
           ">
                <div className="mb-8 md:mb-0 
                text-center  ">
                    <h1 className="text-4xl 
                    md:text-6xl font-bold mb-4
                     text-white
                    ">Summer Sale </h1>
                    
                    <p className="md:text-xl 
                    text-lg text-white mb-2 ">
                        Enjoy discouts on selected itmes</p>
                    <p className="text-yellow-400 
                    text-2xl md:text-5xl font-bold">
                        GET 50% OFF</p>
                </div>
                <div className="w-1/3 relative
                 aspect-video">
                    <Image
                    src=""
                    alt="banner image"  
                    fill
                    className="object-contain"
                    />
                 </div>
            </div>

        </div>
     );
}
 
export default HomeBanner;
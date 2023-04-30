import fourZeroFourImage from "./404_img.png";

export default function FourZeroFour({ options }) {
    const {buttonText, buttonLink, gradient} = options;
    return (
        <div className="flex items-center justify-center">  
            <div className="flex flex-col md:flex-row md:gap-35 gap-20 max-auto">
                <div className="flex-initial ">
                    <img className="lg:w-full md:w-[480] md:h-[298] w-[340] h-[211]" src={fourZeroFourImage}></img>
                </div>
                <div className="flex-initial">
                    <p className="font-main flex-auto text-6xl md:text-8xl dark:text-white text-black">404</p>
                    <p className="font-main md:text-3xl text-2xl py-4 leading-tight dark:text-white text-black">Page not found</p>
                    <button className={`w-[200px] h-[50px] rounded-[50px] mt-5 bg-gradient-to-r ${gradient}`}>
                        <a href={buttonLink} className = "font-main dark:text-white text-black">BACK TO HOMEPAGE</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
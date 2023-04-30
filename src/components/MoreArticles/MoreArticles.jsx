export default function MoreArticles({ options }) {
    const {gradient, text1, imgLink1, buttonLink1, buttonText1, buttonText2, buttonLink2, text2, author,
        imgLink2, buttonLink3, buttonLink4, text3, author2, buttonText3, buttonText4} = options;

    return (
        <div>
            <div className="flex md:justify-center">
                <div className={`md:text-center mb-4 md:mb-8 text-[32px] md:text-[56px] font-bold font-main text-transparent 
                    bg-clip-text bg-gradient-to-r ${gradient} py-4 w-max`}>{text1}</div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">   
                <div className="flex-initial justfy-center">
                    <div className="w-[340px] h-[462px] md:w-[408px] md:h-[547px] lg:w-[500px] lg:h-[581px]">
                        <img src={imgLink1} className="w-[300px] h-[192px] md:w-[361px] 
                             md:h-[231.19px] lg:w-[436px] lg:h-[280px] mb-4" alt="ArticleImage"></img>
                        <div className="mb-6">
                            <a href={buttonLink1}>   
                                <button className="w-[79px] h-[40px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={buttonLink1}>
                                    {buttonText1}
                                </button>
                            </a>
                            <a href={buttonLink2}>   
                                <button className="w-[120px] h-[40px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={buttonLink2}>
                                    {buttonText2}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[78px] md:w-[362px] md:h-[80px] lg:w-[360px] lg:h-[84px]"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-10 mb-4">{text2}</div>
                            <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author}</div>
                        </div>
                    </div>
                </div>
                <div className="flex-initial">
                    <div className="w-[340px] h-[462px] md:w-[408px] md:h-[547px] lg:w-[500px] lg:h-[581px]">
                        <img src={imgLink2} className="w-[300px] h-[192px] md:w-[361px] 
                             md:h-[231.19px] lg:w-[436px] lg:h-[280px] mb-4" alt="ArticleImage"></img>
                        <div className="mb-6">
                            <a href={buttonLink3}>    
                                <button className="w-[79px] h-[40px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={buttonLink3}>
                                    {buttonText3}
                                </button>
                            </a>
                            <a href={buttonLink4}>
                                <button className="w-[120px] h-[40px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={buttonLink4}>
                                    {buttonText4}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[78px] md:w-[362px] md:h-[80px] lg:w-[360px] lg:h-[84px]"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-10 mb-4">{text3}</div>
                            <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author2}</div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
} 


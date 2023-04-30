export default function HomeHeroSection2({ options }){
    let { primaryTitle, secondaryTitle, description, buttons, photo, gradient } = options;

    function Button({index, button}){
        const {text, link} = button;
        return (
            <button className={`max-w-[340px] md:max-w-[821px] lg:max-w-[640px] w-max
                                rounded-[50px] px-[40px] py-[20px]
                                break-words font-semibold
                                font-secondary leading-[22px] text-[18px] 
                                ${(index == 0 ? `text-white dark:text-black bg-black dark:bg-white` : `text-black dark:text-white bg-transparent border-2`)}`}>
                <a href={link}> {text} </a>
            </button>
        )
    }
    
    return (
        <div className="w-[340px] md:w-[864px] lg:w-[960px] m-[50px]
                        overflow-x-clip mx-auto relative">
            <div className="dark:text-white flex flex-col md:items-center
                            text-left md:text-center
                            gap-[32px]">
                <div className= "self-center">
                    <img src={photo} className="object-cover rounded-full h-[180px] md:h-[240px] w-[180px] md:w-[240px]"/>
                </div>
                <div className={`font-main text-transparent bg-clip-text bg-gradient-to-r ${gradient}
                                leading-[60px] md:leading-[80px] lg:leading-[90px]
                                text-[48px] md:text-[64px] lg:text-[72px]`}>
                    <span>{primaryTitle} </span>
                    <span className="text-black dark:text-white">{secondaryTitle}</span>
                </div>
                <div className="text-black dark:text-white font-secondary leading-[30px]
                                text-[16px] md:text-[18px]
                                leading-[24px] md:leading-[30px]
                                w-[340px] md:w-[674px]">
                    {description}
                </div>
                <div className="flex flex-wrap flex-col md:flex-row gap-[16px]">
                    {buttons.map((button, index) => {
                        return (
                            <Button index={index} key={index} button={button}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

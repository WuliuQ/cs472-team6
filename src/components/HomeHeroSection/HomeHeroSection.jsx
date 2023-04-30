export default function HomeHeroSection({ options }){
    let { primaryTitle, secondaryTitle, description, buttons, photo, gradient } = options;

    function Button({index, button}){
        const {text, link} = button;
        return (
            <button className={`max-w-[340px] md:max-w-[821px] lg:max-w-[640px] w-max
                                rounded-[50px] px-[40px] py-[20px]
                                text-black dark:text-white break-words font-semibold
                                font-secondary leading-[22px] text-[18px]
                                ${(index == 0 ? `bg-gradient-to-r ${gradient}` : `bg-transparent border-2`)}`}>
                <a href={link}> {text} </a>
            </button>
        )
    }
    
    return (
        <div className="flex flex-col lg:flex-row 
                        gap-[48px] md:[56px]
                        w-[340px] md:w-[864px] lg:w-[1200px] m-[50px]
                        overflow-x-clip mx-auto relative">
            <div className="dark:text-white flex flex-col
                            w-[340px] md:w-[821px] lg:w-[640px]
                            gap-[32px] md:gap-[40px]">
                <div className={`font-main text-transparent bg-clip-text bg-gradient-to-r ${gradient}
                                leading-[60px] md:leading-[80px] lg:leading-[90px]
                                text-[48px] md:text-[64px] lg:text-[72px]
                                w-[340px] md:w-[821px] lg:w-[640px]`}>
                    <span>{primaryTitle} </span>
                    <span className="text-black dark:text-white">{secondaryTitle}</span>
                </div>
                <div className="text-black dark:text-white font-secondary leading-[30px]
                                text-[16px] md:text-[18px]
                                w-[340px] md:w-[821px] lg:w-[640px]">
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
            <div className= "w-[340px] md:w-[640px] lg:w-[591px]">
                    <img src={photo}/>
            </div>
        </div>
    )
}

export default function Skills({ options }){
    const { title, noOfSkills, skillsList } = options;

    return (
        <div className="w-[338.6px] md:w-[864px] lg:w-[1200px] m-[50px] overflow-x-clip mx-auto relative">
            <div className="mb-5 font-main text-[32px] md:text-[56px] lg:text-[64px] text-black dark:text-white">{title}</div>
            <div className="flex flex-wrap gap-[24px] md:gap-[25px] justify-center">
                {skillsList.slice(0,noOfSkills).map((skill, index) => {
                    return (
                        <SkillBox key={index} skill={skill}/>
                    )
                })}
            </div>
        </div>
    )
}

function SkillBox({skill}){
    const {name, image} = skill;
    return (
        <div className="bg-[#F0F2F5] dark:bg-[#1C1C22] flex
                        w-[157.3px] h-[169.82px]
                        md:w-[220px] md:h-[244px]">
            <div className="m-auto h-[125.28px] md:h-[180px]">
                <div className= "h-[50%] flex justify-center">
                    <img src={image} alt=""/>
                </div>
                <div className="h-[22.27px] md:[32px]"></div>
                <div className="">
                    <p className="text-[22.27px] md:text-[32px] leading-[28px] md:leading-[48px] w-[157.3px] md:w-[220px] break-words font-main text-center text-black dark:text-white">{name}</p>
                </div>
            </div>
        </div>
    )
}

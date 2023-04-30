import { Gradients } from "../../utils/utils";
import logo1 from "./Logos/Logo1.svg"

export default function Companies({options}){
    const {gradient, noOfLogos, logoList} = options;
    //const union = Array.from({length: noOfLogos}, () => <Company url={"src/components/Companies/Logos/Logo1.svg"}/>)
    return(
        <div className="lg:w-[1028px] lg:text-center m-3 lg:m-auto">
            <div className="w-[70%] md:w-[65%] lg:w-full">
            <h2 className="text-main font-bold text-[32px] md:text-[64px] mt-11 mb-11 dark:text-[#F0F2F5]"><span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>Companies</span> I've Worked With</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-7 content-center">
            {logoList.slice(0,noOfLogos).map((company, index) => {
                    //let indexNo = index;
                    return(
                        <Company key = {index} index = {index} company={company}/>
                    )
                })}
            </div>
        </div>
    );
}

function Company({company, index}){
    const {url, darkUrl} = company;

    return(
        <picture>
            <source srcset={`/src/components/Companies/Logos/DarkLogo${index + 1}.svg`} media="(prefers-color-scheme:dark)"/>
            <img src={url} className="float-left"/>
        </picture>
    );
}
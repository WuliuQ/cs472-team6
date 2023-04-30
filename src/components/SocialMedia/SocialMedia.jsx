// import React, {useState} from "React"
export default function Sm({options}) {
    let {title, body, image, gradient, FbLink, LiLink, TwLink, InLink, DrLink, BhLink} = options;

    return (

        <div className={`static mx-auto my-10 w-[340px] h-[640px] lg:w-[1062px] lg:h-[720px] lg:flex md:w-[864px] md:h-[640px]  lg:mt-[100px]
                         text-black bg-white dark:bg-black dark:text-white`}>
            <div className={`container mx-auto justify-center`}>
                
                <img className="w-[340px] h-[340px] lg:h-[720px] lg:w-[720px] md:w-[640px] md:h-[640px] "src={image}>
                </img>   
                <div className="relative -right-6 sm:-top-16 md:-top-3/4 md:-right-1/2 lg:-top-3/4">
                    <div className="text-2xl md:text-7xl bg-black text-white dark:bg-white dark:text-black 
                                    w-[292px] h-[270px] md:w-[480px] md:h-[301px]">
                        <div className={`mx-10 pt-12 pb-6 text-3x1 whitespace-nowrap font-main text-transparent bg-clip-text text-[40px] w-full bg-gradient-to-r ${gradient}`}>
                            {title}
                        </div>
                        <div className="mx-10  text-[18px] float-none">
                            {body}
                        </div>

                        <hr class="h-px my-3 md:my-10 mx-10 border-1 bg-white dark:bg-black"></hr>

                        <div className="mx-10 grid grid-flow-col-dense">
                            <a href={FbLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/facebook.png?raw=true"></img>
                            </a>
                            <a href={LiLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/linkedIn.png?raw=true"></img>
                            </a>
                            <a href={TwLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/twitter.png?raw=true"></img>
                            </a>
                            <a href={InLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/instagram.png?raw=true"></img>
                            </a>
                            <a href={DrLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/dribble.png?raw=true"></img>
                            </a>
                            <a href={BhLink}>
                                <img className={`h-[20px] w-[20px]`} src="https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/behance.png?raw=true"></img>
                            </a>
                        </div>
                    </div> 
                </div>    
            </div>
        </div>
    )
}



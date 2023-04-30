
export default function BlogPage({options}) {
    const {header, paragraph, image,} = options;
    const valueArray = paragraph.split(String.fromCharCode(10));
    return (
        <div className={`flex bg-white text-black dark:bg-black dark:text-white py-6 md:px-[80px] lg:max-w-[1036px] md:max-w-[864px] max-w-[340px] w-full mx-auto item-center`}>
        <div className= "font-normal w-full">
            <h2 className='mb-4 font-main text-3xl leading-10'>{header}</h2> 
            {image && (<img src={image} className="w-full aspect-w-1 aspect-h-1" alt="blogpicture"/>)}
            <div className="font-inter font-normal
            sm:text-sm sm:leading-relaxed 
            md:text-lg md:leading-6
            lg:text-lg lg:leading-4">{valueArray.map((value, index) => (
            <p key={index} className="my-paragraph mt-8">{value}</p>
            ))}</div>
        </div>
        </div>
      );
}


export default function ServicesSection({ options }){
    const { header, services } = options;
    return (
        <section className="p-10 max-w-[1200px] mx-auto my-[130px]">
            <h2 className="font-main text-[64px] leading-tight font-bold dark:text-white">{header}</h2>
            {services.map((service, index) => <Service key={index} service={service} />)}
        </section>
    )
}

function Service({service}) {
    const { name, gradient, picture, url } = service;
    return (
        <a href={url.trim() ? url : '#0'} className={`group appearance-none block relative border-y-2 border-y-black border-collapse -mb-0.5 py-5 px-3 dark:border-y-white hover:bg-gradient-to-r ${gradient} cursor-pointer`}>
            <p className="font-main font-bold text-[56px] leading-tight dark:text-white">{name}</p>
            {picture ? <img src={picture} className="h-[300px] w-[240px] absolute object-cover rounded-3xl hidden z-10 top-1/2 -translate-y-1/2 right-1/4 lg:group-hover:block"/> : null}
            <svg className="absolute hidden md:block top-1/2 -translate-y-1/2 right-3" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="dark:stroke-white" d="M2 54.3433L54 2.34326M54 2.34326V50.3814M54 2.34326H5.46667" stroke="#161513" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    )
}
import GradientSelect from "../GradientSelect/GradientSelect.jsx";

export default function CompaniesOptions({options, updateComponent}){
    const {gradient, noOfLogos, logoList} = options;

    function handleChange(event){
        updateComponent({[event.target.name]: event.target.value});
    }

    function handleLogoChange(index, event){
        let newLogos = [...logoList];
        newLogos[index] = {...newLogos[index], [event.target.name]: event.target.value};

        updateComponent({logoList: newLogos});
    }

    return(
        <div>
        <label className="block">Number of Companies</label>
        <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfLogos" value={noOfLogos} min="1" max="12" onChange={(handleChange)}/>
        <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange}/>
        {logoList.slice(0,noOfLogos).map((company, index) => {
                    return(
                        <CompanyOptions key={index} index={index} company={company} handleLogoChange={handleLogoChange}/>
                    )
                })}
        </div>
    );
}

function CompanyOptions({company, index, handleLogoChange}){
    const {url, darkUrl} = company;
return(
    <div>
        <label className="block">Logo {index + 1} URL</label>
        <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="url" name={`url`} value={url} onChange={event => handleLogoChange(index, event)}></input>
    </div>
);
}
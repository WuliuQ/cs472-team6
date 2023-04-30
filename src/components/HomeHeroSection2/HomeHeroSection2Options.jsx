import { Gradients } from "../../utils/utils";

export default function HomeHeroSection2Options({options, updateComponent}) 
{
    let { primaryTitle, secondaryTitle, description, buttons, photo, gradient } = options;

    function handleChange(e){
        updateComponent({ [e.target.name]: e.target.value });
    }

    function handleButtonChange(index, e){
        let newButtons = [...buttons];
        newButtons[index] = {...newButtons[index], [e.target.name]: e.target.value};

        updateComponent({ buttons: newButtons });
    }

    function handleImageChange(e){
        if(e.target.files.length > 0){
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                updateComponent({ [e.target.name]: reader.result });
            };
        }
    }

    return (
        <div className="px-5 pb-3">
            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 mb-3 translate-x-1 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Primary Title:</label>
            <input 
                className={`block mb-3 p-2 rounded-lg bg-gray-200`} 
                type="text" 
                name="primaryTitle" 
                value={primaryTitle} 
                onChange={(handleChange)} 
            />
            <label className="block">Secondary Title:</label>
            <input 
                className={`block mb-3 p-2 rounded-lg bg-gray-200`} 
                type="text" 
                name="secondaryTitle" 
                value={secondaryTitle} 
                onChange={(handleChange)} 
            />
            <label className="block">Description:</label>
            <textarea
                className="border border-gray-400 p-2 mb-2 rounded-lg w-full"
                rows={4}
                placeholder="Enter your text here..."
                name = "description"
                value = {description}
                onChange={(handleChange)}
            />
            {buttons.map((button, index) => <ButtonOptions key={index} index={index} button={button} handleButtonChange={handleButtonChange}/>)}
            <label className="block mb-2" htmlFor="file_input">Upload Image:</label>
            <input 
                className="block w-full text-sm text-black cursor-pointer" 
                type="file"
                name="photo"
                accept="image/png, image/jpeg, image/svg+xml"
                onChange={(handleImageChange)}
            />
            <p className="mt-2 ml-1 text-xs" id="file_input_help">PNG, JPG, or SVG.</p>
        </div>
        
    );
}

function ButtonOptions({index, button, handleButtonChange}){
    const {text, link} = button;
    return(
        <details className="bg-white w-fit rounded-lg">
            <summary className="pl-1 mb-3 cursor-pointer">{(index == 0 ? "Primary" : "Secondary")} Button</summary>
            <div className="pl-5">
                <label className="block">Text:</label>
                <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text" value={text} onChange={e => handleButtonChange(index, e)} />
                <label className="block">Link:</label>
                <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="link" value={link} onChange={e => handleButtonChange(index, e)} />
            </div>
        </details>
    )
}
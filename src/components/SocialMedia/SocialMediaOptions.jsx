// import { useState } from "react";
import { Gradients } from "../../utils/utils";

export default function SmOptions({options, updateComponent}){
    let {title, body, image, gradient, FbLink, LiLink, TwLink, InLink, DrLink, BhLink} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }
    // const [checked, setChecked] = React.useState(false);
    // const handleSChange = () =>{
    //     setChecked(!checked);
    // }

    // const Checkbox = () =>{
    //     const [isChecked, setIsChecked] = useState(false);
    // }


    
    return (
        <div className='p-3'>

            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="title" value={title} onChange={(handleChange)} />
            <label className="block">Title Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Body:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="body" value={body} onChange={(handleChange)} />
            
            {/* <div className="checkbox-wrapper">
                <label>
                    <input type="checkbox"
                    // checked={isChecked}
                    //  onChange={handleSChange}
                    />
                Links?
                </label>
            </div> */}
            
            <details>
                <summary>links</summary>
                <label className="block">Image Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={(handleChange)} />

                <label className="block">Facebook Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="FbLink" value={FbLink} onChange={(handleChange)} />

                <label className="block">Linkedin Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="LiLink" value={LiLink} onChange={(handleChange)} />

                <label className="block">Twitter Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="TwLink" value={TwLink} onChange={(handleChange)} />

                <label className="block">Instagram Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="InLink" value={InLink} onChange={(handleChange)} />

                <label className="block">Dribble Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="DrLink" value={DrLink} onChange={(handleChange)} />

                <label className="block">Behance Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="BhLink" value={BhLink} onChange={(handleChange)} />
            </details>
        </div>
    )
}
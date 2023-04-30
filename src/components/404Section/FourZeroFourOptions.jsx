import { Gradients } from "../../utils/utils";

export default function FourZeroFourOptions({options, updateComponent}) {
    let {buttonLink, gradient} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className="p-3">
            <label className="block">Gradient:</label>
            <select value={gradient} onChange={(handleChange)} name="gradient"  className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink" value={buttonLink} onChange={(handleChange)} />
        </div>
    )
}
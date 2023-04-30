import { Gradients } from "../../utils/utils";

export default function MoreArticlesOptions({options, updateComponent}) {
    let {text1, gradient, imgLink1, buttonLink1, buttonText1, buttonText2, buttonLink2, text2, author,
        imgLink2, buttonLink3, buttonLink4, text3, author2, buttonText3, buttonText4} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className="pl-3 pb-3">
            <label className="block font-bold">Gradient:</label>
            <select value={gradient} onChange={(handleChange)} name="gradient"  className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block font-bold">Theme:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text1" value={text1} onChange={(handleChange)}/>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Left\Top Article</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="imgLink1" value={imgLink1} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText1" value={buttonText1} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink1" value={buttonLink1} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText2" value={buttonText2} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink2" value={buttonLink2} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text2" value={text2} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author" value={author} onChange={(handleChange)} />
                    </div>    
            </details>
            
            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Right\Bottom Article</summary>
                    <div className="pl-6">     
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="imgLink2" value={imgLink2} onChange={(handleChange)} />
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText3" value={buttonText3} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink3" value={buttonLink3} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText4" value={buttonText4} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink4" value={buttonLink4} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text3" value={text3} onChange={(handleChange)} />
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author2" value={author2} onChange={(handleChange)} />
                    </div>    
            </details>
        </div>
    )
}
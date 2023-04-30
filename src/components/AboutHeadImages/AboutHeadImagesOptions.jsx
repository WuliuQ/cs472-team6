export default function AboutHeadImagesOptions({options, updateComponent}) {
    let {image1, image2, image3, image4} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
            <label className="block">Image 1 Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image1" value={image1} onChange={(handleChange)} />
            
            <label className="block">Image 2 Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image2" value={image2} onChange={(handleChange)} />

            <label className="block">Image 3 Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image3" value={image3} onChange={(handleChange)} />

            <label className="block">Image 4 Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image4" value={image4} onChange={(handleChange)} />
        </div>
    )
}
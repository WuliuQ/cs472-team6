export default function BlogPageOptions({ options, updateComponent }) {
    let {header, paragraph, image} = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">Header:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="header" value={header} onChange={(handleChange)} />
        <label className="block">Paragraph:</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          rows={4}
          placeholder="Enter your text here..."
          name = "paragraph"
          value = {paragraph}
          onChange={(handleChange)}
        />
        <label className="block">Image Url:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image" value={image} onChange={(handleChange)} />
      </div>
    )
  }
export default function SkillsOptions({options, updateComponent}) 
{
    let { title, noOfSkills, skillsList } = options;

    function handleChange(e){
        updateComponent({ [e.target.name]: e.target.value });
    }

    function handleNameChange(index, e){
        let newSkills = [...skillsList];
        newSkills[index] = {...newSkills[index], [e.target.name]: e.target.value};

        updateComponent({ skillsList: newSkills });
    }

    function handleImageChange(index, e){
        if(e.target.files.length > 0){
            let newSkills = [...skillsList];
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                newSkills[index] = {...newSkills[index], [e.target.name]: reader.result};
                updateComponent({ skillsList: newSkills });
            };
        }
    }

    return (
        <div className="px-5 pb-3">
            <label className="block">Title:</label>
            <input 
                className={`block mb-3 p-2 rounded-lg bg-gray-200`} 
                type="text" 
                name="title" 
                value={title} 
                onChange={(handleChange)} 
            />
            <details className="bg-white mx-1 rounded-lg" open>
            <summary className="mb-2 cursor-pointer"> Skills List </summary>
            <div className="px-2">
                    <label className="block">Number of Skills (max. 5)</label>
                    <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="noOfSkills" value={noOfSkills} min="1" max="5" onChange={(handleChange)}/>       
                    {skillsList.slice(0,noOfSkills).map((skill, index) => <SkillOptions key={index} index={index} skill={skill} handleNameChange={handleNameChange} handleImageChange={handleImageChange}/>)}
                </div>
            </details>
        
        </div>
        
    );
}

function SkillOptions({index, skill, handleNameChange, handleImageChange}){
    const {name, files, image} = skill;
    return(
        <div className="flex flex-col flex-1">
            <details className="bg-white mt-3 rounded-lg">
                <summary className="mb-2 cursor-pointer"> Skill {index+1}: {name}</summary>
                    <div className="px-2">
                        <label className="block">Name:</label>
                        <input 
                            className={`block mb-3 p-2 rounded-lg bg-gray-200 `} 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={e => handleNameChange(index, e)}
                        />
                        <label className="block mb-2" htmlFor="file_input">Upload Image:</label>
                        <input 
                            className="block w-full text-sm text-black cursor-pointer" 
                            type="file"
                            name="image"
                            accept="image/png, image/jpeg, image/svg+xml"
                            onChange={e => handleImageChange(index, e)}
                        />
                        <p className="mt-2 ml-1 text-xs" id="file_input_help">PNG, JPG, or SVG.</p>
                    </div>
            </details>
        </div>
    )
}

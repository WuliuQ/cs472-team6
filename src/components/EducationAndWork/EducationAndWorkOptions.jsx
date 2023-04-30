import { Gradients } from "../../utils/utils";
export default function EducationWorkExperienceOptions({
  options,
  updateComponent,
}) {
  let { schoolCount, jobCount, schoolList, jobList, gradient } = options;

  function handleChange(e) {
    updateComponent({ [e.target.name]: e.target.value });
  }

  function handleSchoolOrJobChange(isSchool, index, event){
    let newList = (isSchool ? [...schoolList] : [...jobList]);
    newList[index] = {...newList[index], [event.target.name]: event.target.value};
      
    (isSchool ? updateComponent({schoolList: newList}) : updateComponent({jobList: newList}))
  }

  return (
    <div className="pl-3 pb-3">
      <details className="bg-white w-fit rounded-lg">
        <summary className="pl-1 mb-2 cursor-pointer">Education</summary>
          <div className="pl-5">
            <label className="block">Number of Schools (max: 3)</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="schoolCount" value={schoolCount} min="1" max="3" onChange={(handleChange)}/>
            {schoolList.slice(0,schoolCount).map((school, index) => {
                    return(
                        <SchoolOrJobOptions key={index} schoolOrJob={school} isSchool={true} index={index} handleSchoolOrJobChange={handleSchoolOrJobChange}/>
                    )
                })}
          </div>
      </details>
      <details className="bg-white w-fit rounded-lg">
        <summary className="pl-1 mb-2 cursor-pointer">Work Experience</summary>
          <div className="pl-5">
            <label className="block">Number of Jobs (max: 3)</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="jobCount" value={jobCount} min="1" max="3" onChange={(handleChange)}/>
            {jobList.slice(0,jobCount).map((job, index) => {
                    return(
                      <SchoolOrJobOptions key={index} schoolOrJob={job} isSchool={false} index={index} handleSchoolOrJobChange={handleSchoolOrJobChange}/>
                    )
                })}
          </div>
      </details>
      <label className="block">Gradient:</label>
      <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
      </select>
    </div>
  );
}

function SchoolOrJobOptions({schoolOrJob, isSchool, index, handleSchoolOrJobChange}){
  const {primary, secondary, date} = schoolOrJob;
  return(
    <div>
      <details className="bg-white w-fit rounded-lg">
        <summary className="pl-1 mb-2 cursor-pointer"> {isSchool ? "School" : "Job"} {index + 1}</summary>
        <div className="pl-5">
            <label className="block">{isSchool ? "Name:" : "Company:"}</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="primary"
              value={primary}
              onChange={event => handleSchoolOrJobChange(isSchool, index, event)}
            />
            <label className="block">{isSchool ? "Degree:" : "Title:"}</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="secondary"
              value={secondary}
              onChange={event => handleSchoolOrJobChange(isSchool, index, event)}
            />
            <label className="block">Date:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="date"
              value={date}
              onChange={event => handleSchoolOrJobChange(isSchool, index, event)}
            />
        </div>
      </details>
    </div>
  );
}

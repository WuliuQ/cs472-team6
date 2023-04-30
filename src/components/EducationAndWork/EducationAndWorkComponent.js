import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import EducationWorkExperience from "./EducationAndWork";
import EducationWorkExperienceOptions from "./EducationAndWorkOptions";
import EducationWorkExperiencePreview from "./EducationAndWorkDark.png";

export const EducationAndWorkComponent = new Component(
    'Education and Work',
    EducationWorkExperience,
    EducationWorkExperienceOptions,
    EducationWorkExperiencePreview,
    {
        schoolCount: 3,
        jobCount: 3,
        schoolList: [
            {primary: "School 1", secondary: "Degree", date: "Date"},
            {primary: "School 2", secondary: "Degree", date: "Date"},
            {primary: "School 3", secondary: "Degree", date: "Date"},
        ],
        jobList: [
            {primary: "Job 1", secondary: "Title", date: "Date"},
            {primary: "Job 2", secondary: "Title", date: "Date"},
            {primary: "Job 3", secondary: "Title", date: "Date"},
        ],

        gradient: Gradients.default
    }
)
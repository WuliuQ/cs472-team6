import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import EducationAndWork from './EducationAndWork';
import EducationAndWorkOptions from './EducationAndWorkOptions';

let options = {
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

describe('EducationAndWork Component', () => {
    it('Text renders properly', () => {
        // render the component
        const component = renderer.create(
            <EducationAndWork options={options}/>
        )

        // get component version of dom
        let renderedEntries = component.toJSON();
        
        // gets school and job entries that are rendered
        let renderedEducation = renderedEntries.children[0];
        let renderedWork = renderedEntries.children[2];

        let renderedSchools = [
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
        ];
        let renderedJobs = [
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
        ];

        //Parses through entries to grab primary, secondary, and dates
        for (let i = 0; i < options.schoolCount; i++) {
            renderedSchools[i].primary = renderedEducation.children[i+1].children[0].children[1];
            renderedSchools[i].secondary = renderedEducation.children[i+1].children[1].children[1];
            renderedSchools[i].date = renderedEducation.children[i+1].children[2].children[3];
        }
        for (let i = 0; i < options.jobCount; i++) {
            renderedJobs[i].primary = renderedWork.children[i+1].children[0].children[1];
            renderedJobs[i].secondary = renderedWork.children[i+1].children[1].children[1];
            renderedJobs[i].date = renderedWork.children[i+1].children[2].children[3];
        }

        // expect the rendered schools/jobs to match the options passed into the component
        expect(renderedSchools).toEqual(options.schoolList);
        expect(renderedJobs).toEqual(options.jobList);
    })

    it('EducationAndWorkOptions show correct input values',()=>{
        // render the EducationAndWorkOptions component
        const component = renderer.create(
            <EducationAndWorkOptions options={options} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let educationInput = optionsComponentJSON.children[0].children[1].children;
        let workInput = optionsComponentJSON.children[1].children[1].children
        let gradientInput = optionsComponentJSON.children[3];

        let schoolInput = [
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
        ];
        let jobInput = [
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
            {primary: "", secondary: "", date: ""},
        ];
        
        //Parses through input to grab primary, secondary, and dates
        for (let i = 0; i < options.schoolCount; i++) {
            let temp = educationInput[i+2].children[0].children[1].children.filter(element => element.type === 'input');

            schoolInput[i].primary = temp[0].props.value;
            schoolInput[i].secondary = temp[1].props.value;
            schoolInput[i].date = temp[2].props.value;
        }
        for (let i = 0; i < options.jobCount; i++) {
            let temp = workInput[i+2].children[0].children[1].children.filter(element => element.type === 'input');

            jobInput[i].primary = temp[0].props.value;
            jobInput[i].secondary = temp[1].props.value;
            jobInput[i].date = temp[2].props.value;
        }

        // make sure that the value of the string input was set properly
        expect(schoolInput).toEqual(options.schoolList);
        expect(jobInput).toEqual(options.jobList);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(options.gradient);
    })

    it('EducationAndWorkOptions handleChange function',()=>{
        // render the EducationAndWorkOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <EducationAndWorkOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[3].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })

    it('EducationAndWorkOptions handleSchoolOrJobChange/onChange function for primary input', () => {
        // create test object that the input handler should match
        const changeTest = {
            schoolList: [
                {primary: "School 1", secondary: "Degree", date: "Date"},
                {primary: "School 2", secondary: "Degree", date: "Date"},
                {primary: "School 3", secondary: "Degree", date: "Date"},
            ]
        }
        
        // render component
        const component = renderer.create(
            <EducationAndWorkOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let primaryOnChange = component.toTree().rendered.rendered[0].rendered[1].rendered[2].rendered.rendered[0].rendered[1].rendered[1].props.onChange
        // simulate input change
        primaryOnChange({
            target: {
                name: 'primary',
                value: 'School 1'
            }
        })
    })

    it('EducationAndWorkOptions handleSchoolOrJobChange/onChange function for secondary input', () => {
        // create test object that the input handler should match
        const changeTest = {
            schoolList: [
                {primary: "School 1", secondary: "Degree", date: "Date"},
                {primary: "School 2", secondary: "Degree", date: "Date"},
                {primary: "School 3", secondary: "Degree", date: "Date"},
            ]
        }
        
        // render component
        const component = renderer.create(
            <EducationAndWorkOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let primaryOnChange = component.toTree().rendered.rendered[0].rendered[1].rendered[2].rendered.rendered[0].rendered[1].rendered[3].props.onChange
        // simulate input change
        primaryOnChange({
            target: {
                name: 'secondary',
                value: 'Degree'
            }
        })
    })

    it('EducationAndWorkOptions handleSchoolOrJobChange/onChange function for date input', () => {
        // create test object that the input handler should match
        const changeTest = {
            jobList: [
                {primary: "Job 1", secondary: "Title", date: "Date"},
                {primary: "Job 2", secondary: "Title", date: "Date"},
                {primary: "Job 3", secondary: "Title", date: "Date"},
            ]
        }
        
        // render component
        const component = renderer.create(
            <EducationAndWorkOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let primaryOnChange = component.toTree().rendered.rendered[1].rendered[1].rendered[2].rendered.rendered[0].rendered[1].rendered[5].props.onChange
        // simulate input change
        primaryOnChange({
            target: {
                name: 'date',
                value: 'Date'
            }
        })
    })

})
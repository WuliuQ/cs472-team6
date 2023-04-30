import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import Skills from './Skills';
import SkillsOptions from './SkillsOptions';

// test options
let options = {
    title: 'What I Do.',
    noOfSkills: 5,
    skillsList: [
        {name: "Figma", image: "/src/components/Skills/SampleLogos/figma.png"},
        {name: "Photoshop", image: "/src/components/Skills/SampleLogos/photoshop.png"},
        {name: "HTML", image: "/src/components/Skills/SampleLogos/html.png"},
        {name: "Webflow", image: "/src/components/Skills/SampleLogos/webflow.png"},
        {name: "SEQ", image: "/src/components/Skills/SampleLogos/seo.png"}
    ]
}

describe('Skills Component', () => {
    it('Skills text renders properly', () => {
        
        // render component
        const component = renderer.create(
            <Skills options={options} updateComponent={() => null} />
        )

        // get JSON version of rendered component
        let skillsComponentJSON = component.toJSON();

        // for each skill provided in the options object skill array, check that the rendered image/name matches
        for(let i = 0; i < options.skillsList.length; i++){
            // get skill element
            const skill = skillsComponentJSON.children[1].children[i].children[0];

            // get image and name elements
            const [image, blank, name] = skill.children;
        
            // extract rendered image and name from respective elements
            const imageRendered = image.children[0].props.src;
            const nameRendered = name.children[0].children[0];

            // test that rendered image/name matches the passed in options
            expect(imageRendered).eq(options.skillsList[i].image);
            expect(nameRendered).eq(options.skillsList[i].name);
        } 
    })

    it('SkillsOptions inputs render correct values', () => {
        // render component
        const component = renderer.create(
            <SkillsOptions options={options} />
        )

        // get json version of rendered component
        let componentJSON = component.toJSON();

        // get skillOptions element
        let skillOptions = componentJSON.children;

        // get title.noOfSkills value
        let titleValue = skillOptions[1].props.value;
        let noOfSkillsValue = skillOptions[2].children[1].children[1].props.value;

        // test that the title/noOfSkills value match the corresponding options passed in
        expect(titleValue).eq(options.title);
        expect(noOfSkillsValue).eq(options.noOfSkills);

        // for each skill make sure that its corresponding inputs have the correct values that were passed in
        for(let i = 0; i < options.skillsList.length; i++){
            // get detail element
            let detail = skillOptions[2].children[1].children[i+2];

            // get summary output
            let summaryOutput = detail.children[0].children[0].children[3];
            
            // get name value
            const [name, image] = detail.children[0].children[1].children.filter(element => element.type === 'input');
            let nameValue = name.props.value;

            // test that the name value and summary output match the corresponding options passed in
            expect(summaryOutput).eq(options.skillsList[i].name);
            expect(nameValue).eq(options.skillsList[i].name);
        }
    })

    it('SkillsOptions handleChange function', () => {
        // render component and test that handle change function returns the correct object value
        const component = renderer.create(
            <SkillsOptions options={options} updateComponent={(change) => {expect(JSON.stringify(change)).eq(JSON.stringify({title: 'My Skills'}))}} />
        )

        // get reference to handle change function of component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate an imput change
        handleChange({target: {
            name: 'title',
            value: 'My Skills'
        }})
    })

    it('SkillsOptions handleNameChange function', () => {
        // create test object that the input handler should match
        const changeTest = {
            skillsList: [
                {name: "React", image: "/src/components/Skills/SampleLogos/figma.png"},
                {name: "Photoshop", image: "/src/components/Skills/SampleLogos/photoshop.png"},
                {name: "HTML", image: "/src/components/Skills/SampleLogos/html.png"},
                {name: "Webflow", image: "/src/components/Skills/SampleLogos/webflow.png"},
                {name: "SEQ", image: "/src/components/Skills/SampleLogos/seo.png"}
            ]
        }
        
        // render component
        const component = renderer.create(
            <SkillsOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let nameOnChange = component.toTree().rendered.rendered[2].rendered[1].rendered[2].rendered.rendered[0].rendered[1].rendered[1].props.onChange
        // simulate input change
        nameOnChange({
            target: {
                name: 'name',
                value: 'React'
            }
        })
    })

    it('SkillsOptions handleImageChange function', () => {
        // create test object that the input handler should match
        const changeTest = {
            skillsList: [
                {name: "Figma", image: ""},
                {name: "Photoshop", image: "/src/components/Skills/SampleLogos/photoshop.png"},
                {name: "HTML", image: "/src/components/Skills/SampleLogos/html.png"},
                {name: "Webflow", image: "/src/components/Skills/SampleLogos/webflow.png"},
                {name: "SEQ", image: "/src/components/Skills/SampleLogos/seo.png"}
            ]
        }
        
        // render component
        const component = renderer.create(
            <SkillsOptions options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        const file = new File([""], "blank.png", {type: "image/png"});

        // get reference to text onChange function
        let imageOnChange = component.toTree().rendered.rendered[2].rendered[1].rendered[2].rendered.rendered[0].rendered[1].rendered[3].props.onChange
        // simulate input change
        imageOnChange({
            target: {
                files: [file],
                name: 'image'
            }
        })
    })
})
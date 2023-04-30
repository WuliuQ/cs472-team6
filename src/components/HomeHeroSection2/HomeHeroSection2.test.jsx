import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import HomeHeroSection2 from './HomeHeroSection2';
import HomeHeroSection2Options from './HomeHeroSection2Options';

// test options
let options = {
    primaryTitle: "Hello, I'm Kartik,",
    secondaryTitle: "creative designer based in India.",
    description: "A Product Designer and Visual Developer in India. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.",
    buttons: [
        {text: "GET IN TOUCH", link: "https://www.google.com/"},
        {text: "VIEW ALL WORKS", link: "https://www.google.com/"}
    ],
    photo: "/src/components/HomeHeroSection2/photo.jpg",
    gradient: Gradients.default
}

describe('HomeHeroSection2 Component', () => {
    it('HomeHeroSection2 component renders properly', () => {
        // render component
        const component = renderer.create(
            <HomeHeroSection2 options={options} updateComponent={() => null} />
        )

        // get JSON version of rendered component
        let skillsComponentJSON = component.toJSON();

        let [title1, title2] = skillsComponentJSON.children[0].children[1].children;
        let [button1, button2] = skillsComponentJSON.children[0].children[3].children;
        let renderedButtons = [{text: "", link: ""}, {text: "", link: ""}];

        renderedButtons[0].link = button1.children[0].props.href;
        renderedButtons[0].text = button1.children[0].children[1];
        renderedButtons[1].link = button2.children[0].props.href;
        renderedButtons[1].text = button2.children[0].children[1];

        let renderedTitle = title1.children[0] + title2.children[0];
        let renderedDescription = skillsComponentJSON.children[0].children[2].children[0];
        let renderedImage = skillsComponentJSON.children[0].children[0].children[0].props.src;

        expect(renderedTitle).toEqual(options.primaryTitle + options.secondaryTitle);
        expect(renderedDescription).toEqual(options.description);
        expect(renderedButtons).toEqual(options.buttons);
        expect(renderedImage).toEqual(options.photo);
    })

    it('HomeHeroSection2Options show correct input values',()=>{
        // render the HomeHeroSection2Options component
        const component = renderer.create(
            <HomeHeroSection2Options options={options} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        let allInput = optionsComponentJSON.children.filter(element => element.type !== 'label' && element.type !== 'p');

        let gradientInput = allInput[0].props.value;
        let titleInput = allInput[1].props.value + allInput[2].props.value;
        let descriptionInput = allInput[3].props.value;
        let buttonsInput = [{text: "", link: ""}, {text: "", link: ""}];
        buttonsInput[0].link = allInput[4].children[1].children[3].props.value;
        buttonsInput[0].text = allInput[4].children[1].children[1].props.value;
        buttonsInput[1].link = allInput[5].children[1].children[3].props.value;
        buttonsInput[1].text = allInput[5].children[1].children[1].props.value;

        expect(gradientInput).toEqual(options.gradient);
        expect(titleInput).toEqual(options.primaryTitle + options.secondaryTitle);
        expect(descriptionInput).toEqual(options.description);
        expect(buttonsInput).toEqual(options.buttons);
    })

    it('HomeHeroSection2Options handleChange function',()=>{
        // render the HomeHeroSection2Options component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <HomeHeroSection2Options options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })

    it('HomeHeroSection2Options handleButtonChange function', () => {
        // create test object that the input handler should match
        const changeTest = {
            buttons: [
                {text: "CONTACT ME", link: "https://www.google.com/"},
                {text: "VIEW ALL WORKS", link: "https://www.google.com/"}
            ]
        }
        
        // render component
        const component = renderer.create(
            <HomeHeroSection2Options options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        // get reference to text onChange function
        let buttonOnChange = component.toTree().rendered.rendered[8].rendered.rendered[1].rendered[1].props.onChange;
        // simulate input change
        buttonOnChange({
            target: {
                name: 'text',
                value: 'CONTACT ME'
            }
        });
    })

    it('HomeHeroSection2Options handleImageChange function', () => {
        // create test object that the input handler should match
        const changeTest = {
            photo: "/src/components/HomeHeroSection2/photo.jpg"
        }
        
        // render component
        const component = renderer.create(
            <HomeHeroSection2Options options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))} />
        )

        const file = new File([""], "blank.png", {type: "image/png"});

        // get reference to text onChange function
        let imageOnChange = component.toTree().rendered.rendered[11].props.onChange;
        // simulate input change
        imageOnChange({
            target: {
                files: [file],
                name: 'photo'
            }
        })
    })
})
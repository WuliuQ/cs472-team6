import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import CtaSection from './CtaSection';
import { registeredComponents } from '../../utils/registeredComponents';


describe('CtaSection Component', () => {
    it('Text renders properly', () => {
        let options = {
            link: "https://www.google.com/", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients['green-blue']
        }

        let isgreenblue = "/src/components/CtaSection/vector2.svg"

        // render the component
        const component = renderer.create(
            <CtaSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get word1;
        displayedWords = displayedWords.children[0].children[0].children[0].children;

        // expect the rendered/displayed words to match the options passed into the component
        expect(displayedWords[0]).eq(options.word1);

        // get component version of dom
        let displayedWords1 = component.toJSON();
        // get the src path of the svg file;
        displayedWords1 = displayedWords1.children[0].children[0].children[1].children[0].children[0].children[1];
        //expect the src path to match the options passed into the component
        expect(displayedWords1.props.src).eq(isgreenblue);
    })

    it('Check the gradient', () => {
        let options = {
            link: "", 
            word1: "See the impact of good, conversion-oriented design on your business.", 
            word2: "Let's Work Together", 
            gradient: Gradients.default
        }

        let isgreenblue = "/src/components/CtaSection/vector.svg"
        let href = "#0"

        // render the component
        const component = renderer.create(
            <CtaSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get the src path of the svg file;
        let displayedWords1 = displayedWords.children[0].children[0].children[1].children[0].children[0].children[1];
        //expect the src path to match the options passed into the component
        expect(displayedWords1.props.src).eq(isgreenblue);

        // get the link in href;
        let displayedWords2 = displayedWords.children[0].children[0].children[1].children[0].children[0];
        //expext the link tao match the options passed in to the component
        expect(displayedWords2.props.href).eq(href);

    })

    it('CtaSectionOptions show correct input values',()=>{
        // get the CtaSection registered component
        let CtaSectionComponent = registeredComponents.get('CtaSection');
        let OptionsComponent = CtaSectionComponent.optionsComponent;
        let defaultOptions = CtaSectionComponent.defaultOptions;

        // render the CtaSectionOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let linkInput = optionsComponentJSON.children[1];
        let word1Input = optionsComponentJSON.children[3];
        let word2Input = optionsComponentJSON.children[5];
        let gradientInput = optionsComponentJSON.children[7];

        // make sure that the value of the link input was set properly
        expect(linkInput.props.value).eq(defaultOptions.link);
        // make sure that the value of the word1 input was set properly
        expect(word1Input.props.value).eq(defaultOptions.word1);
        // make sure that the value of the word2 input was set properly
        expect(word2Input.props.value).eq(defaultOptions.word2);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
    })

    it('CtaSectionOptions handleChange function',()=>{
        // get the CtaSection registered component
        let CtaSectionComponent = registeredComponents.get('CtaSection');
        let OptionsComponent = CtaSectionComponent.optionsComponent;
        let defaultOptions = CtaSectionComponent.defaultOptions;

        // render the CtaSectionOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })

})
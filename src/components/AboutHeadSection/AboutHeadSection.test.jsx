import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import AboutHeadSection from './AboutHeadSection';
import { registeredComponents } from '../../utils/registeredComponents';

describe('AboutHeadSection Component', () => {
    it('Text renders properly', () => {
        let options = {
            name: 'Kartik Bansal', 
	        gradient: Gradients.default,
	        description: `Over the past 12 years, I\'ve worked with a diverse 
	        	range of clients, from startups to Fortune 500 companies. I 
	        	love crafting interfaces that delight users and help 
	        	businesses grow.`
        }

        // render the component
        const component = renderer.create(
            <AboutHeadSection options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // expect the rendered/displayed name to match the options passed into the component
        expect(displayedWords.children[0].children[1].children[0]).eq(options.name);
        // expect the rendered/displayed description to match the options passed into the component
        expect(displayedWords.children[1].children[0].children[0]).eq(options.description);
    })

    it('AboutHeadSectionOptions show correct input values',()=>{
        // get the AboutHeadSection registered component
        let AboutHeadSectionComponent = registeredComponents.get('AboutHeadSection');
        let OptionsComponent = AboutHeadSectionComponent.optionsComponent;
        let defaultOptions = AboutHeadSectionComponent.defaultOptions;

        // render the AboutHeadSectionOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let nameInput = optionsComponentJSON.children[1];
        let descriptionInput = optionsComponentJSON.children[4];
        let gradientInput = optionsComponentJSON.children[2].children[1];

        // make sure that the value of the name input was set properly
        expect(nameInput.props.value).eq(defaultOptions.name);
        // make sure that the value of the gradient input was set properly
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
        // make sure that the value of the description input was set properly
        expect(descriptionInput.props.value).eq(defaultOptions.description);
    })

    it('AboutHeadSectionOptions handleChange function',()=>{
        // get the AboutHeadSection registered component
        let AboutHeadSectionComponent = registeredComponents.get('AboutHeadSection');
        let OptionsComponent = AboutHeadSectionComponent.optionsComponent;
        let defaultOptions = AboutHeadSectionComponent.defaultOptions;

        // render the AboutHeadSectionOptions component
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
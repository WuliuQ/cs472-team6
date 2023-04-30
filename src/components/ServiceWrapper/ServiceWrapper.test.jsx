import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import ServiceWrapper from './ServiceWrapper';
import ServiceWrapperOptions from './ServiceWrapperOptions';
import { registeredComponents } from '../../utils/registeredComponents';

// test options
let options = {
    Title: "Test Title", 
    Text: "Test Text", 
    ButtonText: "Button Text", 
    ButtonLink: "Button Link", 
    gradient: Gradients.default, 
    ImageLink: "Image Link", 
    Invert: "Image Left"
}

describe('ServiceWrapper Component', () => {
    it('ServiceWrapper renders properly', () => {

        // render the component
        const component = renderer.create(
            <ServiceWrapper options={options}/>
        )

        // get component renders
        let renderedComponentJSON = component.toJSON();
        let renderedTitle = renderedComponentJSON.children[0].children[0].children[0];
        let renderedText = renderedComponentJSON.children[0].children[1].children[0]; 
        let renderedButtonText = renderedComponentJSON.children[0].children[2].children[0].children[0]; 
        let renderedButtonLink = renderedComponentJSON.children[0].children[2].children[0].props.href;
        let renderedImageLink = renderedComponentJSON.children[2].props.src; 
        
        // check for matches
        expect(renderedTitle).eq(options.Title);
        expect(renderedText).eq(options.Text);
        expect(renderedButtonText).eq(options.ButtonText);
        expect(renderedButtonLink).eq(options.ButtonLink);
        expect(renderedImageLink).eq(options.ImageLink);
    })

    it('ServiceWrapperOptions show correct input values',()=>{
        // get the ServiceWrapper registered component
        let ServiceWrapperComponent = registeredComponents.get('Service Wrapper');
        let OptionsComponent = ServiceWrapperComponent.optionsComponent;
        let defaultOptions = ServiceWrapperComponent.defaultOptions;

        // render the ServiceWrapperOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let TitleInput = optionsComponentJSON.children[1];
        let TextInput = optionsComponentJSON.children[3];
        let ButtonTextInput = optionsComponentJSON.children[5]; 
        let ButtonLinkIntput = optionsComponentJSON.children[7];
        let gradientInput = optionsComponentJSON.children[9];
        let ImageLinkInput = optionsComponentJSON.children[11];
        // let InvertInput = optionsComponentJSON.children[13]; 

        expect(TitleInput.props.value).eq(defaultOptions.Title);
        expect(TextInput.props.value).eq(defaultOptions.Text);
        expect(ButtonTextInput.props.value).eq(defaultOptions.ButtonText);
        expect(ButtonLinkIntput.props.value).eq(defaultOptions.ButtonLink);
        expect(gradientInput.props.value).eq(defaultOptions.gradient);
        expect(ImageLinkInput.props.value).eq(defaultOptions.ImageLink);
        // expect(InvertInput.props.value).eq(defaultOptions.Invert);
    })

    it('ServiceWrapperOptions handleChange function', () => {
        // render component and test that handle change function returns the correct object value
        const component = renderer.create(
            <ServiceWrapperOptions options={options} updateComponent={(change) => {expect(JSON.stringify(change)).eq(JSON.stringify({Text: "New Text"}))}} />
        )

        // get reference to handle change function of component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate an input change
        handleChange({target: {
            name: 'Text',
            value: "New Text"
        }})
    })
})
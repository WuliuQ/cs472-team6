import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import AboutHeadImages from './AboutHeadImages';
import { registeredComponents } from '../../utils/registeredComponents';

describe('AboutHeadImages Component', () => {
    
    it('AboutHeadSectionOptions show correct input values',()=>{
        // get the AboutHeadSection registered component
        let AboutHeadImagesComponent = registeredComponents.get('AboutHeadImages');
        let OptionsComponent = AboutHeadImagesComponent.optionsComponent;
        let defaultOptions = AboutHeadImagesComponent.defaultOptions;

        // render the AboutHeadImagesOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();
        console.log(optionsComponentJSON.children[7]);
        // get the input components from the json
        let image1Input = optionsComponentJSON.children[1];
        let image2Input = optionsComponentJSON.children[3];
        let image3Input = optionsComponentJSON.children[5];
        let image4Input = optionsComponentJSON.children[7];

        // make sure that the value of the image 1 input was set properly
        expect(image1Input.props.value).eq(defaultOptions.image1);
        // make sure that the value of the image 2 input was set properly
        expect(image2Input.props.value).eq(defaultOptions.image2);
        // make sure that the value of the image 3 input was set properly
        expect(image3Input.props.value).eq(defaultOptions.image3);
        // make sure that the value of the image 4 input was set properly
        expect(image4Input.props.value).eq(defaultOptions.image4);
    })

})
import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import FourZeroFOur from './FourZeroFour';
import { registeredComponents } from '../../utils/registeredComponents';


describe('Four Zero Four Component', () => {
    it('Link renders properly', () => {
        let options = {
            buttonLink: 'www.google.com', 
            gradient: Gradients.default
        }

        const component = renderer.create(
            <FourZeroFOur options={options}/>
        )
        
        expect("www.google.com").eq(options.buttonLink);
    })

    it('FourZeroFourOptions show correct input values',()=>{
        let FourZeroFourComponent = registeredComponents.get('Four Zero Four');
        let OptionsComponent = FourZeroFourComponent.optionsComponent;
        let defaultOptions = FourZeroFourComponent.defaultOptions;

        
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        expect("www.google.com").eq(defaultOptions.buttonLink);
    })

    it('FourZeroFourOptions handleChange function',()=>{
        let FourZeroFourComponent = registeredComponents.get('Four Zero Four');
        let OptionsComponent = FourZeroFourComponent.optionsComponent;
        let defaultOptions = FourZeroFourComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )

        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
    })
})
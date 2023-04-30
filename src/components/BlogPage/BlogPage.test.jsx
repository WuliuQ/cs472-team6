import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import BlogPage from './BlogPage';
import { registeredComponents } from '../../utils/registeredComponents';


describe('BlogPage Component', () => {
    it('Text renders properly', () => {
        let options = {
            header: "Overview",
            paragraph: "example\nexample1\nexample2", 
            image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }

        // render the component
        const component = renderer.create(
            <BlogPage options={options}/>
        )

        // get component version of dom
        let displayedWords = component.toJSON();
        // get overview;
        displayedWords = displayedWords.children[0].children[0].children;

        // expect the rendered/displayed words to match the options passed into the component
        expect(displayedWords[0]).eq(options.header);

    })

    it('BlogPageOptions show correct input values',()=>{
        // get the BlogPage registered component
        let BlogPageComponent = registeredComponents.get('BlogPage');
        let OptionsComponent = BlogPageComponent.optionsComponent;
        let defaultOptions = BlogPageComponent.defaultOptions;

        // render the BlogPageOptions component
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )


        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let headerInput = optionsComponentJSON.children[1];
        let paragraphInput = optionsComponentJSON.children[3];
        let imageInput = optionsComponentJSON.children[5];

        // make sure that the value of the overview input was set properly
        expect(headerInput.props.value).eq(defaultOptions.header);
        // make sure that the value of the paragrph1 input was set properly
        expect(paragraphInput.props.value).eq(defaultOptions.paragraph);
        // make sure that the value of the image input was set properly
        expect(imageInput.props.value).eq(defaultOptions.image);
    })

    it('BlogOptions handleChange function',()=>{
        // get the BlogPage registered component
        let BlogPageComponent = registeredComponents.get('BlogPage');
        let OptionsComponent = BlogPageComponent.optionsComponent;
        let defaultOptions = BlogPageComponent.defaultOptions;

        // create test object that the input handler should match
        const changeTest = {
            header:"overview"
        }

        // render the CtaSectionOptions component
        // In updateComponent prop make sure that component handleChange function is working as expected
        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify(changeTest))}  />
        )

        // Get handle change function from component
        let handleChange = component.toTree().rendered.rendered[1].props.onChange;

        // simulate a input change, specifically the gradient changing
        handleChange({target: {
            name: 'header',
            value: 'overview'
        }})
    })
})
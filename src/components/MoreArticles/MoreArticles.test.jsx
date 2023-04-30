import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import MoreArticles from './MoreArticles';
import { registeredComponents } from '../../utils/registeredComponents';


describe('MoreArticles Component', () => {
    it('Text renders properly', () => {
        let options = {
            text1: "More Articles",
            gradient: Gradients.default,
            imgLink1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fstack-of-books&psig=AOvVaw0l6GF3nWfe5yCu5L9hGtfX&ust=1680845558772000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPCen-bDlP4CFQAAAAAdAAAAABAE",    
            imgLink2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fbooks%2F&psig=AOvVaw0l6GF3nWfe5yCu5L9hGtfX&ust=1680845558772000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPCen-bDlP4CFQAAAAAdAAAAABAI", 
            buttonLink1: "www.goolge.com",
            buttonLink2: "www.youtube.com",
            buttonLink3: "www.goolge.com",
            buttonLink4: "www.youtube.com",
            buttonText1: "UI/UX",
            buttonText2: "Web Design",
            buttonText3: "UI/UX",
            buttonText4: "Web Design",
            text2: "Lorem ipsum dolor sit amet consectetur.",
            text3: "Lorem ipsum dolor sit amet consectetur.",
            author: "By kartik Bansal",
            author2: "By kartik Bansal"
        }

        const component = renderer.create(
            <MoreArticles options={options}/>
        )

        let displayedWords = component.toJSON();
        displayedWords = displayedWords.children[2];
        expect(displayedWords).eq(options.words);
    })

    it('MoreArticlesOptions show correct input values',()=>{
        let MoreArticlesComponent = registeredComponents.get('MoreArticles');
        let OptionsComponent = MoreArticlesComponent.optionsComponent;
        let defaultOptions = MoreArticlesComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent={() => null}  />
        )

        let optionsComponentJSON = component.toJSON();

        // get the input components from the json
        let wordsInput = optionsComponentJSON.children[1];
        let gradientInput = optionsComponentJSON.children[3];

        // make sure that the value of the gradient input was set properly
        expect(wordsInput.props.value).eq(defaultOptions.gradient);
    })

    it('MoreArticlesOptions handleChange function',()=>{
        // get the Banner registered component
        let MoreArticlesComponent = registeredComponents.get('MoreArticles');
        let OptionsComponent = MoreArticlesComponent.optionsComponent;
        let defaultOptions = MoreArticlesComponent.defaultOptions;

        // render the BannerOptions component
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
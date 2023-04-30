import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import SocialMedia from './SocialMedia';
import { registeredComponents } from '../../utils/registeredComponents';

let options = {
    title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", 
    image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients.default,
    FbLink: "https://www.facebook.com", LiLink: "https://www.linkedin.com", 
    TwLink: "https://www.twitter.com", InLink: "https://www.instagram.com",
    DrLink: "https://www.dribbble.com", BhLink: "https://www.behance.net"
}

describe('SocialMedia Component', () => {
    it('Text renders', () => {
        
        
        const component = renderer.create(
            <SocialMedia options={options}/>
        )

        let SocialMediaDiv = component.toJSON();

        let TextRenders = SocialMediaDiv.children[0].children[1].children[0];

        let titleText = TextRenders.children[0].children[0]
        
        let bodyText = TextRenders.children[1].children[0]

        expect(titleText).toEqual(options.title);
        expect(bodyText).eq(options.body);
    })
    it('SocialMedia Input Value Renders', () => {
        
        let SocialMediaComponent = registeredComponents.get('SocialMedia');
        let OptionsComponent = SocialMediaComponent.optionsComponent;
        let defaultOptions = SocialMediaComponent.defaultOptions;

        const component = renderer.create(
            <OptionsComponent options={defaultOptions} updateComponent = {() => null}   
            />
        )

        let optionsJSON = component.toJSON();

        let FacebookL = optionsJSON.children[6].children[4]
        let LinkedinL = optionsJSON.children[6].children[6]
        let TwitterL = optionsJSON.children[6].children[8]
        let InstagramL = optionsJSON.children[6].children[10]
        let DribbbleL = optionsJSON.children[6].children[12]
        let BehanceL = optionsJSON.children[6].children[14]

        expect(FacebookL.props.value).toEqual(options.FbLink)
        expect(LinkedinL.props.value).toEqual(options.LiLink)
        expect(TwitterL.props.value).toEqual(options.TwLink)
        expect(InstagramL.props.value).toEqual(options.InLink)
        expect(DribbbleL.props.value).toEqual(options.DrLink)
        expect(BehanceL.props.value).toEqual(options.BhLink)
    })

    // it('SocialMedia handleChange function', () =>{
    //     const TestOptions={
    //         title: "Test Title", body: "Test Body", 
    //         image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients['green-blue'],
    //         FbLink: "https://google.com", LiLink: "https://google.com", 
    //         TwLink: "https://www.bing.com/", InLink: "https://www.bing.com/",
    //         DrLink: "https://www.yahoo.com/", BhLink: "https://www.yahoo.com/"
    //     }
    //     let SocialMediaComponent = registeredComponents.get('SocialMedia');
    //     let OptionsComponent = SocialMediaComponent.optionsComponent;
    //     let defaultOptions = SocialMediaComponent.defaultOptions;

    //     const component = renderer.create(
    //         <OptionsComponent options={options} updateComponent={(change) =>
    //         expect(JSON.stringify(change)).eq(JSON.stringify(TestOptions))}    
    //         />
    //     )
    //     let handleChange = component.toTree().rendered.rendered.rendered[1].props.onChange;

    //     handleChange({
    //         target: {
    //             name: 'text',
    //             value: Gradients['green-blue']
    //         }
    //     })
            
    // })
})
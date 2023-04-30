import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { registeredComponents } from '../../utils/registeredComponents';
import { Gradients } from '../../utils/utils';
import FAQSection from './faqSection';
import Accordion from './Accordion'


describe('FAQ Component', () => {
    it('Text renders properly', () =>{
        let options = {
            flavorText:'Answers to the burning questions in your mind.',
            q1: "How long does it take to build a website?",
            ans1: "As long as it takes.",
            q2:"How much does a website cost?",
            ans2:"Costs as much as the time needed to make it.",
            q3:"I don't have a design, can you build it for me?",
            ans3:'No',
            q4:'Do you provide SEO as well?',
            ans4:'Maybe',
            q5:'Will my website load quickly?',
            ans5:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate pssimus labore, hic temporibus velit dicta earum suscpiti commodi eum enim atque at? Et perspiciatis dolor irue volupatem.',
            gradient: Gradients.default,
            contactBttn:"Contact Me"
        }

        const component = renderer.create(
            <FAQSection options={options} />
        )
        
        let mainDiv = component.toJSON()
        let faqDisplay = mainDiv.children[0]
        
        let faqText = faqDisplay.children[1].children[0].children.shift();
        let contBtn = faqDisplay.children[2].children[0].children.shift()

        expect(faqText).eq(options.flavorText)
        expect(contBtn).eq(options.contactBttn)

    })

    it('faqOptions shows the correct input values', ()=>{
        let FAQComponent = registeredComponents.get('FAQ')
        let OptionsComponent = FAQComponent.optionsComponent
        let options = FAQComponent.defaultOptions

        const component = renderer.create(
            < OptionsComponent options={options}  
            updateComponent={()=> null} />
        )
        let optComp = component.toJSON()

        let flav = optComp.children[1].props.value
        let contact = optComp.children[3].props.value
        let ques1 = optComp.children[4].children[1].children[1].props.value;
        let answ1 = optComp.children[4].children[1].children[3].props.value
        let ques2 = optComp.children[5].children[1].children[1].props.value
        let answ2 = optComp.children[5].children[1].children[3].props.value
        let ques3 = optComp.children[6].children[1].children[1].props.value
        let answ3 = optComp.children[6].children[1].children[3].props.value
        let ques4 = optComp.children[7].children[1].children[1].props.value
        let answ4 = optComp.children[7].children[1].children[3].props.value
        let ques5 = optComp.children[8].children[1].children[1].props.value
        let answ5 = optComp.children[8].children[1].children[3].props.value

        expect(flav).eq(options.flavorText)
        expect(contact).eq(options.contactBttn)
        expect(ques1).eq(options.q1)
        expect(answ1).eq(options.ans1)
        expect(ques2).eq(options.q2)
        expect(answ2).eq(options.ans2)
        expect(ques3).eq(options.q3)
        expect(answ3).eq(options.ans3)
        expect(ques4).eq(options.q4)
        expect(answ4).eq(options.ans4)
        expect(ques5).eq(options.q5)
        expect(answ5).eq(options.ans5)
    })

    it('faqOptions handleChange function', () =>{
        let FAQComponent = registeredComponents.get('FAQ')
        let OptionsComponent = FAQComponent.optionsComponent
        let options = FAQComponent.defaultOptions


        const component = renderer.create(
            <OptionsComponent options={options} updateComponent={(change) => expect(JSON.stringify(change)).eq(JSON.stringify({gradient: Gradients["green-blue"]}))}  />
        )
        
        let handleChange = component.toTree().rendered.rendered[1].props.onChange

        handleChange({target: {
            name: 'gradient',
            value: Gradients["green-blue"]
        }})
        
    })
})
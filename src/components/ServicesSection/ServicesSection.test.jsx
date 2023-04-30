import React from 'react';
import renderer from 'react-test-renderer';
import { beforeEach, describe, expect, it } from 'vitest';
import { Gradients } from '../../utils/utils';
import { registeredComponents } from '../../utils/registeredComponents';
import ServicesSection from './ServicesSection';
import ServicesSectionOptions from './ServicesSectionOptions';
import { PageState } from '../../state';
import PageComponent from '../../models/PageComponent';

let options = {
    header: 'Services',
    services: [
        {
            name: 'Test Service',
            url: '',
            picture: '',
            gradient: Gradients.default
        }
    ]
}

let registeredServiceComponent = registeredComponents.get('Services Section');



describe('ServicesSection Component', () => {
    
    // reset page state before each test
    beforeEach(() => {
        let initailComponentsList = [new PageComponent(registeredServiceComponent.name, {
            header: 'Services',
            services: [
                {
                    name: 'Test Service',
                    url: '',
                    picture: '',
                    gradient: Gradients.default
                }
            ]
        })]
        let initialPageOptions = {
            title: 'Portfolio',
            icon: '',
            author: '',
            description: 'My Portfolio',
            language: 'en-US'
        }
        PageState.setState({...PageState.getState(), 
            componentsList: initailComponentsList,
            pageOptions: initialPageOptions
        })
    })

    it('Service name renders properly and onChange function works properly', () => {
        const component = renderer.create(
            <ServicesSection options={options} />
        )

        const servicesSectionComponent = component.toTree();
        // drill in component to get rendered service text
        const serviceText = servicesSectionComponent.rendered.rendered[1].rendered.rendered[0].rendered[0];
        // make sure that the rendered text matches the provided options
        expect(serviceText).eq(options.services[0].name);

        
    })

    it('Service url and picture are used when defined', () => {

        const updatedOptions = {...options};
        // define url and picture
        updatedOptions.services[0].url = "https://www.google.com";
        updatedOptions.services[0].picture = "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        const component = renderer.create(
            <ServicesSection options={options} />
        )

        const servicesSectionComponent = component.toTree();
        const serviceComponent = servicesSectionComponent.rendered.rendered[1];
        // drill into component to find href attribute on a tag
        const renderedURL = serviceComponent.rendered.props.href;
        // make sure that rendered url is not #0 which is the branch that is taken if url is not defined
        expect(renderedURL).not.eq('#0');

        // drill into service component and search for img tag
        const imgSearchResult = serviceComponent.rendered.rendered.filter(child => child.type === 'img');
        // make sure that img element is rendered and found
        expect(imgSearchResult.length).eq(1);
    })

    it('ServiceSectionOptions renders correct header to user', () => {
        // get page component instance from state
        let pageComponent = PageState.getState().componentsList[0];
        const component = renderer.create(
            <ServicesSectionOptions options={PageState.getState().componentsList[0].options} updateComponent={(options) => PageState.getState().updateComponentOptions(pageComponent.id, options)}/>
        )

        let servicesSectionOptions = component.toTree();

        let optionsChildren = servicesSectionOptions.rendered.rendered;
        let headerInput = optionsChildren[1];
        let headerInputValue = headerInput.props.value;
        // check that the rendered header input has the same value as the options passed in
        expect(headerInputValue).eq(options.header);

        // test onChange function for header
        const testHeader = 'Projects'
        headerInput.props.onChange({
            target: {
                name: 'header',
                value: testHeader
            }
        })
        // check that update occurred
        let updatedHeader = PageState.getState().componentsList[0].options.header;
        expect(updatedHeader).eq(testHeader)
    })

    it('Test AddService button and AddService function', () => {
        // get page component instance from state
        let pageComponent = PageState.getState().componentsList[0]
        // render page component
        const component = renderer.create(
            <ServicesSectionOptions options={pageComponent.options} updateComponent={(options) => PageState.getState().updateComponentOptions(pageComponent.id, options)}/>
        )

        let servicesSectionOptions = component.toTree();

        // drill into component and get access to addBtn
        let addBtn = servicesSectionOptions.rendered.rendered[2];
        let clickAddBtn = addBtn.props.onClick;
        // simulate clicking on add button
        const numOfServicesBefore = PageState.getState().componentsList[0].options.services.length;
        clickAddBtn()
        const numOfServicesAfter = PageState.getState().componentsList[0].options.services.length;
        
        // make sure that a new service was added to the components services array
        expect(numOfServicesAfter).eq(numOfServicesBefore+1)
    })

    it('Test DeleteService button and DeleteService function', () => {
        // get page component instance from state
        let pageComponent = PageState.getState().componentsList[0];
        // render page component
        const component = renderer.create(
            <ServicesSectionOptions options={PageState.getState().componentsList[0].options} updateComponent={(options) => PageState.getState().updateComponentOptions(pageComponent.id, options)}/>
        )

        let servicesSectionOptions = component.toTree();
        let serviceOption = servicesSectionOptions.rendered.rendered[3];
        // drill into component and get access to DeleteBtn
        let deleteBtn = serviceOption.rendered.rendered.at(-1).rendered.at(-1);
        let clickDeleteBtn = deleteBtn.props.onClick;
        
        const numOfServicesBefore = PageState.getState().componentsList[0].options.services.length;

        // simulate clicking deleteBtn
        clickDeleteBtn()
        
        const numOfServicesAfter = PageState.getState().componentsList[0].options.services.length;
        
        // make sure that the service was deleted
        expect(numOfServicesAfter).eq(numOfServicesBefore-1)
    })

    it('Test handleServiceChange function', () => {
        // get page component instance from state
        let pageComponent = PageState.getState().componentsList[0];
        // render page component
        const component = renderer.create(
            <ServicesSectionOptions options={PageState.getState().componentsList[0].options} updateComponent={(options) => PageState.getState().updateComponentOptions(pageComponent.id, options)}/>
        )
        let servicesSectionOptions = component.toTree();
        // drill into component to get serviceOption
        let serviceOption = servicesSectionOptions.rendered.rendered[3].rendered.rendered.at(-1).rendered;
        
        // drill into component to get inputs
        const [nameLabel, nameInput, urlLabel, urlInput, imageLabel, picture1Input, orPTag, picture2Input, selectImageBtn, gradientSelect, deleteBtn] = serviceOption;
        
        // set test values
        const testName = 'Test Service 1';
        const testUrl = 'github.com';
        const testPicture = 'testURL';
        
        // test onChange for name
        nameInput.props.onChange({
            target: {
                name: 'name',
                value: testName
            }
        })
        // test that change occurred
        let updatedName = PageState.getState().componentsList[0].options.services[0].name;
        expect(updatedName).eq(testName)

        // test onChange for url
        urlInput.props.onChange({
            target: {
                name: 'url',
                value: testUrl
            }
        })
        // test that change occurred
        let updatedUrl = PageState.getState().componentsList[0].options.services[0].url;
        expect(updatedUrl).eq(testUrl)


        // test onChange for picture
        picture1Input.props.onChange({
            target: {
                name: 'picture',
                value: testPicture
            }
        })
        // test that change occurred
        let updatedPicture = PageState.getState().componentsList[0].options.services[0].picture;
        expect(updatedPicture).eq(testPicture)

        // test handleChange for gradient
        gradientSelect.props.handleChange({
            target: {
                name: 'gradient',
                value: Gradients['green-blue']
            }
        })
        // test that change occurred
        let updatedGradient = PageState.getState().componentsList[0].options.services[0].gradient;
        expect(updatedGradient).eq(Gradients['green-blue'])

        // test onClick for imageBtn
        selectImageBtn.props.onClick()
        // test onChange for file input 
        picture2Input.props.onChange()
    })
})
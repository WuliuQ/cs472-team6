import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';
import FooterOptions from './FooterOptions';
import { registeredComponents } from '../../utils/registeredComponents';

let options = {
  userName: 'Kartik Bansal',
  home: 'URL1',
  aboutUs: 'URL2',
  contact: 'URL3',
  linkedIn: 'URL4',
  twitter: 'URL5',
  instagram: 'URL6',
};

describe('Footer Component', () => {
  it('Text renders properly', () => {
    // render the component
    const component = renderer.create(<Footer options={options} />);

    // get component renders
    let renderedComponentJSON = component.toJSON();
    let renderedUserName =
      renderedComponentJSON.children[0].children[0].children[1].children[1];

    // check for matches
    expect(renderedUserName).eq(options.userName);
  });

  it('FooterOptions show correct input values', () => {
    // get the Footer registered component
    let FooterComponent = registeredComponents.get('Footer');
    let OptionsComponent = FooterComponent.optionsComponent;
    let defaultOptions = FooterComponent.defaultOptions;

    // render the FooterOptions component
    const component = renderer.create(
      <OptionsComponent options={defaultOptions} updateComponent={() => null} />
    );

    let optionsComponentJSON = component.toJSON();

    // get the input components from the json
    let userNameInput = optionsComponentJSON.children[1];
    let homeInput = optionsComponentJSON.children[3];
    let aboutUsInput = optionsComponentJSON.children[5];
    let contactInput = optionsComponentJSON.children[7];
    let linkedInInput = optionsComponentJSON.children[9];
    let twitterInput = optionsComponentJSON.children[11];
    let instagramInput = optionsComponentJSON.children[13];

    // make sure that the value of the userName input was set properly
    expect(userNameInput.props.value).eq(defaultOptions.userName);

    // make sure that the value of the home input was set properly
    expect(homeInput.props.value).eq(defaultOptions.home);

    // make sure that the value of the aboutUs input was set properly
    expect(aboutUsInput.props.value).eq(defaultOptions.aboutUs);

    // make sure that the value of the contact input was set properly
    expect(contactInput.props.value).eq(defaultOptions.contact);

    // make sure that the value of the linkedIn input was set properly
    expect(linkedInInput.props.value).eq(defaultOptions.linkedIn);

    // make sure that the value of the twitter input was set properly
    expect(twitterInput.props.value).eq(defaultOptions.twitter);

    // make sure that the value of the instagram input was set properly
    expect(instagramInput.props.value).eq(defaultOptions.instagram);
  });

  it('FooterOptions handleChange function', () => {
    // render component and test that handle change function returns the correct object value
    // render the FooterOptions component
    // In updateComponent prop make sure that component handleChange function is working as expected

    const component = renderer.create(
      <FooterOptions
        options={options}
        updateComponent={(change) =>
          expect(JSON.stringify(change)).eq(
            JSON.stringify({ userName: 'New Text' })
          )
        }
      />
    );

    // Get handle change function from component
    let handleChange = component.toTree().rendered.rendered[1].props.onChange;

    // simulate a input change, specifically the gradient changing
    handleChange({
      target: {
        name: 'userName',
        value: 'New Text',
      },
    });
  });
});

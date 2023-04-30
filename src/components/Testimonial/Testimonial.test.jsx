import { Gradients } from '../../utils/utils';
import { describe, expect, it } from 'vitest';
import Testimonial from './Testimonial';
import TestimonialOptions from './TestimonialOptions';
import React from 'react';
import renderer from 'react-test-renderer';

// default test options
let options = {
    stars: 5,
    starGradient: Gradients.default,
    testimonialBody:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
    custPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png",
    custName: "Insert customer name here",
    custPosition: "Insert customer position here"
}

describe('Testimonial Component', ()=> {
    it('Correct number of stars render'), () => {
        const testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )

        let testimonialJSON = testTestimonial.toJSON();
        let starCount = testimonialJSON.children[1];

        expect(starCount).eq(options.stars);
    }

    it('Text renders properly'), () => {
        const testTestimonial = renderer.create(
            <Testimonial options={options}/>
        )
        let testimonialJSON = testTestimonial.toJSON();
        let bodyText = testimonialJSON.children[5];
        let nameText = testimonialJSON.children[9];
        let postitionText = testimonialJSON.children[11];

        expect(bodyText.props.value).eq(options.testimonialBody);
        expect(nameText).eq(options.custName);
        expect(positionText).eq(options.custPosition);

    }
 })
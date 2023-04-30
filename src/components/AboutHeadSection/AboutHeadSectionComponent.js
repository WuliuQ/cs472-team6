import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

import AboutHeadSection from "./AboutHeadSection";
import AboutHeadSectionOptions from "./AboutHeadSectionOptions";
import AboutHeadSectionPreview from "./AboutHeadSectionPreview.png";

export const AboutHeadSectionComponent = new Component(

    'AboutHeadSection', 
    AboutHeadSection, 
    AboutHeadSectionOptions, 
    AboutHeadSectionPreview, 
    {   name: 'Kartik Bansal', 
        gradient: Gradients.default,
        description: `Over the past 12 years, I\'ve worked with a diverse range of clients, from startups to Fortune 500 companies. 
                        I love crafting interfaces that delight users and help businesses grow.`
    }

);
import ServicesSection from "./ServicesSection";
import ServicesSectionPreview from "./ServicesSectionPreview.png";
import { Gradients } from "../../utils/utils";
import Component from "../../models/Component";
import ServicesSectionOptions from "./ServicesSectionOptions";

export class ServiceOptions {
    constructor(name, gradient, picture, url){
        this.name = name;
        this.gradient = gradient;
        this.picture = picture;
        this.url = url;
    }
}

export const ServicesSectionComponent = new Component(
    'Services Section', 
    ServicesSection, 
    ServicesSectionOptions, 
    ServicesSectionPreview, 
    {
        header: 'Services', 
        services: [
            new ServiceOptions('UI/UX Design', Gradients.default, "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", ''),
            new ServiceOptions('Graphic Design', Gradients.default, "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80", ''),
            new ServiceOptions('Web Design', Gradients.default, "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80", ''),
            new ServiceOptions('Product Design', Gradients.default, "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", '')
        ]
    }
);


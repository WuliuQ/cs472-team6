import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import ServiceWrapper from "./ServiceWrapper";
import ServiceWrapperOptions from "./ServiceWrapperOptions";
import ServiceWrapperPreview from "./ServiceWrapperPreview.png";

export const ServiceWrapperComponent = new Component(
    'Service Wrapper', 
    ServiceWrapper, 
    ServiceWrapperOptions, 
    ServiceWrapperPreview, 
    {    
        Title: "Web Design", 
        Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m",
        ButtonText: "Contact Me", 
        ButtonLink: "https://www.google.com/", 
        gradient: Gradients.default, 
        ImageLink: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ServiceWrapper_ImageLink.jpg?raw=true", 
        Invert: "Image Left"
    }
)
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import FourZeroFour from "./FourZeroFour";
import FourZeroFourPreview from "./404_preview.png";
import FourZeroFourOptions from "./FourZeroFourOptions";

export const FourZeroFourComponent = new Component(
    'Four Zero Four', 
    FourZeroFour, 
    FourZeroFourOptions, 
    FourZeroFourPreview, 
    {
        buttonLink: "www.google.com",
        gradient: Gradients.default
    }
);

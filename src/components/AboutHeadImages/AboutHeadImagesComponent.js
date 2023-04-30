import Component from "../../models/Component";

import AboutHeadImages from "./AboutHeadImages";
import AboutHeadImagesOptions from "./AboutHeadImagesOptions";
import AboutHeadImagesPreview from "./AboutHeadImagesPreview.png";

export const AboutHeadImagesComponent = new Component(
    'AboutHeadImages', AboutHeadImages, AboutHeadImagesOptions, AboutHeadImagesPreview, 
    {   
        image1: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/AboutHeadImages_image1.png?raw=true", 
        image2: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/AboutHeadImages_image2.png?raw=true",
        image3: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/AboutHeadImages_image3.png?raw=true",
        image4: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/AboutHeadImages_image4.png?raw=true",

    }
);
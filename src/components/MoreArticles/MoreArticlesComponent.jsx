import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import MoreArticles from "./MoreArticles";
import MoreArticlesPreview from "./MoreArticlesPreview.png";
import MoreArticlesOptions from "./MoreArticlesOptions";

export const MoreArticlesComponent = new Component(
    'MoreArticles', 
    MoreArticles, 
    MoreArticlesOptions, 
    MoreArticlesPreview, 
    {
        text1: "More Articles",
        gradient: Gradients.default,
        imgLink1: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/MoreArticlesImg1.png?raw=true",    
        imgLink2: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/MoreArticlesImg2.png?raw=true", 
        buttonLink1: "http://www.google.com",
        buttonLink2: "http://www.youtube.com",
        buttonLink3: "http://www.google.com",
        buttonLink4: "http://www.youtube.com",
        buttonText1: "UI/UX",
        buttonText2: "Web Design",
        buttonText3: "UI/UX",
        buttonText4: "Web Design",
        text2: "Lorem ipsum dolor sit amet consectetur.",
        text3: "Lorem ipsum dolor sit amet consectetur.",
        author: "By kartik Bansal",
        author2: "By kartik Bansal",
    }
);

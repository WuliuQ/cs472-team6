import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import HomeHeroSection2 from "./HomeHeroSection2";
import HomeHeroSection2Options from "./HomeHeroSection2Options";
import HomeHeroSection2Preview from "./HomeHeroSection2Dark.png";

export const HomeHeroSection2Component = new Component(
    'Home Hero Section 2',
    HomeHeroSection2,
    HomeHeroSection2Options,
    HomeHeroSection2Preview,
    {
        primaryTitle: "Hello, I'm Kartik,",
        secondaryTitle: "creative designer based in India.",
        description: "A Product Designer and Visual Developer in India. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.",
        buttons: [
            {text: "GET IN TOUCH", link: "https://www.google.com/"},
            {text: "VIEW ALL WORKS", link: "https://www.google.com/"}
        ],
        photo: "/src/components/HomeHeroSection2/photo.jpg",
        gradient: Gradients.default
    }
)
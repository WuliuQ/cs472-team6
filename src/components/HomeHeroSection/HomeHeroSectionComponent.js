import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import HomeHeroSection from "./HomeHeroSection";
import HomeHeroSectionOptions from "./HomeHeroSectionOptions";
import HomeHeroSectionPreview from "./HomeHeroSectionDark.png";

export const HomeHeroSectionComponent = new Component(
    'Home Hero Section',
    HomeHeroSection,
    HomeHeroSectionOptions,
    HomeHeroSectionPreview,
    {
        primaryTitle: "Hello, I'm Kartik,",
        secondaryTitle: "creative designer based in India.",
        description: "A Product Designer and Visual Developer in India. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.",
        buttons: [
            {text: "GET IN TOUCH", link: "https://www.google.com/"},
            {text: "VIEW ALL WORKS", link: "https://www.google.com/"}
        ],
        photo: "/src/components/HomeHeroSection/photo.jpg",
        gradient: Gradients.default
    }
)
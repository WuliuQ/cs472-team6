import Component from "../../models/Component";
import Companies from "./Companies";
import CompaniesOptions from "./CompaniesOptions";
import CompaniesPreview from "./CompaniesPreview.png";
import { Gradients } from "../../utils/utils";

export const CompaniesComponent = new Component(
    'Companies',
    Companies,
    CompaniesOptions,
    CompaniesPreview,
    {   
        gradient: Gradients.default,
        noOfLogos: 12,
        logoList: [
            {url: "/src/components/Companies/Logos/Logo1.svg", darkURL: "/src/components/Companies/Logos/DarkLogo1.svg"},
            {url: "/src/components/Companies/Logos/Logo2.svg", darkURL: "/src/components/Companies/Logos/DarkLogo2.svg"},
            {url: "/src/components/Companies/Logos/Logo3.svg", darkURL: "/src/components/Companies/Logos/DarkLogo3.svg"},
            {url: "/src/components/Companies/Logos/Logo4.svg", darkURL: "/src/components/Companies/Logos/DarkLogo4.svg"},
            {url: "/src/components/Companies/Logos/Logo5.svg", darkURL: "/src/components/Companies/Logos/DarkLogo5.svg"},
            {url: "/src/components/Companies/Logos/Logo6.svg", darkURL: "/src/components/Companies/Logos/DarkLogo6.svg"},
            {url: "/src/components/Companies/Logos/Logo7.svg", darkURL: "/src/components/Companies/Logos/DarkLogo7.svg"},
            {url: "/src/components/Companies/Logos/Logo8.svg", darkURL: "/src/components/Companies/Logos/DarkLogo8.svg"},
            {url: "/src/components/Companies/Logos/Logo9.svg", darkURL: "/src/components/Companies/Logos/DarkLogo9.svg"},
            {url: "/src/components/Companies/Logos/Logo10.svg", darkURL: "/src/components/Companies/Logos/DarkLogo10.svg"},
            {url: "/src/components/Companies/Logos/Logo11.svg", darkURL: "/src/components/Companies/Logos/DarkLogo11.svg"},
            {url: "/src/components/Companies/Logos/Logo12.svg", darkURL: "/src/components/Companies/Logos/DarkLogo12.svg"},
        ]
    }
)
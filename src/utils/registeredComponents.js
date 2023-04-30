import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import {BannerComponent} from '../components/Banner/BannerComponent';
import {AboutHeadImagesComponent} from '../components/AboutHeadImages/AboutHeadImagesComponent';
import {AboutHeadSectionComponent} from '../components/AboutHeadSection/AboutHeadSectionComponent';
import {EducationAndWorkComponent} from '../components/EducationAndWork/EducationAndWorkComponent';
import {ServiceWrapperComponent} from '../components/ServiceWrapper/ServiceWrapperComponent';
import {SkillsComponent} from '../components/Skills/SkillsComponent';
import {SocialMediaComponent} from '../components/SocialMedia/SocialMediaComponent'; 
import { faqComponent } from "../components/faqSection/faqComponent";
import Component from "../models/Component";
import { Gradients } from "./utils";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { BlogPageComponent } from "../components/BlogPage/BlogPageComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";
import {FourZeroFourComponent} from '../components/404Section/FourZeroFourComponent';
import { contactSectionComponent } from "../components/ContactSection/contactSectionComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { NavBarComponent } from "../components/NavbarComponent/NavBarComponent";
import { CompaniesComponent } from "../components/Companies/CompaniesComponent";
import { HomeHeroSectionComponent } from "../components/HomeHeroSection/HomeHeroSectionComponent";
import { HomeHeroSection2Component } from "../components/HomeHeroSection2/HomeHeroSection2Component";
import { MoreArticlesComponent } from "../components/MoreArticles/MoreArticlesComponent";
import { ServicesSectionComponent } from "../components/ServicesSection/ServicesSectionComponent";


export const registeredComponents = new Map([
    ['Testimonial', TestimonialComponent],
    ['Service Wrapper', ServiceWrapperComponent],
    ['Banner', BannerComponent],
    ['AboutHeadSection', AboutHeadSectionComponent],
    ['AboutHeadImages', AboutHeadImagesComponent],
    ['CtaSection', CtaSectionComponent],
    ['BlogPage', BlogPageComponent],
    ['Stats Section', StatsWrapperComponent],
    ['Education and Work', EducationAndWorkComponent],
    ['Skills', SkillsComponent],
    ['SocialMedia', SocialMediaComponent],
    ['Four Zero Four', FourZeroFourComponent],
    ['FAQ', faqComponent],
    ['ContactSection', contactSectionComponent],
    ['Navbar', NavBarComponent],
    ['Footer', FooterComponent],
    ['Companies', CompaniesComponent],
    ['Home Hero Section', HomeHeroSectionComponent],
    ['Home Hero Section 2', HomeHeroSection2Component],
    ['MoreArticles', MoreArticlesComponent],
    ['Services Section', ServicesSectionComponent]
]);

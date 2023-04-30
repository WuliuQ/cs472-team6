import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import Skills from "./Skills";
import SkillsOptions from "./SkillsOptions";
import SkillsPreview from "./SkillsDark.png";

export const SkillsComponent = new Component(
    'Skills',
    Skills,
    SkillsOptions,
    SkillsPreview,
    {
        title: 'What I Do.',
        noOfSkills: 5,
        skillsList: [
            {name: "Figma", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", image: "/src/components/Skills/SampleLogos/seo.png"}
        ]
    }
)
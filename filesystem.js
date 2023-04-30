import fs from 'node:fs';
import path from 'node:path';

const baseFiles = [
  'webcontainer/package.json',
  'webcontainer/postcss.config.js',
  'webcontainer/vite.config.js',
  'index.html',
  'tailwind.config.cjs',
]

const publicFiles = [
  'public/vite.svg'
]

const srcFiles = [
  'src/index.css',
  'src/main.jsx',
  'webcontainer/App.jsx',
  'webcontainer/registeredComponents.js'
]

const componentFiles = new Map([
  ['404Section', [
    'src/components/404Section/FourZeroFour.jsx',
    'src/components/404Section/404_img.png'
  ]],
  ['AboutHeadImages', [
    'src/components/AboutHeadImages/AboutHeadImages.jsx'
  ]],
  ['AboutHeadSection', [
    'src/components/AboutHeadSection/AboutHeadSection.jsx'
  ]],
  ['Banner', [
    'src/components/Banner/Banner.jsx',
    'src/components/Banner/star.svg'
  ]],
  ['BlogPage', [
    'src/components/BlogPage/BlogPage.jsx'
  ]],
  // ['Companies', [
  //   'src/components/Companies/Companies.jsx'
  // ]],
  ['ContactSection', [
    'src/components/ContactSection/ContactSection.jsx',
    'src/components/ContactSection/emailIcon.svg',
    'src/components/ContactSection/phoneIcon.svg',
    'src/components/ContactSection/miniEmailIcon.svg',
    'src/components/ContactSection/miniDollarIcon.svg',
    'src/components/ContactSection/blackMiniDollarSign.svg',
    'src/components/ContactSection/blackMiniEmail.svg'
  ]],
  ['CtaSection', [
    'src/components/CtaSection/CtaSection.jsx',
    'src/components/CtaSection/vector.svg'
  ]],
  ['EducationAndWork', [
    'src/components/EducationAndWork/EducationAndWork.jsx'
  ]],
  ['Footer', [
    'src/components/Footer/Footer.jsx'
  ]],
  ['NavbarComponent', [
    'src/components/NavbarComponent/NavbarComponent.jsx'
  ]],
  ['ServiceWrapper', [
    'src/components/ServiceWrapper/ServiceWrapper.jsx'
  ]],
  ['Skills', [
    'src/components/Skills/Skills.jsx'
  ]],
  ['SocialMedia', [
    'src/components/SocialMedia/SocialMedia.jsx'
  ]],
  ['StatsWrapper', [
    'src/components/StatsWrapper/StatsWrapper.jsx'
  ]],
  ['Testimonial', [
    'src/components/Testimonial/Testimonial.jsx',
    'src/components/Testimonial/star.svg'
  ]]
]);

class Directory {
  directory = {};

  addFile(filename, contents) {
    this.directory[filename] = new File(contents);
  }

  addDir(dirname){
    this.directory[dirname] = new Directory();
  }
}

class File {
  file = {};

  constructor(contents){
    this.file.contents = contents;
  }
}

const files = {};
// add base files
for (const file of baseFiles){
  files[path.basename(file)] = new File(Array.from(fs.readFileSync(path.join('./', file))));
}

// add public directory
files['public'] = new Directory();
// add public files
for (const file of publicFiles){
  files['public'].addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
}

// add src files
files['src'] = new Directory();
for (const file of srcFiles){
  files['src'].addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
}

files['src'].addDir('components');
let componentsFolder = files['src'].directory['components'];
for (const [folder, files] of componentFiles){
  componentsFolder.addDir(folder);
  let componentFolder = componentsFolder.directory[folder];
  for (const file of files){
    componentFolder.addFile(path.basename(file), Array.from(fs.readFileSync(path.join('./', file))));
  }
}

fs.writeFileSync('./src/utils/files.js', "export const files = " + JSON.stringify(files));
import { ExportModalState, PageState } from "../../state";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { createIndexHTML, toJSON } from "../../utils/utils";
import { WebContainer } from '@webcontainer/api';
import { files } from "../../utils/files.js";

export default function ExportModal() {
  const shown = ExportModalState((state) => state.shown);
  const setShown = ExportModalState((state) => state.setShown);
  const loading = ExportModalState((state) => state.loading);
  const setLoading = ExportModalState((state) => state.setLoading);
  const componentsList = PageState((state) => state.componentsList);
  const pageOptions = PageState((state) => state.pageOptions);

  function handleExportData() {
    setLoading(true);
    const zip = new JSZip();
    zip.file("portfolio.json", toJSON({componentsList, pageOptions}));
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "portfolio.zip");
      setLoading(false);
    });
  }

  function containerExists(){
    return Array.from(document.getElementsByTagName('iframe')).some(element => element.src.includes('stackblitz'));
  }

  async function handleExportWebsite(){
    setLoading(true);
    // only boot webcontainer if it does not exist
    if (!window.webcontainerInstance && !containerExists()){
      window.webcontainerInstance = await WebContainer.boot({coep: 'credentialless'});
    }
    
    // load webcontainer filesystem
    await window.webcontainerInstance.mount(files);
    // load pageState elements into webcontainer filesystem
    await window.webcontainerInstance.fs.writeFile('/src/pageData.js', 'export const pageData = ' + toJSON({componentsList, pageOptions}));
    // load custom index.html from pageOptions into webcontainer filesystem
    await window.webcontainerInstance.fs.writeFile('index.html', createIndexHTML(pageOptions));
    
    // install project dependencies
    const installExit = await installDependencies();
    if (installExit !== 0){
      alert('Error: Website could not be exported');
      setLoading(false);
      return;
    }

    // build project
    const buildExit = await buildWebsite();
    if (buildExit !== 0){
      alert('Build Error: Website could not be exported');
      setLoading(false);
      return;
    }

    // create zip file
    const siteZip = new JSZip();
    // create sub folder for dist directory
    let distFolder = siteZip.folder('dist');
    // process and zip web container dist directory that was created by build step above
    await zipFolder('/dist', distFolder);
    // save the siteZip folder to the user
    siteZip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "portfolio.zip");
      setLoading(false);
    });

  }

  async function zipFolder(folder, zipDir){
    // get files in directory
    let distFiles = await readContainerDir(folder);
    // process each file in directory
    for (const file of distFiles){
      // if the file is a directory then call function recursively
      if (file.isDirectory()){
        // create new sub directory in zip
        let subDir = zipDir.folder(file.name);
        // call recursively to process and zip all files in sub directory
        await zipFolder(`${folder}/${file.name}`, subDir);
      } else { // if the file is a file then simply add it to the current zip directory
        let fileContents = await readContainerFile(`${folder}/${file.name}`);
        zipDir.file(file.name, fileContents);
      }
    }
  }
  
  async function readContainerFile(filename) {
    const file = await window.webcontainerInstance.fs.readFile(filename, 'utf-8');
    return file || '';
  }

  async function readContainerDir(directory) {
    const files = await window.webcontainerInstance.fs.readdir(directory, {encoding: 'utf-8', withFileTypes: true});
    return files || [];
  }

  async function installDependencies(){
    const installProcess = await window.webcontainerInstance.spawn('npm', ['install']);
    return installProcess.exit;
  }

  async function buildWebsite() {
    const buildProcess = await window.webcontainerInstance.spawn('npm', ['run', 'build']);

    buildProcess.output.pipeTo(new WritableStream({
      write(data) {
        console.log(data);
      }
    }));

    return buildProcess.exit;
  }

  return (
    <div
      className={`${
        shown ? "block" : "hidden"
      } fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-black/40`}
    >
      <div className="w-4/5 max-w-sm bg-white mx-auto mt-[25%] -translate-y-1/4 p-9 rounded-lg">
        <button
          className="absolute top-4 right-4"
          onClick={() => setShown(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[3px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Export Buttons */}
        {!loading ? (
          <div>
            <button onClick={() => handleExportData()} className="py-2 px-4 bg-blue-400 mx-auto mb-4 rounded-lg block font-bold text-white hover:bg-blue-600">Export Data</button>
            <button onClick={() => handleExportWebsite()} className="py-2 px-4 bg-blue-400 mx-auto rounded-lg block font-bold text-white hover:bg-blue-600">Export Website</button>
          </div>
          ) : (
          <div className="text-center">
            <h2 className="font-bold text-2xl mb-4">Exporting...</h2>
            <div role="status">
              <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Exporting...</span>
            </div>
          </div>
          ) 
        }
        
      </div>
    </div>
  );
}
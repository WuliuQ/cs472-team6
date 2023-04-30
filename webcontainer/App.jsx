import { pageData } from "./pageData.js";
import { registeredComponents } from "./registeredComponents.js";

function App() {
  const { componentsList } = pageData;

  return (
    <div className="bg-white dark:bg-black">
      {componentsList.map((component) => {
        let PreviewComponent = registeredComponents.get(component.name) || null;
        if (!PreviewComponent){
          return null;
        }
        return (
          <PreviewComponent key={component.id} options={component.options}/>
        )
      })}
    </div>
  )
}

export default App

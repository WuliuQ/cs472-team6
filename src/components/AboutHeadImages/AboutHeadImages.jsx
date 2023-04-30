export default function AboutHeadImages({options}) {
  const {image1, image2, image3, image4} = options;

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 mx-4">
        {/*Image 1*/}
        <img src={image1} alt="Image 1" />
      </div>
      
      <div className="w-1/3 mx-4">
        {/*Image 2*/}
        <img src={image2} alt="Image 2" />
      </div>
      
      <div className="w-1/3 mx-4">    
          {/*Image 3*/} 
          <img src={image3} alt="Image 3" className="mb-4" />
          
          {/*Image 4*/}
          <img src={image4} alt="Image 4" />
      </div>
    </div>

  );
}
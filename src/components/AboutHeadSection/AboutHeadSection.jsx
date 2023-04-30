export default function AboutHeadSection({options}) {
  const {name, gradient, description} = options;

  return (
    <div className="flex max-w-[882px] mx-auto justify-between p-4">
      <div className="mr-4 max-w-[465px]">
        <p className="text-4xl font-bold font-main text-black dark:text-white">Hi, I am</p>
        <p className={`text-4xl font-bold break-words bg-gradient-to-r ${gradient} inline-block text-transparent bg-clip-text`}>{name}</p>
      </div>

      <div className="max-w-[505px] text-black dark:text-white">
        <p>{description}</p>
      </div>

    </div>
  );
}
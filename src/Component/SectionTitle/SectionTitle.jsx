

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
       <div className="md:w-1/3 mb-7"> 
            <p className="text-black font-bold text-5xl">{subHeading}</p>
            <h3 className="text-xl py-2 ">{heading}</h3>
        </div>
    </div>
  );
};

export default SectionTitle;
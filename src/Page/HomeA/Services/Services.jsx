

const Services = () => {
  return (
    <div className="hero bg-base-200   mb-12 py-28 pl-32 pr-32 flex">
      {/* <div className="grid md:grid-cols-2  gap-4 my-3" > */}
        <div className="">
          <h1 className="text-5xl">Services</h1>
          <p>There are many variations of passages of
            Lorem Ipsum available, but the majority
            have suffered alteration.</p>
        </div>
        <div className="">
          <p>Request Custom Service</p>

        </div>
        <div className="grid md:grid-cols-2  gap-4 my-3" >

        <div className="card text-black border-b-4 btn-outline  hover:bg-rose-600  ">
          <div className="card-body ">
            <h2 className="card-title">Business Stratagy</h2>
            <p>There are many variations of passages of Lorem
              Ipsum available, but the majority have
              suffered alteration.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card text-black border-b-4 btn-outline  hover:bg-rose-600  ">
          <div className="card-body ">
            <h2 className="card-title">Website Development</h2>
            <p>There are many variations of passages of Lorem
              Ipsum available, but the majority have
              suffered alteration.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card text-black border-b-4 btn-outline  hover:bg-rose-600  ">
          <div className="card-body ">
            <h2 className="card-title">marketing & Reporting </h2>
            <p>There are many variations of passages of Lorem
              Ipsum available, but the majority have
              suffered alteration.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="card text-black border-b-4 btn-outline  hover:bg-rose-600  ">
          <div className="card-body ">
            <h2 className="card-title">Mobile App Development</h2>
            <p>There are many variations of passages of Lorem
              Ipsum available, but the majority have
              suffered alteration.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Services;
// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import imageA from "../../../assets/image/about-3.jpg";

const About = () => {
  return (
    <div className="flex gap-12  mt-12 mb-12">
      <img src={imageA} alt="" />

      <div className="my-24">
        <h1 className="text-5xl text-black font-bold my-4">About</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

        <div className="flex my-8">
          <div className="">
            <h1 className="text-5xl text-black my-4">Who we are</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          </div>
          <div className="">
            <h1 className="text-5xl text-black my-4">Who we are</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          </div>
        </div>
      </div>




    </div>
  );
};

export default About;
const about = {
  title: "About",
  description:
    "Cyber ​​Country Development Front end 2020–2021 He held the position of Front end developer. Participated in the development project of the admin panel for the web resource. Developed various types of Lending sites and the company's corporate site. Freelance Front end 2021–2021 Development of leading sites.",
  subDescription: "Freelance Front end 2021–2021 Development of leading sites.",
};

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen xs:h-auto xs:py-8 bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:py-10">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4  border-gray-500">
            {about.title}
          </p>
        </div>
        <p className="text-xl mt-20 sm:mt-10">{about.description}</p>
        <br />
        <p className="text-xl">{about.subDescription}</p>
      </div>
    </div>
  );
};

export default About;

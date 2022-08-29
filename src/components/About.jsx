import React from "react";

const About = () => {
    return (
        <div name='about' className="w-full h-screen  xs:h-auto xs:py-8 bg-gradient-to-b  from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:py-10">
                <div className="pb-8">
                    <p className="text-4xl  font-bold inline border-b-4  border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20 sm:mt-10">

                    Cyber ​​Country Development Front end
                    2020–2021
                    He held the position of Front end developer. Participated in the development project of the admin panel
                    for the web resource. Developed various types of Lending sites and the company's corporate site.
                </p>
                <br />
                <p className="text-xl">
                    Freelance Front end
                    2021–2021
                    Development of leading sites.
                </p>
            </div>
        </div>
    )
}

export default About;
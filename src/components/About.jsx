import React from "react";

const About = () => {
    return(
        <div name='about' className="w-full h-screen  xs:h-auto xs:py-8 bg-gradient-to-b  from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:py-10">
                <div className="pb-8">
                    <p className="text-4xl  font-bold inline border-b-4  border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20 sm:mt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae deleniti excepturi sit ducimus at architecto laborum labore incidunt aspernatur, possimus facere, nisi doloremque nam, consequuntur asperiores cumque quasi quaerat. Incidunt!
                    Quidem quae nostrum, consequatur error voluptas magni porro, cupiditate corporis ullam eos perferendis assumenda iure doloribus repellendus minus, sequi amet. Praesentium necessitatibus nesciunt cum aliquam ipsam id aperiam. Porro, autem.
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae deleniti excepturi sit ducimus at architecto laborum labore incidunt aspernatur, possimus facere, nisi doloremque nam, consequuntur asperiores cumque quasi quaerat. Incidunt!
                    Quidem quae nostrum, consequatur error voluptas magni porro, cupiditate corporis ullam eos perferendis assumenda iure doloribus repellendus minus, sequi amet. Praesentium necessitatibus nesciunt cum aliquam ipsam id aperiam. Porro, autem.
                </p>
            </div>
        </div>
    )
}

export default About;
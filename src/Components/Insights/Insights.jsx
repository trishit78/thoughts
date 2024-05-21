import React from "react";
import Card from "../Card/Card";
import ButtonCard from "../Button/Button";
import Card2 from "../Card/Card2";
const Insights = () => {
  return (
    <div className="bg-[#f8f9fb] pt-12 pb-16">
      <div className="text-center text-5xl font-bold">OUR LATEST INSIGHTS</div>
      <div className="mt-4">
        <div className="text-center text-lg text-gray-600">
          Stay updated and inspired with our latest insights into a variety of
          topics,ranging from technology trends to lifestyle tips.
        </div>
      </div>

      <div className="mt-16 pl-8 pr-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card2
          photo="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          name="Lily Oliver"
          title="@lillyoliver12"
          text="Kindness costs nothing, but its value is immeasurable. Spread love and positivity wherever you go."
          ig_count="1.6"
          repost="95"
          share="23"
          date="Yesterday, 11:20 PM"
          category="Thought"
          img="https://images.pexels.com/photos/804270/pexels-photo-804270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Card2
          photo="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
          name="John Martin"
          title="@martingerriclub"
          text="It is critical to emphasize the holistic character of wellbeing,which includes the physical,mental and emotional aspects of health. "
          ig_count="1.2"
          repost="75"
          share="54"
          date="Today,07:36 AM"
          category="Thought"
          img="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Card2
          photo="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="Lucas Ryan"
          title="@imlucasryan"
          text="Embrace change, for it is the only constant in life.Adaptability is the key to growth and resilience.So be..."
          ig_count="2.2"
          repost="45"
          share="23"
          date="Today,08:46 AM"
          category="Blog"
          img="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="mt-12">
        <ButtonCard name={"VIEW MORE"} />
      </div>
    </div>
  );
};

export default Insights;

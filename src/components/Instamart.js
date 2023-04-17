import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="text-xl font-bold">{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      {<p>{isVisible && description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
  });
  return (
    <div>
      <h1 className="font-bold text-4xl m-2 p-2">Instamart</h1>
      <Section
        title="About Instamart"
        description="Listen up, because I'm only going to say this once. You are capable of achieving anything you set your mind to. Don't let anyone tell you otherwise. You are the master of your own destiny, and you have the power to make your dreams a reality.
                     But remember, success doesn't come easy. It takes hard work, determination, and a willingness to take risks. You need to be willing to do whatever it takes to achieve your goals. Don't be afraid to step out of your comfort zone and take on new challenges.
                     And when the going gets tough, don't give up. Keep pushing forward, even when it feels like everything is working against you. That's when you need to dig deep and find the strength to keep going.
                     So go out there and make something of yourself. Don't settle for mediocrity. Be the best you can be, and never stop striving for excellence. Because in the end, it's not about the money or the power. It's about leaving your mark on the world, and making a difference in the lives of others. Now get out there and make it happen."
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
          })
        }
      />

      <Section
        title="Team Instamart"
        description="This is the about section in Instamart. They have 5000 members"
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;

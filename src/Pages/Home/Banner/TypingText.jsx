import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">
        <p className="font-semibold">
          <Typewriter
            words={[
              "IA & Automatización",
              "QA Engineering",
              "Software Development",
            ]}
            
            loop={0}
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1200}
          />
        </p>
      </h1>
    </div>
  );
};

export default TypingAnimation;

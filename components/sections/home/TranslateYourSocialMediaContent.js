import TextInput from '../../UI/TextInput';
import Button from '../../UI/Button';
import phoneInHandGraphic from '../../../public/img/graphics/phone-in-hand.png';
import Shadow from '../../UI/Shadow';
import Border from '../../UI/Border';
import Image from 'next/image';
import { MILESTONES } from '../../../constants/constants';
import { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';

const TranslateYourSocialMediaContent = () => {
  return (
    <section className="section m-horizontal mt-s6 lg:mt-s15">
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="title mb-s2">
            You{' '}
            <span className="gradient-text gradient-2 xs:inline-block">
              create.
            </span>{' '}
            We{' '}
            <span className="gradient-text gradient-2 xs:inline-block">
              translate.
            </span>
          </h1>
          <p className="body mb-8">
            Our mission is simple - to grow your international influence,
            starting with translations, A-View at a time.
          </p>
          <PhoneNumberForm />
        </div>
        <div className="mx-auto mt-s9 -mb-2 max-w-[500px] lg:-m-s2 lg:max-w-full">
          <Image src={phoneInHandGraphic} alt="landing-graphic" />
        </div>
      </div>
      <Milestones />
    </section>
  );
};

const PhoneNumberForm = () => {
  return (
    <form className="lg:flex lg:justify-between lg:gap-s2">
      <div className="mb-s2 lg:mb-0 lg:grow">
        <TextInput
          placeholder="Phone Number"
          bgColor="black"
          textColor="white"
        />
      </div>
      <Button type="primary" purpose="submit">
        Get Started
      </Button>
    </form>
  );
};

const Milestones = () => {
  return (
    <Shadow classes="w-full">
      <Border classes="w-full" borderRadius="2xl">
        <div className="grid justify-center gap-s10 rounded-2xl bg-black py-10 md:grid-cols-3 md:gap-[10%] md:py-s3">
          {MILESTONES.map((milestone) => (
            <Milestone key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </Border>
    </Shadow>
  );
};

const Milestone = ({ milestone }) => {
  const [number, setNumber] = useState(0);
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const updateNumber = () => {
      if (isOnScreen) {
        if (number < milestone.end) {
          setNumber((number) => Math.min(number + 2, milestone.end));
          setTimeout(updateNumber, 2000 / milestone.end);
        }
      }
    };
    updateNumber();
  }, [isOnScreen]);

  return (
    <div className="text-center">
      <p
        className="gradient-text gradient-1 text-8xl font-bold"
        ref={elementRef}
      >
        {number}
        {milestone.suffix}
      </p>
      <p className="mx-auto max-w-[220px] text-2xl font-bold text-white">
        {milestone.text}
      </p>
    </div>
  );
};

export default TranslateYourSocialMediaContent;

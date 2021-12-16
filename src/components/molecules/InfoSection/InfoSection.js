import React from 'react';
import mobileGear from 'assets/images/shared/mobile/image-best-gear.jpg';
import tabletGear from 'assets/images/shared/tablet/image-best-gear.jpg';
import desktopGear from 'assets/images/shared/desktop/image-best-gear.jpg';
import { Wrapper } from './InfoSection.styles';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
const InfoSection = () => {
  const width = useWindowSize();
  return (
    <Wrapper>
      <img src={changePhoto(mobileGear, tabletGear, desktopGear, width)} alt="" />
      <div>
        <h3>
          Bringining you the <span>best</span> audio gear
        </h3>
        <p>
          Located at the heart of New YorkCity, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </Wrapper>
  );
};

export default InfoSection;

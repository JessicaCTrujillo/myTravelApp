import React from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
      <img src="/images/placeholder.png" />
      <img src="/images/placeholder.png" />
      <img src="/images/placeholder.png" />
    </Flickity>
  );
}

export default FlickityCarousel;

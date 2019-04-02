import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://neoreach.com/wp-content/uploads/2016/07/140911_BURKARD_83234-XL-1-1.jpg",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  },
  {
    src: "http://www.pacificvoyagers.org/wp-content/uploads/2018/01/002.jpg",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  },
  {
    src:
      "https://static.toiimg.com/thumb/64986478/Cappadocia.jpg?width=748&height=499",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  },
  {
    src:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1517869165%2Fsakura-temple-pagoda-japan-VISITJP0218.jpg%3Fitok%3DsLaQGYBv&w=450&c=sc&poi=face&q=85",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  },
  {
    src:
      "http://cdn.cnn.com/cnnnext/dam/assets/190318115902-11-19-spring-places-travel-squaw.jpg",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  },
  {
    src:
      "https://i.barkpost.com/wp-content/uploads/2016/01/wow_808x500.jpg?q=70&fit=crop&crop=entropy&w=808&h=500",
    altText: "Click for Travel Specials",
    caption: "Click for Travel Specials"
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className=""
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href="/specials">
            <img
              className="col-sm-8 offset-md-2"
              style={{ height: "500px" }}
              src={item.src}
              rounded
              alt={item.altText}
            />
            <CarouselCaption
              // captionText={item.caption}
              captionHeader={item.caption}
            />
          </a>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Example;

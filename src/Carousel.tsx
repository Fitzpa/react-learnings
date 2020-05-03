import React from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0,
  };
  // getDerivedStateFromProps takes in a set of properties, does some filtering on them, and then passes that on to the component
  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["https://placecorgi.com/600/600"];
    // eslint-disable-next-line
    if (media.length) {
      // eslint-disable-next-line
      photos = media.map(({ large }) => large);
    }

    // Here we are returning whatever object we want returned to State
    return { photos };
  }
  // the *this* here will always be where it is written instead of where it is invoked because we are using an arrow function and arrow functions do not create new context
  handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    // makes certain that it is an html element
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    // makes certain that there is an index on the target dataset
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index, //data set is looking at data-index from below. Everything stored in a dataset is a sting so to coerce it to be a number we put a + in front. We could have used something like parseInt() here instead
      });
    }
  };
  public render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

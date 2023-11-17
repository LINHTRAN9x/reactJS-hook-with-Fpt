import React from "react";
import "./ShowImg.scss";

class ShowImg extends React.Component {
  state = {
    images: [
      {
        img: "https://images.pexels.com/photos/18933192/pexels-photo-18933192/free-photo-of-g-anh-sang-nh-ng-ng-i-ngh-thu-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Hello one",
      },
      {
        img: "https://images.pexels.com/photos/19036675/pexels-photo-19036675/free-photo-of-thanh-ph-m-c-sach-du-l-ch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Hello two",
      },
      {
        img: "https://images.pexels.com/photos/18827685/pexels-photo-18827685/free-photo-of-nui-canh-d-ng-nong-thon-nong-nghi-p.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Hello three",
      },
    ],
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        {images.map((image, index) => {
          return (
            <div className="image-container">
              <img src={image.img} />
              <h3>{image.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ShowImg;

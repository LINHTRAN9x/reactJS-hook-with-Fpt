import React from "react";

function User({ name, pic }) {
  return (
    <div>
      <img src={pic} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default function ShowImg() {
  const images = [
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
  ];

  return (
    <div>
      {images.map((image, index) => (
        <User key={index} name={image.name} pic={image.img} />
      ))}
    </div>
  );
}

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function HotelGrid() {
  return (
    <ImageList className=" flex-wrap: wrap 	flex-shrink: 0">
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.price}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "SkyCity Hotel",
    price: "$220.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Summit Lodge Hotel",
    price: "255.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "DawnRose Hotel",
    price: "300NZD",
  },
  {
    img: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Park Hotel",
    price: "157.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/949406/pexels-photo-949406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fallerton Hotel",
    price: "200.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "High Street Hotel",
    price: "210.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Painted Hotel",
    price: "310.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/97904/pexels-photo-97904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "CobbleStreet Hotel",
    price: "$240.00",
  },
  {
    img: "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Riccarton Hotel",
    price: "160.00NZD",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "SkyView Hotel",
    price: "215.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "MountainView Lodge",
    price: "230.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/3773577/pexels-photo-3773577.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Grand Royal",
    price: "225.00NZD",
    cols: 2,
  },

  {
    img: "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Central Hotel",
    price: "205.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1150962/pexels-photo-1150962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "NorthWatch Hotel",
    price: "195.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/6301172/pexels-photo-6301172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "BayView Hotel",
    price: "190.00NZD",
    cols: 2,
  },
];

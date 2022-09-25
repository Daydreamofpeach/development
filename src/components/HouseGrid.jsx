import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function HouseGrid() {
  return (
    <ImageList className=" flex-wrap: wrap p-30	flex-shrink">
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
    img: "https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "2 Bedroom House",
    price: "$240.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/6267583/pexels-photo-6267583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "4 Bedroom House",
    price: "375.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/5071177/pexels-photo-5071177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3 Bedroom House",
    price: "310NZD",
  },
  {
    img: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3 Bedroom House",
    price: "335.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/8031883/pexels-photo-8031883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "2 Bedroom House",
    price: "240.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/8031875/pexels-photo-8031875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "2 Bedroom House",
    price: "250.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/4061970/pexels-photo-4061970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3 Bedroom House",
    price: "280.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/145661/pexels-photo-145661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3 Bedroom House",
    price: "$310.00",
  },
  {
    img: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "4+ Bedroom Beach House",
    price: "400.00NZD",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3 Bedroom House",
    price: "355.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "4 Bedroom House",
    price: "330.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "4 Bedroom House",
    price: "280.00NZD",
    cols: 2,
  },
];

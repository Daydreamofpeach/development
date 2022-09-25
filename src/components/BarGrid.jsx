import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function BarGrid() {
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
    img: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Jacobs Creek Glass",
    price: "$8.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/162691/wine-bottle-white-lemons-162691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sauvignon blanc glass",
    price: "8.50NZD",
  },
  {
    img: "https://images.pexels.com/photos/3461205/pexels-photo-3461205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Bollinger",
    price: "50NZD",
  },
  {
    img: "https://images.pexels.com/photos/2897305/pexels-photo-2897305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Grand Barossa Glass",
    price: "10.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1479706/pexels-photo-1479706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wine Bottle",
    price: "35.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/2820146/pexels-photo-2820146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "White Wine Glass",
    price: "7.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },

  {
    img: "https://images.pexels.com/photos/1694853/pexels-photo-1694853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Glenfiddich Glass",
    price: "$10.00",
  },
  {
    img: "https://images.pexels.com/photos/3490355/pexels-photo-3490355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wente Bottle",
    price: "30.00NZD",

    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coke Glass Bottle",
    price: "5.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/2286972/pexels-photo-2286972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coronoa",
    price: "8.00NZD",
  },
 
];

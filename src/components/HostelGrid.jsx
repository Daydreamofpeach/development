import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function HostelGrid() {
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
    img: "https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "BeachSide Hostel",
    price: "$50.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Queenstown Hostel",
    price: "57.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/11382366/pexels-photo-11382366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "D&D Hostel",
    price: "30NZD",
  },
  {
    img: "https://images.pexels.com/photos/4083217/pexels-photo-4083217.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Harbor Hostel",
    price: "35.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/12850246/pexels-photo-12850246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Auckland Hostel",
    price: "40.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/2111757/pexels-photo-2111757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hostel Wellington",
    price: "45.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/2417264/pexels-photo-2417264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wellington City Hostel",
    price: "40.00NZD",
  },
  
  {
    img: "https://images.pexels.com/photos/2906295/pexels-photo-2906295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Auckland City Hostel",
    price: "25.00NZD",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/12509907/pexels-photo-12509907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Old Auckland Train Station",
    price: "30.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/1120068/pexels-photo-1120068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dunedin Central Hostel",
    price: "30.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/2043257/pexels-photo-2043257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Theater Square Hostel",
    price: "22.50NZD",
    cols: 2,
  },
];

 
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function FoodGrid() {
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
    img: "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Breakfast Stack",
    price: "$20.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Burger & Fries",
    price: "17.50NZD",
  },
  {
    img: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Strawberrys & Cream",
    price: "10NZD",
  },
  {
    img: "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coffee",
    price: "5.00NZD",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dumpling Soup",
    price: "20.00NZD",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "HomeMade IceCream",
    price: "15.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pasta Salad",
    price: "20.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Bacon And Holumi Salad",
    price: "$20.00",
  },
  {
    img: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Asparagus & Chiken Sautee",
    price: "25.00NZD",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lamb Rack",
    price: "35.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/4669250/pexels-photo-4669250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Steak Swekers",
    price: "30.00NZD",
  },
  {
    img: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Poached Egg, Avocado Toast",
    price: "12.50NZD",
    cols: 2,
  },
];

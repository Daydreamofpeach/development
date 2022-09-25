import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function MotelGrid() {
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
    img: "https://www.newzealand.com/assets/Operator-Database/img-1622038481-7144-3515-20210427_094559__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Tāhuna Beach Holiday Park & Motel",
    price: "$180.00NZD",
    rows: 1,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1590105388-6666-30323-rsz_villa__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsNzUsImpwZyJd.jpg",
    title: "Kennedy Park Resort Napier",
    price: "90.00NZD",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1586212634-3003-7697-p-808913EB-C1EB-28B7-CDF50C11B702DCDF-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Cranford Oak Motel",
    price: "130.00NZD",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/e92e5e892f/img-1556712074-8738-17793-p-7C0EB7E8-0EE9-E2CF-7D15980B590CC0F3-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Amity Court Motel",
    price: "130.00NZD",
    cols: 2,
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/97efb2948b/img-1536077302-4389-26582-p-4B6E814D-00D6-B208-E1CB1E4A71979C01-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsIkpQRyJd.JPG",
    title: "Marakura Deluxe Lakeview Motels",
    price: "159.00NZD",
    cols: 2,
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1634864801-4997-832-roma__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsInBuZyJd.png",
    title: "Roma on Riccarton Luxury Motel",
    price: "130.00NZD",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.newzealand.com/assets/Tourism-NZ/Other/b88f01814e/img-1570101152-7326-645-p-E2CDE526-F411-F9A6-C39B919F8BB2FFE0-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Off Broadway Motel",
    price: "100.00NZD",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1583891477-8169-27349-120Bella20Vista20Wanaka20-20set20in20the20heart20of20the20town__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.2028129.jpg",
    title: "Bella Vista Motel Wanaka",
    price: "$145.00",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1601605041-8747-5852-1br1__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Bella Vista Motel Taupo",
    price: "110.00NZD",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1614543970-8440-20813-entrance-vacancy-2020__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZWciXQ.jpeg",
    title: "Bella Vista Motel Nelson",
    price: "120.00NZD",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1583891958-3138-9132-p-FDABECB4-AC96-5056-11C9EC8E2AF7280A-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsImpwZyJd.jpg",
    title: "Blue Peaks Lodge",
    price: "135.00NZD",
  },
  {
    img: "https://www.newzealand.com/assets/Operator-Database/img-1662452857-4820-8231-p-07547864-AF67-76A3-085758FFC0925993-2544003__aWxvdmVrZWxseQo_CropResizeWzI1NCwxNjksODAsIkpQRyJd.JPG",
    title: "Airport Delta Motel",
    price: "150.00NZD",
    cols: 2,
  },
];

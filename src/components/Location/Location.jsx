import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// const exampleMapStyles = [
//   {
//     featureType: "all",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "landscape",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#f1efe8",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         gamma: "1.19",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         gamma: "0.00",
//       },
//       {
//         weight: "2.07",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#b2ac83",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         color: "#b2ac83",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#8ac0c4",
//       },
//     ],
//   },
// ];

const Location = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f1efe8",
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on",
              },
              {
                gamma: "1.19",
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                gamma: "0.00",
              },
              {
                weight: "2.07",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#b2ac83",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#b2ac83",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#8ac0c4",
              },
            ],
          },
        ],
      }}
      defaultZoom={8}
      defaultCenter={{ lat: 52.2795152, lng: -1.9399627 }}
    >
      <Marker position={{ lat: 52.2795152, lng: -1.9399627 }} />
    </GoogleMap>
  ))
);
export default Location;

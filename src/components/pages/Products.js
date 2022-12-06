import React from 'react';
import '../../App.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function CardComponent() {
  return (
   
          <div className="w-full p-2 shadow-xl lg:flex lg:max-w-lg border-2 border-color:#000">
              <img
                  className="object-cover w-full lg:w-40 lg:h-40"
                  src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                  alt="image"
              />
              <div className="pl-2">
                  <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                      react tailwind horizontal card image
                  </h4>
                  <p className="mb-2 leading-normal">
                      react tailwind css horizontal card with image It is a long
                      established fact that a reader will be distracted by the
                      readable content.
                  </p>
                  <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                      Read more
                  </button>
              </div>
          </div>
      );
  }
  

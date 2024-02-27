import { Camera, Color, Point, Side, XYWH } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

const COLORS = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId:number):string {
  return COLORS[connectionId % COLORS.length];
};

export function pointerEventToCanvasPoint (
  e: React.PointerEvent,
  camera: Camera,
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}

export function colorToCss(color: Color){
  return `#${color.r.toString(16).padStart(2,"0")}${color.g.toString(16).padStart(2,"0")}${color.b.toString(16).padStart(2,"0")}`
}

export function resizeBounds(
  bounds: XYWH,
  corner: Side,
  point:Point
  ): XYWH {
    const result = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
    };

    if((corner & Side.Left) === Side.Left){
      result.x = Math.min(point.x, bounds.x + bounds.width);
      result.width = Math.abs(bounds.x + bounds.width - point.x);
    }

    if((corner & Side.Right) === Side.Right){
      result.x = Math.min(point.x, bounds.x);
      result.width = Math.abs(point.x - bounds.x);
    }

    if((corner & Side.Top) === Side.Top){
      result.y = Math.min(point.y, bounds.y + bounds.height);
      result.height = Math.abs(bounds.y + bounds.height - point.y);
    }

    if((corner & Side.Bottom) === Side.Bottom){
      result.y = Math.min(point.y,  bounds.y);
      result.height = Math.abs(point.y - bounds.y);
    }

    return result;
  };
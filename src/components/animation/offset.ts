import type { FadeDirection } from "@/types";

export const getOffset = (direction: FadeDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    default:
      return {};
  }
};

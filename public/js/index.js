import imagesData from "../data/images_data.js";

import Image from "./image_gallery.js";

const imageInstances = imagesData.map(
  (data) =>
    new Image(
      data.link,
      data.imageSrc,
      data.hoverImageSrc,
      data.altImageSrc,
      data.alt,
      data.arrowSrc,
      data.subtitle,
      data.description
    )
);

// Render each image
imageInstances.forEach((image) => image.render());

import imagesData from "./image_data.js";

import Image from "./image_gallery.js";

// Create instances of the Image class
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

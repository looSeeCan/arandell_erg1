///TODO: I built a class out inserting an Html string. Rebuild the class using Modular Appending.
///This did not have to be a class. I was just practicing. Might turn it to just a funcition.

///Data-Driven approach

export default class Image {
  constructor(
    anchorHref,
    srcset1,
    srcset2,
    imgSrc,
    imgAlt,
    hoverBoxImg,
    hoverBoxH3,
    hoverBoxParagragh
  ) {
    Object.assign(this, {
      anchorHref,
      srcset1,
      srcset2,
      imgSrc,
      imgAlt,
      hoverBoxImg,
      hoverBoxH3,
      hoverBoxParagragh,
    });
  }

  ///method to create elements from a data structure
  createElement({ tag, attributes, children, textContent }) {
    const element = document.createElement(tag);

    // /set attributes
    if (attributes) {
      ///Object.entries returns an array {key: value} = [key, value]
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }

    if (children) {
      children.forEach((child) => {
        const childElement = this.createElement(child); ///calling a method inside a method. Recursion
        element.appendChild(childElement);
      });
    }

    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }

  render() {
    ///define the structure of the anchor element. TODO: should this be an array of objects? should it be?
    const elementData = {
      tag: "a",
      attributes: {
        href: `${this.anchorHref}`,
        class: "cs-item",
      },
      children: [
        {
          tag: "picture",
          attributes: {
            class: "cs-picture",
          },
          children: [
            {
              tag: "source",
              attributes: {
                media: "(min-width: 600px)",
                srcset: `${this.srcset1}`,
              },
            },
            {
              tag: "source",
              attributes: {
                media: "(min-width: 601px)",
                srcset: `${this.srcset2}`,
              },
            },
            {
              tag: "img",
              attributes: {
                src: `${this.imgSrc}`,
                alt: `${this.imgAlt}`,
                loading: "lazy",
                decoding: "async",
                width: "346",
                height: "346",
              },
            },
          ],
        },
        {
          tag: "div",
          attributes: {
            class: "cs-hover-box",
          },
          children: [
            {
              tag: "picture",
              attributes: {
                class: "cs-icon",
              },
              children: [
                {
                  tag: "img",
                  attributes: {
                    src: `${this.hoverBoxImg}`,
                    alt: "logo",
                    loading: "lazy",
                    decoding: "async",
                    width: "20",
                    height: "20",
                    "aria-hidden": "true",
                  },
                },
              ],
            },
            {
              tag: "h3",
              attributes: {
                class: "cs-h3",
              },
              textContent: `${this.hoverBoxH3}`,
            },
            {
              tag: "p",
              attributes: {
                class: "cs-hover-box-text",
              },
              textContent: `${this.hoverBoxParagragh}`,
            },
          ],
        },
      ],
    };

    ///Call the method above to create the anchor element using the data structure
    const anchorElement = this.createElement(elementData);

    ///append
    const csImageGroup = document.querySelector(".cs-image-group");
    csImageGroup.appendChild(anchorElement);
  }
}

/// calls the render method. there is an object in the render method. this object has data that will be used to create the html structure
///create an instance of the class
/// the render method calls the createElement method passing the object as an argument
/// the createElement method destructures the object
/// creates an element with the key
///loops thru the attributes and sets them to the element
/// the render method recieves a the element in a variable which is appended appropriately

///TODO: rename variables appropriately.

let openRequest = indexedDB.open("test", 1);
console.log(openRequest);

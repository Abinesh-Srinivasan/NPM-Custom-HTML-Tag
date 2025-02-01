class AbineshElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Attributes with default values
    const text = this.getAttribute("text") || "3D Abinesh!";
    const size = this.getAttribute("size") || "50px";
    const textColor = this.getAttribute("textColor") || "white";
    const fontFamily = this.getAttribute("font-family") || "Arial, sans-serif";
    const fontWeight = this.getAttribute("font-weight") || "bold";
    const textTransform = this.getAttribute("text-transform") || "uppercase";

    // 3D shadow colors
    const shadowColor1 =
      this.getAttribute("shadow-color1") || "rgba(0, 0, 255, 0.8)"; 
    const shadowColor2 =
      this.getAttribute("shadow-color2") || "rgba(255, 0, 0, 0.8)"; 
    const shadowColor3 =
      this.getAttribute("shadow-color3") || "rgba(0, 255, 0, 0.8)"; 

    // Text container
    const textElement = document.createElement("div");
    textElement.classList.add("abinesh-text");
    textElement.textContent = text;

    // Styles
    const style = document.createElement("style");
    style.textContent = `
            .abinesh-text {
                font-size: ${size};  
                font-weight: ${fontWeight};  
                text-transform: ${textTransform};  
                color: ${textColor}; 
                font-family: ${fontFamily};
                text-shadow: 4px 4px 10px ${shadowColor1},
                             -4px -4px 10px ${shadowColor2},
                             2px 2px 5px ${shadowColor3};
                display: inline-block;
                padding: 10px;
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(textElement);
  }
}

// Custom HTML Tag
customElements.define("abinesh-text", AbineshElement);

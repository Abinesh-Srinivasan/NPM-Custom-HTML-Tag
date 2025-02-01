# abinesh-text

A custom HTML Web Component that allows you to create **3D attractive text** with customizable styles such as **font-size, color, font-family, font-weight, text-transform, and 3D shadow colors**.

## Features
- Easy-to-use **custom HTML tag** (`<abinesh-text>`).
- Supports **dynamic text size, color, font-family, and font-weight**.
- Allows users to **customize 3D shadow colors**.
- Works with **any JavaScript framework** (React, Vue, Angular) or plain HTML.
- Lightweight and **zero dependencies**.

## Installation

### Using NPM
```sh
npm install abinesh-text
```

### Importing by Path
If you have the package locally, you can import it directly:
```html
<script type="module" src="./node_modules/abinesh-text/abinesh.js"></script>
```

### Using a CDN
```html
<script type="module" src="https://unpkg.com/abinesh-text"></script>
```

## Usage

### Basic Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abinesh Text Example</title>
    <script type="module" src="https://unpkg.com/abinesh-text"></script>
</head>
<body>
    <abinesh-text text="Hello, World!"></abinesh-text>
</body>
</html>
```

### Customizing Appearance
```html
<abinesh-text
    text="Custom 3D Text"
    size="60px"
    textColor="gold"
    font-family="Arial"
    font-weight="bold"
    text-transform="uppercase"
    shadow-color1="blue"
    shadow-color2="red"
    shadow-color3="green">
</abinesh-text>
```

### Using in React
```jsx
import React from "react";
import "abinesh-text";

const App = () => {
  return (
    <div>
      <abinesh-text text="Hello from React!" size="50px" textColor="purple"></abinesh-text>
    </div>
  );
};

export default App;
```

## Attributes
You can customize the text using the following attributes:

| Attribute       | Description                                    | Default Value |
|---------------|------------------------------------------------|--------------|
| `text`        | The text content inside the component          | `3D Abinesh!` |
| `size`        | Font size of the text                         | `50px`       |
| `textColor`       | Text color                                    | `white`      |
| `font-family` | Font family for the text                      | `sans-serif` |
| `font-weight` | Font weight (e.g., normal, bold)              | `bold`       |
| `text-transform` | Transforms text (uppercase, lowercase, capitalize) | `uppercase`  |
| `shadow-color1` | First 3D shadow color                        | `rgba(0, 0, 255, 0.8)` (Blue) |
| `shadow-color2` | Second 3D shadow color                       | `rgba(255, 0, 0, 0.8)` (Red) |
| `shadow-color3` | Third 3D shadow color                        | `rgba(0, 255, 0, 0.8)` (Green) |

---

🌟 **Enjoy coding with `abinesh-text`!**

# Amazon-Style Web Interface

This project implements a modern, responsive web interface inspired by Amazon's design principles. It includes a navigation bar, an image carousel, and a grid layout for displaying product cards, each styled for a clean, user-friendly experience.

## Features

### Navigation Bar
- **Responsive and Modern:** A navigation bar with links styled for hover and click effects.
- **Color Theme:** Dark background with consistent branding colors (Amazon-inspired dark blue and white).

### Image Carousel
- **Dynamic:** Automatically transitions through images every few seconds.
- **Manual Controls:** Includes "Next" and "Previous" buttons for manual navigation.
- **Responsive Design:** Adapts to different screen sizes.

### Product Display Grid
- **Responsive Layout:** A grid that dynamically adjusts based on the screen size.
- **Product Cards:** Each card contains:
  - Product Image
  - Name
  - Price
  - Rating
  - "Add to Cart" button with hover effects.
- **Hover Effects:** Subtle scaling and shadow effects to highlight product cards.

## Technologies Used
- **HTML:** Structural layout of the web interface.
- **CSS:** Styling for the navigation bar, carousel, and product display grid.
- **JavaScript:**
  - Image carousel functionality.
  - Fetching and displaying product data from an external API.

## Getting Started

### Prerequisites
- A modern web browser.
- A local server for running the HTML and JavaScript files (optional for static viewing).

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/amazon-style-web-interface.git
   ```
2. Navigate to the project directory:
   ```bash
   cd amazon-style-web-interface
   ```
3. Open `index.html` in your browser to view the project.

### Usage
- The navigation bar allows users to filter products by categories such as men, women, kids, electronics, and beauty.
- The image carousel showcases featured products or promotions.
- The product grid displays all products fetched from an external API.

## API Integration
The project integrates with a sample API to fetch product data dynamically. Ensure the API endpoint is accessible, or modify the URL in the JavaScript file to suit your needs:
```javascript
fetch("https://www.shoppersstack.com/shopping/products/alpha")
```

## Responsive Design
The layout is fully responsive and adapts to different screen sizes:
- Desktop: Full-sized grid and carousel.
- Tablet: Adjusts grid and image sizes.
- Mobile: Collapsible navigation and stacked grid layout.

## Customization
### Colors
Modify the colors in the CSS file to match your branding.
```css
background-color: #232f3e; /* Navigation bar */
background-color: #f0c14b; /* Add to Cart button */
```

### API Endpoint
Replace the API endpoint in the `mainfun` function to fetch data from your preferred source.

### Fonts
To use a custom font, update the `font-family` property in the CSS:
```css
body {
  font-family: 'Roboto', sans-serif;
}
```

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contribution
Feel free to submit issues or pull requests to improve the project. Contributions are welcome!

## Contact
For inquiries or suggestions, reach out at [your-email@example.com](mailto:anirudhsawant100@gmail.com).

---

Thank you for checking out this Amazon-style web interface project. Happy coding!


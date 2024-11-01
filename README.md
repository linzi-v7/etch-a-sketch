# Etch-a-Sketch

An interactive grid-based sketching application made with HTML, CSS, and JavaScript as part of The Odin Project's web development curriculum. This project demonstrates fundamental event handling and basic GUI manipulation.

![Etch-a-Sketch Demo](assets/etch-a-sketch-demo.gif)

## Project Description

**Etch-a-Sketch** allows users to create a dynamic, customizable grid and interact with it to produce colorful patterns. The user can define the grid size (between 1 and 100) to generate an `n x n` grid of squares. When a user hovers over a square, the square changes to a random color, and its opacity increases with each interaction, resetting after reaching maximum opacity.

### Key Features

- **Dynamic Grid Creation**: Users can input a grid size to create a customizable `n x n` grid. Grid size ranges from **1 to 100**.
- **Color Interaction**: Squares change to a random color on hover.
- **Opacity Darkening**: With each hover, the square’s opacity gradually darkens, resetting after maximum opacity.
- **Input Validation**: Grid size is restricted to a minimum of 1 and a maximum of 100 to prevent performance issues.

## Technologies Used

- **HTML**: Markup for structuring the application.
- **CSS**: Styling for the grid layout.
- **JavaScript**: Logic for event handling, grid generation, and color manipulation.

## Project Structure

- **index.html**: The main HTML file.
- **style.css**: Contains the styles for the grid and its elements.
- **script.js**: JavaScript file for handling grid generation, event listeners, and color manipulation.

## Credits

This project was developed as part of **The Odin Project**'s curriculum, a platform dedicated to teaching web development fundamentals.

## Future Improvements

- Add an option to clear the grid.
- Implement different event options, such as allowing users to click instead of hover to change colors, or adding an option to delete colors.
- Enable users to choose specific colors or set custom darkening rates.
- Implement a toggle for different/custom color themes or effects.


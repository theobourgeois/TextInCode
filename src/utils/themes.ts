export type ThemeKey = keyof typeof themes;

// generated these with chat gpt ;)
export const themes = {
  // Classic terminal-style theme with green text on a black background
  Terminal: {
    Keyword: "white",
    Punctuator: "white",
    Numeric: "white",
    Identifier: "white",
    Null: "white",
    String: "white",
    ColoredText: "#00FF00", // Green
    Background: "#000000",  // Black
  },
  // A dark theme inspired by the popular One Dark theme
  "One Dark": {
    Keyword: "#c678dd",     // Light purple
    Punctuator: "#abb2bf",  // Light gray
    Numeric: "#d19a66",     // Orange
    Identifier: "#e06c75",  // Soft red
    Null: "#56b6c2",        // Cyan
    String: "#98c379",      // Green
    ColoredText: "#61afef", // Light blue
    Background: "#282c34",  // Dark gray
  },
  // A light theme with soft and pastel colors
  "Pastel Light": {
    Keyword: "#7c4dff",     // Soft purple
    Punctuator: "#424242",  // Dark gray
    Numeric: "#ffab40",     // Light orange
    Identifier: "#00c853",  // Bright green
    Null: "#ff5252",        // Red
    String: "#ff80ab",      // Pink
    ColoredText: "#536dfe", // Blue
    Background: "#ffffff",  // White
  },
  // A high-contrast theme for readability in bright environments
  "High Contrast": {
    Keyword: "#ffcc00",     // Yellow
    Punctuator: "#000000",  // Black
    Numeric: "#ff3300",     // Bright red
    Identifier: "#0000ff",  // Blue
    Null: "#ff0000",        // Red
    String: "#33cc33",      // Green
    ColoredText: "#ffffff", // White
    Background: "#000000",  // Black
  },
  // A soft dark theme with shades of blue and gray
  "Blue Midnight": {
    Keyword: "#82aaff",     // Light blue
    Punctuator: "#c3e88d",  // Soft green
    Numeric: "#ffcb6b",     // Yellow-orange
    Identifier: "#c792ea",  // Lavender
    Null: "#89ddff",        // Soft cyan
    String: "#ecc48d",      // Light brown
    ColoredText: "#ffffff", // White
    Background: "#011627",  // Dark navy blue
  },
  // A vibrant theme with intense colors for a modern look
  "Vibrant Night": {
    Keyword: "#ff79c6",     // Hot pink
    Punctuator: "#ffb86c",  // Orange
    Numeric: "#bd93f9",     // Soft purple
    Identifier: "#8be9fd",  // Cyan
    Null: "#ff5555",        // Red
    String: "#50fa7b",      // Green
    ColoredText: "#f1fa8c", // Yellow
    Background: "#282a36",  // Dark gray
  },
  // A light theme with a soothing palette of blues and greens
  "Ocean Breeze": {
    Keyword: "#005f87",     // Deep blue
    Punctuator: "#6c6c6c",  // Gray
    Numeric: "#0087af",     // Medium blue
    Identifier: "#5fafd7",  // Light blue
    Null: "#ffaf00",        // Gold
    String: "#afdf87",      // Light green
    ColoredText: "#af87ff", // Lavender
    Background: "#e0f7fa",  // Light cyan
  },
  // A minimalistic theme with grayscale colors
  "Monochrome": {
    Keyword: "#000000",     // Black
    Punctuator: "#666666",  // Gray
    Numeric: "#333333",     // Dark gray
    Identifier: "#000000",  // Black
    Null: "#999999",        // Light gray
    String: "#555555",      // Medium gray
    ColoredText: "#FF0000", // Red
    Background: "#ffffff",  // White
  },
  // A dark theme with a warm and earthy color scheme
  "Earth Tones": {
    Keyword: "#b58900",     // Yellow-orange
    Punctuator: "#839496",  // Light gray
    Numeric: "#268bd2",     // Blue
    Identifier: "#cb4b16",  // Red-orange
    Null: "#2aa198",        // Cyan
    String: "#859900",      // Green
    ColoredText: "#6c71c4", // Soft purple
    Background: "#073642",  // Dark teal
  },
  // A dark theme with neon colors for a retro look
  "Neon Lights": {
    Keyword: "#00ffff",     // Cyan
    Punctuator: "#ff00ff",  // Magenta
    Numeric: "#ffff00",     // Yellow
    Identifier: "#ff00ff",  // Magenta
    Null: "#00ff00",        // Lime green
    String: "#ff00ff",      // Magenta
    ColoredText: "#00ffff", // Cyan
    Background: "#000000",  // Black
  }
};

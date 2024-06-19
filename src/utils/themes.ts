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
    ColoredText: "#0000FF", // Bright blue for strong contrast
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
    ColoredText: "#ffcc00", // Bright yellow for strong contrast
    Background: "#011627",  // Dark navy blue
  },
  // A minimalistic theme with grayscale colors
  "Monochrome": {
    Keyword: "#000000",     // Black
    Punctuator: "#666666",  // Gray
    Numeric: "#333333",     // Dark gray
    Identifier: "#000000",  // Black
    Null: "#999999",        // Light gray
    String: "#555555",      // Medium gray
    ColoredText: "#FF0000", // Bright red for strong contrast
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
    ColoredText: "#6c71c4", // Tomato red for strong contrast
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
    ColoredText: "#00ff00", // Bright green for strong contrast
    Background: "#000000",  // Black
  },
  // A dark theme with a rustic and vintage feel
  "Gruvbox": {
    Keyword: "#fb4934",     // Bright red
    Punctuator: "#ebdbb2",  // Light beige
    Numeric: "#fabd2f",     // Yellow-orange
    Identifier: "#b8bb26",  // Green
    Null: "#83a598",        // Soft blue
    String: "#d3869b",      // Muted pink
    ColoredText: "#d65d0e", // Orange for strong contrast
    Background: "#282828",  // Dark gray
  },
  "Solarized Dark": {
    Keyword: "#859900",     // Soft green
    Punctuator: "#839496",  // Light gray
    Numeric: "#b58900",     // Yellow-orange
    Identifier: "#268bd2",  // Blue
    Null: "#2aa198",        // Cyan
    String: "#2aa198",      // Cyan
    ColoredText: "#d33682", // Magenta for standout text
    Background: "#002b36",  // Dark teal
  },
  // Solarized Light theme with a soft light background and soothing colors
  "Solarized Light": {
    Keyword: "#859900",     // Soft green
    Punctuator: "#657b83",  // Gray
    Numeric: "#b58900",     // Yellow-orange
    Identifier: "#268bd2",  // Blue
    Null: "#2aa198",        // Cyan
    String: "#2aa198",      // Cyan
    ColoredText: "#d33682", // Magenta for standout text
    Background: "#fdf6e3",  // Light beige
  },
  // Dracula theme with a dark background and vivid colors
  "Dracula": {
    Keyword: "#ff79c6",     // Pink
    Punctuator: "#f8f8f2",  // Light gray
    Numeric: "#bd93f9",     // Soft purple
    Identifier: "#50fa7b",  // Green
    Null: "#8be9fd",        // Cyan
    String: "#f1fa8c",      // Yellow
    ColoredText: "#ff5555", // Red for standout text
    Background: "#282a36",  // Dark gray
  },
  // Nord theme with a cool, frosty color palette
  "Nord": {
    Keyword: "#81a1c1",     // Light blue
    Punctuator: "#d8dee9",  // Light gray
    Numeric: "#b48ead",     // Soft purple
    Identifier: "#88c0d0",  // Light cyan
    Null: "#8fbcbb",        // Soft teal
    String: "#a3be8c",      // Green
    ColoredText: "#bf616a", // Red for standout text
    Background: "#2e3440",  // Dark gray-blue
  },
  // Material theme with a modern, flat color palette
  "Material": {
    Keyword: "#c792ea",     // Lavender
    Punctuator: "#b0bec5",  // Light gray
    Numeric: "#f78c6c",     // Coral
    Identifier: "#82aaff",  // Light blue
    Null: "#89ddff",        // Soft cyan
    String: "#c3e88d",      // Light green
    ColoredText: "#ffcb6b", // Yellow-orange for standout text
    Background: "#263238",  // Dark blue-gray
  },
  // Ayu Mirage theme with a calm and balanced palette
  "Ayu Mirage": {
    Keyword: "#ffad66",     // Peach
    Punctuator: "#d9d7ce",  // Light gray
    Numeric: "#ffcc99",     // Light orange
    Identifier: "#73d0ff",  // Sky blue
    Null: "#95e6cb",        // Soft teal
    String: "#d2a6ff",      // Light purple
    ColoredText: "#ff7733", // Bright orange for standout text
    Background: "#1f2430",  // Dark blue-gray
  },
  // Night Owl theme with a deep, cool color palette
  "Night Owl": {
    Keyword: "#c792ea",     // Light purple
    Punctuator: "#d6deeb",  // Light gray
    Numeric: "#f78c6c",     // Coral
    Identifier: "#82aaff",  // Light blue
    Null: "#7fdbca",        // Soft cyan
    String: "#ecc48d",      // Light brown
    ColoredText: "#ff9d00", // Bright orange for standout text
    Background: "#011627",  // Dark navy blue
  },
  // Tomorrow Night theme with a dark background and soft colors
  "Tomorrow Night": {
    Keyword: "#cc99cc",     // Soft purple
    Punctuator: "#ffffff",  // White
    Numeric: "#f99157",     // Orange
    Identifier: "#6699cc",  // Blue
    Null: "#5fb3b3",        // Soft teal
    String: "#99cc99",      // Light green
    ColoredText: "#d27b53", // Bright brown for standout text
    Background: "#1d1f21",  // Dark gray
  },
  // Panda Syntax theme with a soft pastel palette
  "Panda Syntax": {
    Keyword: "#ff75b5",     // Pink
    Punctuator: "#e6e6e6",  // Light gray
    Numeric: "#19f9d8",     // Aqua
    Identifier: "#ffb86c",  // Light orange
    Null: "#bd93f9",        // Soft purple
    String: "#f1fa8c",      // Yellow
    ColoredText: "#ff5555", // Red for standout text
    Background: "#292a2d",  // Dark gray
  }
};

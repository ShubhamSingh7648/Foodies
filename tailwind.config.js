module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files in src for Tailwind classes
    ],
    theme: {
      extend: {
        fontFamily: {
          'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'], // Custom font name
        },
      },
    },
    plugins: [],
  };
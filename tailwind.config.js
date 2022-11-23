/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'neo-sans-bold': ['Neo-Sans-Bold','sans-serif'],
        'Neo-Sans-Std-Bold': ['Neo-Sans-Std-Bold','sans-serif'],
        'Neo-Sans-Std-Light': ['Neo-Sans-Std-Light','sans-serif'],
        'Neo-Sans-Std-Regular': ['Neo-Sans-Std-Regular','sans-serif'],
        'neo-latina': ['neo-latina','sans-serif'],
        'adelia': ['adelia','cursive'],
        'monospace': ['monospace','mono']
      }
    },
    
  },
  plugins: [],
}

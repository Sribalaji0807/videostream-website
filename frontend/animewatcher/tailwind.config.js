const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ['node_modules/flowbite-react/lib/esm/**/*.js',"./src/**/*.{html,js,jsx}",
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}


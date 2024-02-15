/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '75' : '18.75rem',
      },
      height:{
        '144' : '36rem',
      },
      backgroundImage: {
        'classroom': "url('https://images.pexels.com/photos/10646410/pexels-photo-10646410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05')",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      image: {
        logo: 'url(/src/assets/logo.png)',
      },
      keyframes: {
        bgSlideOne: {
          '0%': { transform: 'translateX(0) '},
          '50%': { transform: 'translateX(45%)'},
          '100%': { transform: 'translateX(0)'}
        },
        bgSlideTwo: {
          '0%': { transform: 'translateX(0) '},
          '50%': { transform: 'translateX(-45%)'},
          '100%': { transform: 'translateX(0)'}
        },
        bgVertical: {
          '0%': { transform: 'translateY(0) '},
          '50%': { transform: 'translateY(-45%)'},
          '100%': { transform: 'translateY(0)'}
        }
       },
       animation: {
        bgSlideOne: 'bgSlideOne 100s linear infinite',
        bgSlideTwo: 'bgSlideTwo 100s linear infinite',
        bgVertical: 'bgVertical 100s linear infinite',
       },
      backgroundSize: {
        'bg': 'auto 80%',
        'bgv': ' 100% auto',
        'bgfotos': ' 80% auto',
      },
      backgroundImage: {
        bgHub1: 'url(/src/assets/hubmaker1.png)',
        bgHub2: 'url(/src/assets/hubmaker2.png)',
        bgHub3: 'url(/src/assets/hubmaker3.png)',
        bgHub4: 'url(/src/assets/hubmaker4.png)',
        bgParceiros: 'url(/src/assets/logos_parceiros.png)',

        bgBrown: 'url(/src/assets/bg-brown-400.png)',
        bgCyan: 'url(/src/assets/bg-cyan-400.png)',
        bgDarkGreen: 'url(/src/assets/bg-darkGreen-400.png)',
        bgGray: 'url(/src/assets/bg-gray-400.png)',
        bgOrange: 'url(/src/assets/bg-orange-400.png)',
        bgPurple: 'url(/src/assets/bg-purple-400.png)',

        bgVertical: 'url(/src/assets/bg-vertical.png)',
        bgMaker: 'url(/src/assets/maker_background.png)',
        bgMakerHome: 'url(/src/assets/maker_home.png)',
        bgFotosForms: 'url(/src/assets/fotos_forms.png)',
        bgOds: 'url(/src/assets/ods.png)',
        bgLetreiro: 'url(/src/assets/letreiro.png)',

        photo1: 'url(/src/assets/images-carousel/photo_1.jpg)',
        photo2: 'url(/src/assets/images-carousel/photo_2.jpg)',
        photo3: 'url(/src/assets/images-carousel/photo_3.jpg)',
        photo4: 'url(/src/assets/images-carousel/photo_4.jpg)',
        photo5: 'url(/src/assets/images-carousel/photo_5.jpg)',
        photo6: 'url(/src/assets/images-carousel/photo_6.jpg)',
      },
      fontFamily: {
        sans: 'Gilroy, sans-serif'
      },

      colors: {
        green: {
          100: '#DDE8AD',
          200: '#D4E295',
          300: '#C2D665',
          400: '#A5C500',
        },
        darkGreen: {
          100: '#BDBDA0',
          200: '#929166',
          300: '#7D7C4C',
          400: '#303600',
        },
        blue: {
          100: '#A7B5D0',
          200: '#7087AF',
          300: '#56739F',
          400: '#293C8F',
          500: '#152047',
        },
        yellow: {
          400: '#FABA38'
        },
        cyan: {
          100: '#CAEAFA',
          200: '#BBE4F9',
          300: '#9AD8F6',
          400: '#12B0E5',
        },
        orange: {
          100: '#F7C498',
          200: '#F5B47D',
          300: '#F1934D',
          400: '#EC6400',
        },
        purple: {
          100: '#D3B2CC',
          200: '#B97FA8',
          300: '#AD6696',
          400: '#810061',
        },
        brown: {
          100: '#C5AB99',
          200: '#9F775F',
          300: '#8D6045',
          400: '#4B1702',
        },
        gray: {
          100: '#D6DCE0',
          200: '#B9C1C7',
          300: '#AAB3BA',
          400: '#717A83',
          500: '#323238',
        }
      },
    },
  },
  plugins: [],
}

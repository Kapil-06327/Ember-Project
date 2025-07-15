module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
 
  content: ['./app/**/*.{js,hbs}'],
  plugins: [], // ✅ leave this empty unless you're adding official plugins
};

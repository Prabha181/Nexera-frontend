// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'open-close': 'openClose 0.5s ease-in-out',
        fadeOutDown: 'fadeOutDown 1s ease-in-out',
      },
      keyframes: {
        openClose: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          fadeOutDown: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        }
      }
    }
  }
}
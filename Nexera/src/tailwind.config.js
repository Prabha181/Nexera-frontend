// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'open-close': 'openClose 0.5s ease-in-out',
      },
      keyframes: {
        openClose: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      }
    }
  }
}
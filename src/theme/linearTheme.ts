import { createTheme } from '@mui/material/styles';

const linearTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#F5F1E8', // Divine Bone
          paper: '#ffffff',
        },
        primary: {
          // Main text and primary elements - Worn Charcoal for dark text on light background
          main: '#1E1E1E',
          light: '#3C3C3C',
          dark: '#000000',
          contrastText: '#ffffff',
        },
        secondary: {
          // Secondary text and elements - Ash Grey
          main: '#A8A8A8',
          light: '#C0C0C0',
          dark: '#808080',
          contrastText: '#000000',
        },
        // Divine palette as accents
        success: {
          main: '#D43131', // Blood Oath Red
          light: '#E04D4D',
          dark: '#B02727',
          contrastText: '#ffffff',
        },
        info: {
          main: '#F2C55E', // Halo Ember Gold
          light: '#F4D27A',
          dark: '#D4AC4C',
          contrastText: '#000000',
        },
        text: {
          primary: '#1E1E1E', // Worn Charcoal for primary text
          secondary: '#A8A8A8', // Ash Grey for secondary text
          disabled: '#D4D4D4',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          hover: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        background: {
          default: '#121212', // Proper dark background (not Divine Bone)
          paper: '#1E1E1E',   // Worn Charcoal for paper/elevation
        },
        primary: {
          // Main text and primary elements - light for dark background
          main: '#ffffff',
          light: '#ffffff',
          dark: '#b3b3b3',
          contrastText: '#000000',
        },
        secondary: {
          // Secondary text and elements
          main: '#A8A8A8', // Ash Grey still works as secondary
          light: '#C0C0C0',
          dark: '#808080',
          contrastText: '#000000',
        },
        // Divine palette as accents (should still be visible on dark background)
        success: {
          main: '#D43131', // Blood Oath Red
          light: '#E04D4D',
          dark: '#B02727',
          contrastText: '#000000',
        },
        info: {
          main: '#F2C55E', // Halo Ember Gold
          light: '#F4D27A',
          dark: '#D4AC4C',
          contrastText: '#000000',
        },
        text: {
          primary: '#ffffff', // White for primary text on dark background
          secondary: '#A8A8A8', // Ash Grey for secondary text
          disabled: '#888888',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        action: {
          active: 'rgba(255, 255, 255, 0.54)',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 510, // Linear's signature weight
    fontWeightBold: 590,
    h1: {
      fontSize: '4.5rem',
      fontWeight: 510,
      lineHeight: 1,
      letterSpacing: '-1.584px',
    },
    h2: {
      fontSize: '4rem',
      fontWeight: 510,
      lineHeight: 1,
      letterSpacing: '-1.408px',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 510,
      lineHeight: 1,
      letterSpacing: '-1.056px',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.13,
      letterSpacing: '-0.704px',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '-0.288px',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 590,
      lineHeight: 1.33,
      letterSpacing: '-0.24px',
    },
    subtitle1: {
      fontSize: '1.13rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '-0.165px',
    },
    subtitle2: {
      fontSize: '1.06rem',
      fontWeight: 590,
      lineHeight: 1.6,
      letterSpacing: '-0.165px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 510,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.88rem',
      fontWeight: 510,
      lineHeight: 1.5,
      letterSpacing: '-0.182px',
    },
    overline: {
      fontSize: '0.63rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '-0.15px',
    },
    button: {
      fontWeight: 510,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
          boxShadow: 'none',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // label color
          '& label.Mui-focused': {
            color: theme.palette.primary.main,
          },
          // outline color
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },
          // hover state
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.action.active,
          },
          // focused state
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: ({ theme }) => ({
          padding: theme.spacing(1.5, 1.4),
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

export default linearTheme;

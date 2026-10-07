import { createTheme } from '@mui/material/styles';

const linearTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#F5F1E8',
          paper: '#ffffff',
        },
        primary: {
          main: '#1E1E1E',
          light: '#3C3C3C',
          dark: '#000000',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#A8A8A8',
          light: '#C0C0C0',
          dark: '#808080',
          contrastText: '#000000',
        },
        success: {
          main: '#D43131',
          light: '#E04D4D',
          dark: '#B02727',
          contrastText: '#ffffff',
        },
        info: {
          main: '#F2C55E',
          light: '#F4D27A',
          dark: '#D4AC4C',
          contrastText: '#000000',
        },
        text: {
          primary: '#1E1E1E',
          secondary: '#A8A8A8',
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
          default: '#F5F1E8',
          paper: '#0f1011',
        },
        primary: {
          main: '#1E1E1E',
          light: '#3C3C3C',
          dark: '#000000',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#A8A8A8',
          light: '#C0C0C0',
          dark: '#808080',
          contrastText: '#000000',
        },
        success: {
          main: '#D43131',
          light: '#E04D4D',
          dark: '#B02727',
          contrastText: '#ffffff',
        },
        info: {
          main: '#F2C55E',
          light: '#F4D27A',
          dark: '#D4AC4C',
          contrastText: '#000000',
        },
        text: {
          primary: '#F5F1E8',
          secondary: '#D4D4D4',
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
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.default,
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

import { createTheme } from '@mui/material/styles';

const linearTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#f7f8f8',
          paper: '#ffffff',
        },
        primary: {
          main: '#5e6ad2',
          light: '#828fff',
          dark: '#3c4a8b',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#d0d6e0',
          light: '#e2e4e7',
          dark: '#a7aeb8',
          contrastText: '#000000',
        },
        success: {
          main: '#27a644',
          light: '#40c057',
          dark: '#1e8034',
          contrastText: '#ffffff',
        },
        info: {
          main: '#10b981',
          light: '#34d399',
          dark: '#0b815e',
          contrastText: '#ffffff',
        },
        text: {
          primary: '#171717',
          secondary: '#62666d',
          disabled: '#9ca3af',
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
          default: '#08090a',
          paper: '#0f1011',
        },
        primary: {
          main: '#5e6ad2',
          light: '#828fff',
          dark: '#3c4a8b',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#d0d6e0',
          light: '#e2e4e7',
          dark: '#a7aeb8',
          contrastText: '#000000',
        },
        success: {
          main: '#27a644',
          light: '#40c057',
          dark: '#1e8034',
          contrastText: '#ffffff',
        },
        info: {
          main: '#10b981',
          light: '#34d399',
          dark: '#0b815e',
          contrastText: '#ffffff',
        },
        text: {
          primary: '#f7f8f8',
          secondary: '#d0d6e0',
          disabled: '#62666d',
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

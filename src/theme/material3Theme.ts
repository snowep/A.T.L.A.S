import { createTheme, Theme } from '@mui/material/styles';

// Material Design 3 tonal palette generator
function generateTonalPalette(baseColor: string): Record<number, string> {
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  const tones: Record<number, string> = {};
  for (let tone = 0; tone <= 100; tone += 10) {
    const factor = tone / 100;
    const tr = Math.round(r * (1 - factor) + 255 * factor);
    const tg = Math.round(g * (1 - factor) + 255 * factor);
    const tb = Math.round(b * (1 - factor) + 255 * factor);
    tones[tone] = `#${tr.toString(16).padStart(2, '0')}${tg.toString(16).padStart(2, '0')}${tb.toString(16).padStart(2, '0')}`;
  }
  return tones;
}

// Material Design 3 color tokens
const primaryColor = '#6750A4'; // M3 default primary
const secondaryColor = '#625B71';
const tertiaryColor = '#7D5260';
const errorColor = '#B3261E';

// Light theme tonal palettes
const lightPrimary = generateTonalPalette(primaryColor);
const lightSecondary = generateTonalPalette(secondaryColor);
const lightTertiary = generateTonalPalette(tertiaryColor);
const lightError = generateTonalPalette(errorColor);

// Dark theme - inverse approach
const darkPrimary = generateTonalPalette(primaryColor);
const darkSecondary = generateTonalPalette(secondaryColor);
const darkTertiary = generateTonalPalette(tertiaryColor);
const darkError = generateTonalPalette(errorColor);

// Material Design 3 Theme
export const material3Theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: lightPrimary[40],
          light: lightPrimary[30],
          dark: lightPrimary[50],
          contrastText: lightPrimary[100],
        },
        secondary: {
          main: lightSecondary[40],
          light: lightSecondary[30],
          dark: lightSecondary[50],
          contrastText: lightSecondary[100],
        },
        tertiary: {
          main: lightTertiary[40],
          light: lightTertiary[30],
          dark: lightTertiary[50],
          contrastText: lightTertiary[100],
        },
        error: {
          main: lightError[40],
          light: lightError[30],
          dark: lightError[50],
          contrastText: lightError[100],
        },
        background: {
          default: '#FFFBFE',
          paper: '#FFFBFE',
        },
        text: {
          primary: '#1C1B1F',
          secondary: '#49454F',
          disabled: '#79747E',
        },
        divider: '#CAC4D0',
        action: {
          active: '#49454F',
          hover: 'rgba(103, 80, 164, 0.08)',
          hoverOpacity: 0.08,
          selected: 'rgba(103, 80, 164, 0.12)',
          selectedOpacity: 0.12,
          disabled: '#79747E',
          disabledBackground: '#E8DEF8',
          disabledOpacity: 0.38,
          focus: 'rgba(103, 80, 164, 0.12)',
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
        },
        success: {
          main: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#0288D1',
          light: '#29B6F6',
          dark: '#01579B',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#F57F17',
          light: '#FFB300',
          dark: '#F57F17',
          contrastText: '#FFFFFF',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: darkPrimary[80],
          light: darkPrimary[90],
          dark: darkPrimary[70],
          contrastText: darkPrimary[20],
        },
        secondary: {
          main: darkSecondary[80],
          light: darkSecondary[90],
          dark: darkSecondary[70],
          contrastText: darkSecondary[20],
        },
        tertiary: {
          main: darkTertiary[80],
          light: darkTertiary[90],
          dark: darkTertiary[70],
          contrastText: darkTertiary[20],
        },
        error: {
          main: darkError[80],
          light: darkError[90],
          dark: darkError[70],
          contrastText: darkError[20],
        },
        background: {
          default: '#1C1B1F',
          paper: '#1C1B1F',
        },
        text: {
          primary: '#E6E1E5',
          secondary: '#CAC4D0',
          disabled: '#938F99',
        },
        divider: '#49454F',
        action: {
          active: '#E6E1E5',
          hover: 'rgba(217, 199, 249, 0.08)',
          hoverOpacity: 0.08,
          selected: 'rgba(217, 199, 249, 0.12)',
          selectedOpacity: 0.12,
          disabled: '#49454F',
          disabledBackground: '#49454F',
          disabledOpacity: 0.38,
          focus: 'rgba(217, 199, 249, 0.12)',
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
        },
        success: {
          main: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#0288D1',
          light: '#29B6F6',
          dark: '#01579B',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#F57F17',
          light: '#FFB300',
          dark: '#F57F17',
          contrastText: '#FFFFFF',
        },
      },
    },
  },
  typography: {
    fontFamily: "'Google Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: '57px',
      fontWeight: 400,
      lineHeight: 1.12,
      letterSpacing: '-0.25px',
    },
    h2: {
      fontSize: '45px',
      fontWeight: 400,
      lineHeight: 1.16,
      letterSpacing: '0px',
    },
    h3: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: 1.22,
      letterSpacing: '0px',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '0px',
    },
    h5: {
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: 1.29,
      letterSpacing: '0px',
    },
    h6: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0px',
    },
    subtitle1: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 1.27,
      letterSpacing: '0px',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.25px',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: '0.5px',
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.43,
      letterSpacing: '0.1px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--md-sys-color-primary': '#6750A4',
          '--md-sys-color-on-primary': '#FFFFFF',
          '--md-sys-color-primary-container': '#EADDFF',
          '--md-sys-color-on-primary-container': '#21005D',
          '--md-sys-color-secondary': '#625B71',
          '--md-sys-color-on-secondary': '#FFFFFF',
          '--md-sys-color-secondary-container': '#E8DEF8',
          '--md-sys-color-on-secondary-container': '#1D192B',
          '--md-sys-color-tertiary': '#7D5260',
          '--md-sys-color-on-tertiary': '#FFFFFF',
          '--md-sys-color-tertiary-container': '#FFD8E4',
          '--md-sys-color-on-tertiary-container': '#31111D',
          '--md-sys-color-error': '#B3261E',
          '--md-sys-color-on-error': '#FFFFFF',
          '--md-sys-color-error-container': '#F9DEDC',
          '--md-sys-color-on-error-container': '#410E0B',
          '--md-sys-color-background': '#FFFBFE',
          '--md-sys-color-on-background': '#1C1B1F',
          '--md-sys-color-surface': '#FFFBFE',
          '--md-sys-color-on-surface': '#1C1B1F',
          '--md-sys-color-surface-variant': '#E7E2EC',
          '--md-sys-color-on-surface-variant': '#49454F',
          '--md-sys-color-outline': '#79747E',
          '--md-sys-color-outline-variant': '#CAC4D0',
          '--md-sys-color-shadow': '#000000',
          '--md-sys-color-scrim': '#000000',
          '--md-sys-color-inverse-surface': '#313033',
          '--md-sys-color-inverse-on-surface': '#F4EFF4',
          '--md-sys-color-inverse-primary': '#D0BCFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(0.5, 1.5),
          minHeight: 40,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: theme.shadows[1],
          },
          '&:active': {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.divider,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderColor: theme.palette.primary.main,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
        }),
        text: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
        }),
        elevation1: { boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)' },
        elevation2: { boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.05)' },
        elevation3: { boxShadow: '0 4px 8px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.06)' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
          elevation: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            '& fieldset': {
              borderColor: theme.palette.divider,
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.text.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
            '&.Mui-error fieldset': {
              borderColor: theme.palette.error.main,
            },
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          fontWeight: 500,
          height: 32,
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.background.paper,
        }),
        filled: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: 28,
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: () => ({
          fontSize: '22px',
          fontWeight: 400,
          lineHeight: 1.27,
          letterSpacing: '0px',
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3, 3, 2, 3),
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 3),
          gap: theme.spacing(1),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: () => ({
          borderRadius: 4,
          backgroundColor: '#313033',
          color: '#F4EFF4',
          fontSize: '12px',
          fontWeight: 400,
          padding: '4px 8px',
        }),
        arrow: () => ({
          color: '#313033',
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.divider,
          opacity: 1,
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          margin: theme.spacing(0, 1),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiListItemIcon-root': {
              color: theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          minWidth: 40,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          letterSpacing: theme.typography.body1.letterSpacing,
        }),
        secondary: ({ theme }) => ({
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.body2.fontWeight,
          lineHeight: theme.typography.body2.lineHeight,
          letterSpacing: theme.typography.body2.letterSpacing,
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          borderRadius: theme.shape.borderRadius,
          margin: theme.spacing(0.25, 0.5),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.button.fontSize,
          fontWeight: theme.typography.button.fontWeight,
          lineHeight: theme.typography.button.lineHeight,
          letterSpacing: theme.typography.button.letterSpacing,
          textTransform: 'none',
          minHeight: 48,
          padding: theme.spacing(1, 2),
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: ({ theme }) => ({
          height: 3,
          borderRadius: '3px 3px 0 0',
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          height: 4,
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            backgroundColor: theme.palette.primary.main,
            border: `4px solid ${theme.palette.primary.main}`,
            boxShadow: theme.shadows[2],
            '&:hover': {
              boxShadow: theme.shadows[3],
            },
          },
          '& .MuiSlider-track': {
            height: 4,
            borderRadius: 2,
          },
          '& .MuiSlider-rail': {
            height: 4,
            borderRadius: 2,
            opacity: 0.2,
          },
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          height: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.divider,
        }),
        bar: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.primary.main,
          borderRadius: 2,
        }),
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(2),
        }),
        standard: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(2),
        }),
        filled: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(2),
        }),
        outlined: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(2),
        }),
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: () => ({
          borderRadius: 8,
          backgroundColor: '#313033',
          color: '#F4EFF4',
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          color: theme.palette.text.secondary,
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
          '&.Mui-error': {
            color: theme.palette.error.main,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          '& fieldset': {
            borderColor: theme.palette.divider,
            borderWidth: 1,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.text.secondary,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
          '&.Mui-error fieldset': {
            borderColor: theme.palette.error.main,
            borderWidth: 2,
          },
          '&.Mui-disabled fieldset': {
            borderColor: theme.palette.divider,
          },
        }),
        input: ({ theme }) => ({
          padding: theme.spacing(1.5, 1.5),
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          '&::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 0.5,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2),
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.caption.fontWeight,
          lineHeight: theme.typography.caption.lineHeight,
          marginTop: theme.spacing(1),
          marginLeft: 0,
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 48,
          height: 28,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(20px)',
              color: theme.palette.primary.main,
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-track': {
            backgroundColor: theme.palette.divider,
            opacity: 1,
            borderRadius: 14,
          },
          '& .MuiSwitch-thumb': {
            width: 20,
            height: 20,
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[1],
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
        }),
        icon: ({ theme }) => ({
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: 8,
          boxShadow: theme.shadows[4],
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: 8,
          boxShadow: theme.shadows[4],
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
          borderLeft: `1px solid ${theme.palette.divider}`,
        }),
        anchorLeft: ({ theme }) => ({
          borderRight: `1px solid ${theme.palette.divider}`,
        }),
        anchorRight: ({ theme }) => ({
          borderLeft: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
          height: 72,
          paddingTop: theme.spacing(1),
        }),
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: 80,
          padding: theme.spacing(0.5, 1),
          '&.Mui-selected': {
            color: theme.palette.primary.main,
          },
        }),
        label: ({ theme }) => ({
          fontSize: theme.typography.overline.fontSize,
          fontWeight: theme.typography.overline.fontWeight,
          lineHeight: theme.typography.overline.lineHeight,
          letterSpacing: theme.typography.overline.letterSpacing,
        }),
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.body2.fontWeight,
        }),
        separator: ({ theme }) => ({
          color: theme.palette.text.secondary,
          margin: theme.spacing(0, 1),
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          fontWeight: 500,
          minWidth: 40,
          height: 40,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 0),
        }),
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: ({ theme }) => ({
          borderColor: theme.palette.divider,
        }),
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-active': {
            color: theme.palette.primary.main,
          },
          '&.Mui-completed': {
            color: theme.palette.success.main,
          },
        }),
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.action.hover,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: theme.spacing(1.5, 2),
        }),
        head: ({ theme }) => ({
          fontWeight: 500,
          fontSize: theme.typography.overline.fontSize,
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.action.hover,
        }),
        body: ({ theme }) => ({
          fontSize: theme.typography.body2.fontSize,
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },
  },
});

export default material3Theme;
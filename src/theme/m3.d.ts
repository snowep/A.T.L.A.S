import '@mui/material/styles';
import '@mui/material/Alert';
import '@mui/material/Button';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: {
      default: string;
      paper: string;
      variant: string;
      container: string;
      containerHigh: string;
      containerHighest: string;
    };
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    surfaceVariant: string;
  }

  interface PaletteOptions {
    onPrimary?: string;
    primaryContainer?: string;
    onPrimaryContainer?: string;
    onSecondary?: string;
    secondaryContainer?: string;
    onSecondaryContainer?: string;
    tertiary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    onTertiary?: string;
    tertiaryContainer?: string;
    onTertiaryContainer?: string;
    onError?: string;
    errorContainer?: string;
    onErrorContainer?: string;
    onBackground?: string;
    surface?: {
      default?: string;
      paper?: string;
      variant?: string;
      container?: string;
      containerHigh?: string;
      containerHighest?: string;
    };
    onSurface?: string;
    onSurfaceVariant?: string;
    outline?: string;
    outlineVariant?: string;
    shadow?: string;
    scrim?: string;
    inverseSurface?: string;
    inverseOnSurface?: string;
    inversePrimary?: string;
    surfaceVariant?: string;
  }

  interface Shape {
    borderRadius: number;
    borderRadiusSmall: number;
    borderRadiusMedium: number;
    borderRadiusLarge: number;
    borderRadiusExtraLarge: number;
  }

  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    headlineLarge: React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineSmall: React.CSSProperties;
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    headlineLarge?: React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tonal: true;
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    standardSuccess: true;
    standardError: true;
    standardWarning: true;
    standardInfo: true;
  }
}
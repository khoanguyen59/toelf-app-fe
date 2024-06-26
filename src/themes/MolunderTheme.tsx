import {
  BOTTOM_NAVIGATION_HEIGHT,
  SIDE_BAR_WIDTH,
  TOOLBAR_HEIGHT,
} from '@/constants/css.constants';
import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    medium?: string;
  }
  interface TypeBackground {
    container?: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
  interface PaletteColor {
    content?: string;
    background?: string;
  }
  interface SimplePaletteColorOptions {
    content?: string;
    background?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    white: true;
  }
}

const LinkBehavior = React.forwardRef<
  any,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid='custom-link' ref={ref} to={href} {...other} />
  );
});

let theme = createTheme({
  palette: {
    primary: {
      main: '#006666',
      light: '#449494',
      dark: '#005a66',
      '50': '#323232',
      '100': '#ff0000',
      '200': '#efa064',
      '300': '#134747',
      '400': '#0a2f2f',
    },
    secondary: {
      main: 'rgba(158, 54, 15, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.7)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      medium: 'rgba(0,0,0,0.6)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      main: '#F44336',
      dark: '#BA000D',
      light: '#FF7961',
      background: '#F9E9E9',
    },
    info: {
      main: '#2196F3',
      dark: '#0069C0',
      light: '#6EC6FF',
      content: '#0d3c61',
      background: '#e8f4fe',
    },
    warning: {
      main: '#FFCC00',
      dark: '#C79C00',
      light: '#FFFF50',
      content: '#665200',
      background: '#fff7d9',
    },
    success: {
      main: '#4CAF50',
      dark: '#087F23',
      light: '#80E27E',
      content: '#1e4620',
      background: '#edf7ed',
    },
    background: {
      paper: '#fff',
      default: '#FAFAFA',
      container: '#f5f5f5',
    },
    white: {
      main: '#ffffff',
      dark: '#E5EEFB',
      contrastText: '#1954A9',
    },
    grey: {
      '50': '#f5f5f4',
      '100': '#EBEAF1',
      '200': '#E5E5E5',
      '500': '#F5F5F5',
      '600': '#8D8D8D',
      '900': '#666666',
      A100: '#263238',
      A200: '#848DB8',
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Raleway', 'Arial'",
    h1: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: '3.125rem',
      letterSpacing: '0.009rem',
    },
    h2: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: '3.125rem',
      letterSpacing: '0.009rem',
    },
    h3: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: '2.438rem',
      letterSpacing: '0.009rem',
    },
    h4: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2.125rem',
      letterSpacing: '0.009rem',
    },
    h5: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      letterSpacing: '0.009rem',
    },
    h6: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.563rem',
      letterSpacing: '0.009rem',
    },
    subtitle1: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.375rem',
      letterSpacing: '0.009rem',
    },
    subtitle2: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.375rem',
      letterSpacing: '0.006rem',
    },
    body1: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.813rem',
      letterSpacing: '0.009rem',
    },
    body2: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      letterSpacing: '0.009rem',
    },
    button: {
      fontFamily: "'Open Sans', 'Raleway', 'Arial'",
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1.625rem',
      letterSpacing: '0.031rem',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    type: 'light',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: 'solid 1px #E0E0E0',
            backgroundColor: '#FFFFFF',
          },
        },
        {
          props: { size: 'large' },
          style: {
            padding: theme.spacing(1.4, 2),
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiToggleButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: 'solid 1px #E0E0E0',
            backgroundColor: '#FFFFFF',
          },
        },
        {
          props: { size: 'large' },
          style: {
            padding: theme.spacing(1.4, 2),
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          minWidth: SIDE_BAR_WIDTH,
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: `${TOOLBAR_HEIGHT}px`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.white.main,
          border: '1px solid',
          borderColor: theme.palette.divider,
          color: 'black',
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${BOTTOM_NAVIGATION_HEIGHT}px`,
          backgroundColor: theme.palette.primary.light,
        },
        flexContainer: {
          justifyContent: 'space-around',
        },
        text: {
          textTransform: 'none',
        },
        indicator: {
          top: theme.spacing(1),
          borderRadius: 20,
          padding: theme.spacing(2, 0),
          backgroundColor: theme.palette.action.selected,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        labelIcon: {
          textTransform: 'none',
        },
        root: {
          color: theme.palette.text.primary,
          '&.Mui-selected': {
            color: theme.palette.primary.main,
          },
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
        shrink: {
          fontWeight: 400,
        },
      },
    },

    MuiFilledInput: {
      variants: [
        {
          props: { color: 'white' },
          style: {
            '&:after': {
              borderColor: theme.palette.primary.main,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&:before': {
            borderBottom: '1px solid rgba(0,0,0,0.38)',
            borderRadius: 4,
          },
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.common.white,
        },
      },
    },

    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Open Sans', 'Raleway', 'Arial'",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            borderRadius: 4,
            color: theme.palette.primary.main,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
        label: {
          fontFamily: "'Open Sans', 'Raleway', 'Arial'",
          fontWeight: 600,
          fontSize: '14px',
          color: '#525252',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #E0E0E0',
        },
      },
    },

    MuiTextField: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            borderRadius: 4,
          },
        },
        {
          props: { color: 'white', variant: 'filled' },
          style: {
            '& .MuiInputLabel-filled.Mui-focused': {
              color: theme.palette.primary.main,
            },
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
          },
          MuiFormLabel: {
            color: theme.palette.primary.main,
          },
        },
      ],
    },

    MuiButtonGroup: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: 'none',
            border: '1px solid #E0E0E0',
            '&:not(:lastofType)': {
              borderRight: '1px solid #E0E0E0',
            },
          },
        },
      ],
    },

    MuiDataGrid: {
      defaultProps: {},
      styleOverrides: {
        root: {
          border: 0,
        },
        row: {
          cursor: 'pointer',
        },
      },
    },

    MuiTableContainer: {
      defaultProps: {},
      styleOverrides: {
        root: {
          overflowY: 'hidden',
        },
      },
    },

    MuiTable: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderSpacing: '0px 4px',
          backgroundColor: theme.palette.background.default,
          marginTop: '-4px',
          marginBottom: '-4px',
        },
      },
    },

    MuiTableHead: {
      defaultProps: {},
      styleOverrides: {
        root: {
          border: 0,
          backgroundColor: theme.palette.grey[500],
        },
        row: {
          cursor: 'pointer',
        },
      },
    },

    MuiTableRow: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          ':hover': {
            backgroundColor: theme.palette.grey[200],
          },
        },
        head: {
          backgroundColor: theme.palette.grey[500],
        },
      },
    },

    MuiTableCell: {
      defaultProps: {},
      styleOverrides: {
        root: {
          paddingBottom: '6px',
          paddingTop: '6px',
        },
      },
    },

    MuiFormHelperText: {
      defaultProps: {},
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },

    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          '&.Mui-selected': {
            borderRadius: 4,
            color: theme.palette.text.secondary,
          },
        },
      },
    },
    // MuiButton: { //for example if you want to do changes to button with  variant contained
    //   styleOverrides: {
    //     contained: {
    //       // backgroundColor: 'green',
    //     },
    //   },
    // },
  },
});

export { theme };

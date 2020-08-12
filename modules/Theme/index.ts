import { createMuiTheme } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';


const white = '#fff';
const black = '#000';
// const grey = grey['700'];
const vividPink = '#EE4C7C'
const creamish = '#FAF8F8'

// FONT
const latoFont = ['Lato', 'serif'].join(',');
const novaMonoFont = ['Nova Mono', 'monospace'].join(',');

export default createMuiTheme({
  palette: {
    common: {
			white: white,
			black: black,
			grey: grey['700']
		},
		primary: {
			main: vividPink
		},
    // primary: {
    //   main: arcBlue
    // },
    secondary: {
      main: creamish
    }
  },
  typography: {
		h1: {
			fontFamily: novaMonoFont,
			fontStyle: 'italic',
			color: creamish
		},
		h5: {
			fontFamily: novaMonoFont,
			fontStyle: 'italic',
			color: black
		},
    h2: {
      fontFamily: novaMonoFont,
			fontSize: "3.5rem",
			textTransform: 'uppercase',
      // color: arcBlue,
      lineHeight: 1.5
		},
		h3: {
			fontFamily: novaMonoFont,
			textTransform: 'uppercase',
			color: vividPink,
			fontSize: '1.5rem'
		},
		h4: {
			fontFamily: novaMonoFont,
			color: vividPink,
			marginBottom: '2em',
			textTransform: 'uppercase'
		},
		subtitle2: {
			color: grey['700']
		},
		h6: {
			fontFamily: novaMonoFont,
			color: creamish,
			textTransform: 'uppercase'
		},
		body2: {
			// fontSize: '1.5rem',
			fontFamily: latoFont,
			// color: creamish
		}
  },
	actionButton: {
		background: vividPink,
		fontFamily: novaMonoFont,
		borderRadius: '0',
		border: `1px solid ${grey['700']}`,
		color: creamish,
		"&:hover": {
      background: vividPink,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: vividPink
      }
    }
	},
	tabs: {
		fontFamily: novaMonoFont,
		"&:hover": {
			background: vividPink,
			color: creamish,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: vividPink,
				color: creamish,
      }
	}
},
overrides: {
	MuiFormLabel: {
		root: {
			color: black,
			fontFamily: novaMonoFont,
			
		},
		focused: {
			color: black
		}
	}
}
});

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
			color: white
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
			color: white,
		},
		body1: {
			// backgroundColor: vividPink,
			// textTransform: 'uppercase',
			fontFamily: latoFont,
			// fontWeight: 'bold',
			// fontStyle: 'italic',
			// display: 'inline-block',
			// transform: 'skew(90deg)'
			fontSize: '1.5rem'
		},
		body2: {
			// fontSize: '1.5rem'
		}
  },
	actionButton: {
		background: vividPink,
		fontFamily: novaMonoFont,
		borderRadius: '0',
		border: `1px solid ${grey['700']}`,
		color: white,
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
			color: white,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: vividPink,
				color: white,
      }
	}
}
});

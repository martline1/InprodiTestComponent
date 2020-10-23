import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		display        : "flex",
		justifyContent : "center",
		width          : "100%",

		"& .todoListContainer" : {
			display       : "flex",
			flexDirection : "column",

			padding  : "5%",
			maxWidth : "95%",
			width    : theme.spacing(180),

			"& .header" : {
				display  : "flex",
				flexWrap : "wrap",

				"& .title" : {
					color      : theme.palette.grey[700],
					fontFamily : `Sora, ${theme.typography.fontFamily}`,
					fontWeight : "600",
					flexGrow   : 1,

					"& span" : {
						color : theme.palette.primary.main,
					},
				},

				[theme.breakpoints.down("sm")] : {
					fontSize : "3em",
				},

				"& .seeOnGithub" : {
					margin    : `${theme.spacing(1.5)}px 0`,
					fontSize  : theme.spacing(2),
					alignSelf : "center",

					color           : theme.palette.common.white,
					maxWidth        : theme.spacing(30),
					backgroundColor : "#3d454e !important",
					textTransform   : "none",

					"& svg" : {
						margin   : theme.spacing(0.5),
						fontSize : "1.5em",
					},
				},
			},

			"& .divider" : {
				margin : `${theme.spacing(3)}px 0`,
			},
		},
	},
}));

export default useStyles;

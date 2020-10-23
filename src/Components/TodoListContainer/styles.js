import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		padding : "2% 3%",

		"& .itemDone" : {
			textDecoration : "line-through",
			color          : theme.palette.grey[500],
		},
	},
}));

export default useStyles;

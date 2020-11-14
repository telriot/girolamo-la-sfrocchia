import { makeStyles } from "@material-ui/core/styles";
import { getYear } from "date-fns";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
	copyright: {
		textAlign: "center",
	},
}));
export default function Copyright() {
	const classes = useStyles();
	return (
		<Typography className={classes.copyright} variant="caption">
			&copy; Copyright {getYear(new Date())}, Girolamo La Sfrocchia
		</Typography>
	);
}

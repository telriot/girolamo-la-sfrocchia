import { makeStyles } from "@material-ui/core/styles";
import NavbarTop from "@components/NavbarTop";
import Copyright from "./Copyright";
// import Newsletter from "./Newsletter";

const useStyles = makeStyles((theme) => ({
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		padding: theme.spacing(3),
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	navGroup: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "end",
	},
	newsletterGroup: {},
}));
export default function Footer({ postIds }: { postIds: string[] }) {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			{/* <div className={classes.newsletterGroup}>
				<Newsletter />
			</div> */}
			<div className={classes.navGroup}>
				<NavbarTop postIds={postIds} small={true} />
				<Copyright />
			</div>
		</footer>
	);
}

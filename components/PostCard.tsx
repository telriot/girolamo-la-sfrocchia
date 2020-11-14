import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@components/Link";
import Date from "@components/date";

const useStyles = makeStyles((theme) => ({
	title: { fontFamily: "Bebas Neue" },
	link: {
		color: theme.palette.text.primary,
		transition: "color .3s",

		"&:hover": {
			"& $title": { color: theme.palette.primary.main },
		},
	},
	card: {
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(1, 0),
		cursor: "pointer",
		alignItems: "flex-start",

		[theme.breakpoints.down("sm")]: {
			alignItems: "center",
		},
	},
	date: {},
}));
export default function ArticleCard({ post }) {
	const classes = useStyles();

	return (
		<Link className={classes.link} underline="none" href={`/posts/${post.id}`}>
			<div className={classes.card}>
				<Typography className={classes.title} align="center" variant="h5">
					{post.title}
				</Typography>
				<Date className={classes.date} dateString={post.date} />
			</div>
		</Link>
	);
}

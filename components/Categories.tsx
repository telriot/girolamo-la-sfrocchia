import { makeStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Typography from "@material-ui/core/Typography";
import Link from "@components/Link";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		[breakpoints.down("sm")]: {
			alignItems: "center",
		},
	},
	header: { fontFamily: "Bebas Neue" },
	linkDiv: {
		display: "flex",
		flexWrap: "wrap",
		[breakpoints.down("sm")]: {
			justifyContent: "center",
		},
	},

	categoryLink: {
		color: palette.text.primary,
		padding: spacing(1, 1, 0, 0),

		"&:hover": {
			color: blue[700],
		},
	},
}));
export default function Categories({
	tagsList,
	className,
}: {
	tagsList: any;
	className?: string | object;
}) {
	const classes = useStyles();

	return (
		<div className={clsx([classes.main, className])}>
			<Typography className={classes.header} variant="h6">
				Come se fosse di cancelletto
			</Typography>
			<div className={classes.linkDiv}>
				{tagsList.map((tag, i) => {
					const category = tag.params.tag;
					return (
						<Link
							underline="none"
							className={classes.categoryLink}
							key={`tag-${category}`}
							href={`/capolavori/${category}`}
						>
							<Typography variant="body1">#{category}</Typography>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

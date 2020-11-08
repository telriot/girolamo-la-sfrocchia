import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Link from "@components/Link";
import clsx from "clsx";

const useStyles = makeStyles(
	({ breakpoints, palette, spacing, typography }) => ({
		navDiv: {
			display: "flex",
			//flexDirection: "column",
			alignItems: "flex-end",
			justifyContent: "space-around",
			[breakpoints.down("xs")]: {
				alignItems: "center",
				flexDirection: "column",
			},
			[breakpoints.down(480)]: {
				alignItems: "center",
			},
		},
		navDivSm: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			[breakpoints.down("sm")]: {
				justifyContent: "center",
			},
		},
		randomDiv: {
			cursor: "pointer",
			"&:focus": { outline: "none", "& >*": { color: blue[700] } },
		},
		navLink: {
			fontFamily: "Bebas Neue",
			fontSize: typography.h3.fontSize,
			color: palette.text.primary,
			padding: spacing(0.5, 0),
			"&:hover": {
				color: blue[700],
			},
			"&:focus": {
				outline: "none",
				color: blue[700],
			},
			[breakpoints.down("sm")]: {
				fontSize: typography.h4.fontSize,
			},
			[breakpoints.down("xs")]: {
				fontSize: typography.h4.fontSize,
			},
		},
		navLinkSm: {
			fontSize: typography.h5.fontSize,
			padding: spacing(0, 0.75),
			[breakpoints.down("xs")]: {
				fontSize: typography.h6.fontSize,
			},
		},
		activeLink: {
			color: blue[700],
		},
		linkDiv: {},
	})
);

export default function NavbarTop({
	small,
	className,
	postIds,
}: {
	small?: boolean;
	className?: string | object;
	postIds: string[];
}) {
	const classes = useStyles();
	const router = useRouter();

	const handleRandomClick = () => {
		const randomRoute = postIds.length
			? `/posts/${postIds[Math.floor(Math.random() * postIds.length)]}`
			: "/";
		router.push(randomRoute);
	};

	const responsiveLinkClassName = small
		? clsx([classes.navLink, classes.navLinkSm])
		: classes.navLink;

	return (
		<div
			className={clsx([small ? classes.navDivSm : classes.navDiv, className])}
		>
			<Link
				underline="none"
				activeClassName={classes.activeLink}
				className={responsiveLinkClassName}
				href="/capolavori"
			>
				Capolavori
			</Link>
			<Link
				underline="none"
				activeClassName={classes.activeLink}
				className={responsiveLinkClassName}
				href="/telefoni"
			>
				Telefoni
			</Link>
			<div
				className={classes.randomDiv}
				tabIndex={0}
				onClick={() => handleRandomClick()}
			>
				<Typography className={responsiveLinkClassName}>
					Madonne A Caso
				</Typography>
			</div>
		</div>
	);
}

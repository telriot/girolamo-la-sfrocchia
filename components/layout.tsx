import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NavbarTop from "@components/NavbarTop";
import Footer from "@components/Footer";
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
	container: {
		padding: spacing(4, 3, 12),
		minHeight: "100vh",
		position: "relative",
		maxWidth: "52.5rem",
		[breakpoints.down("md")]: {
			maxWidth: "48rem",
		},
		[breakpoints.down("sm")]: {
			maxWidth: "44rem",
			padding: spacing(4, 3, 21),
		},
		[breakpoints.down("xs")]: {
			marginBottom: spacing(3),
			padding: spacing(4, 2.5, 21),
		},
	},
	headerDiv: {
		marginBottom: spacing(12),
		padding: spacing(0, 1),

		[breakpoints.down("xs")]: {
			marginBottom: spacing(6),
		},
	},
	headerDivSm: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: spacing(4),
		[breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	header: {
		fontFamily: "Bebas Neue",
		cursor: "pointer",
		padding: spacing(0, 1),
	},
	subHeader: {
		padding: spacing(0, 4, 1.5),
		fontWeight: 300,
		fontStyle: "italic",
		[breakpoints.down("sm")]: {
			padding: spacing(0, 4, 1.125),
		},
		[breakpoints.down("xs")]: {
			padding: spacing(0, 6, 1.125),
		},
		[breakpoints.down(340)]: {
			padding: spacing(0, 2, 1.125),
		},
	},
	main: {
		marginBottom: spacing(4),
		[breakpoints.down("xs")]: {
			marginBottom: spacing(6),
		},
	},
}));

export const siteTitle = "Girolamo La Sfrocchia";

export default function Layout({
	children,
	home,
	postIds,
}: {
	children: React.ReactNode;
	home?: boolean;
	postIds?: string[];
}) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Tutti gli scritti di Girolamo la Sfrocchia, autore grandissimo e migliore di tutti"
				/>
			</Head>
			<Container className={classes.container}>
				{home ? (
					<>
						<header className={classes.headerDiv}>
							<Link href="/">
								<Typography
									variant="h1"
									align="center"
									className={classes.header}
								>
									Girolamo La Sfrocchia
								</Typography>
							</Link>

							<Typography
								variant="h5"
								component="h2"
								align="center"
								className={classes.subHeader}
							>
								{"Autore grandissimo e migliore di\u00A0tutti"}
							</Typography>
							<NavbarTop postIds={postIds} />
						</header>
						<div className={classes.main}>{children}</div>
					</>
				) : (
					<>
						<header className={classes.headerDivSm}>
							<Link href="/">
								<Typography
									variant="h1"
									align="center"
									className={classes.header}
								>
									GRLMLSFRCCH
								</Typography>
							</Link>
							<NavbarTop postIds={postIds} small={true} />
						</header>
						<div className={classes.main}>{children}</div>
					</>
				)}
				<Footer postIds={postIds} />
			</Container>
		</div>
	);
}

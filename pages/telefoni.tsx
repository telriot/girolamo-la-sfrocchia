import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostIds } from "@lib/posts";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Layout from "@components/layout";
import { contacts } from "@public/config";

export const getStaticProps: GetStaticProps = async () => {
	const ids = await getAllPostIds();
	const idsArr = ids.map((id) => id.params.id);
	return {
		props: {
			idsArr,
		},
	};
};

const useStyles = makeStyles(({ breakpoints, palette }) => ({
	container: {
		height: "50vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	mainText: {
		fontWeight: 300,
		lineHeight: "1.875rem",
		fontSize: "1.25rem",
		[breakpoints.down("md")]: {
			fontSize: "1.125rem",
			lineHeight: "1.6875rem",
		},
		[breakpoints.down("sm")]: {
			fontSize: "1rem",
			lineHeight: "1.625rem",
		},
		[breakpoints.down("xs")]: {
			fontSize: ".9375rem",
			lineHeight: "1.4375rem",
		},
	},
	link: {
		color: palette.primary.main,
		textDecoration: "none",
		transition: "color .3s",

		"&:hover": {
			color: palette.primary.light,
		},
	},
}));

export default function Home({ idsArr }: { idsArr: string[] }) {
	const classes = useStyles();
	return (
		<Layout postIds={idsArr}>
			<Head>
				<title>Contatti</title>
			</Head>

			<Container className={classes.container} maxWidth="md">
				<Typography className={classes.mainText}>
					Il curatore dei testi dell'eccezionale La Sfrocchia &egrave; una
					persona condannata dalle proprie scelte alla solitudine e alle
					amarezze. Scrivigli una letterina{" "}
					<a className={classes.link} href={`mailto:${contacts.email}`}>
						a questo indirizzo telematico qui
					</a>{" "}
					e lui ti risponder&agrave; con almeno il quaranta per cento della
					originale abilit&agrave; del magnifico Girolamo, che comunque &egrave;
					molto meglio della prima pagina della Nazione per cui zitti e
					pedalare.
				</Typography>
			</Container>
		</Layout>
	);
}

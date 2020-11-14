import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(({ breakpoints, typography, palette, spacing }) =>
	createStyles({
		form: {
			[breakpoints.down("xs")]: {
				marginBottom: spacing(2),
			},
		},

		label: {
			fontFamily: "Montserrat",
			color: palette.text.primary,
			[breakpoints.down("xs")]: {
				textAlign: "center",
			},
		},
		textField: {
			"& label.Mui-focused": {
				color: palette.primary.main,
			},
			"& .MuiFilledInput-underline:after": {
				borderBottomColor: palette.primary.main,
			},
		},
		helperText: {
			position: "absolute",
			left: 0,
			top: "-24px",
		},
		inputDiv: {
			position: "relative",

			display: "flex",
			borderRadius: "0px",
			[breakpoints.down("sm")]: {
				marginBottom: spacing(3),
			},
		},
		button: {
			fontFamily: "Bebas Neue",
			fontSize: typography.h6.fontSize,
			marginLeft: spacing(0.5),
			padding: spacing(0, 3),
			transition: "color .3s, background .3s",

			"&:hover": {
				color: palette.primary.main,
			},
		},
	})
);
function Newsletter() {
	const classes = useStyles();
	const [email, setEmail] = React.useState("");
	const [isSubscribing, setIsSubscribing] = React.useState(false);
	const [apiMessage, setApiMessage] = React.useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		apiMessage && setApiMessage("");
		setEmail(event.target.value);
	};
	const handleSubscribe = async () => {
		apiMessage && setApiMessage("");
		setIsSubscribing(true);
		try {
			const response = await axios.post("/api/newsletter", { email });
			typeof response.data === "string" && setApiMessage(response.data);
		} catch (error) {
			console.log(error.response.data.error);
			setApiMessage(error.response.data.error);
		}
		setIsSubscribing(false);
	};
	return (
		<form>
			<div className={classes.inputDiv}>
				<TextField
					id="newsletter-input"
					variant="filled"
					label="Iscriviti ai terroristi"
					type="email"
					value={email}
					placeholder="Con l'indirizzo email"
					className={classes.textField}
					onChange={handleChange}
					InputLabelProps={{ className: classes.label }}
				/>
				<FormHelperText className={classes.helperText}>
					{apiMessage}
				</FormHelperText>
				<Button
					disabled={isSubscribing}
					onClick={handleSubscribe}
					className={classes.button}
				>
					Conferma
				</Button>
			</div>
		</form>
	);
}

export default Newsletter;

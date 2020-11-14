import { NextApiRequest, NextApiResponse } from "next";
import {
	newsletterSubMailHTML,
	newsletterSubMailText,
} from "@public/assets/htmlStringTemplates";
import { contacts } from "@public/config";
const SibApiV3Sdk = require("sib-api-v3-sdk");
const nodemailer = require("nodemailer");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
var partnerKey = defaultClient.authentications["partner-key"];
partnerKey.apiKey = process.env.SENDINBLUE_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	let apiInstance = new SibApiV3Sdk.ContactsApi();
	let createContact = new SibApiV3Sdk.CreateContact();
	let contactEmails = new SibApiV3Sdk.AddContactToList();
	const listId = 2;
	createContact.email = req.body.email;
	contactEmails.emails = [req.body.email];

	try {
		await apiInstance.createContact(createContact);
		await apiInstance.addContactToList(listId, contactEmails);

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USERNAME,
				pass: process.env.GMAIL_PWD,
			},
		});
		let info = await transporter.sendMail({
			from: contacts.email, // sender address
			to: `${req.body.email}, beniamino.tartarini@gmail.com`, // list of receivers
			subject: `GRLMLSFRCCH - Iscrizione ai terroristi`, // Subject line
			text: newsletterSubMailText, // plain text body
			html: newsletterSubMailHTML,
		});

		return res.status(200).send("Bravo! Hai fatto proprio bene.");
	} catch (error) {
		console.error(error);
		return res.status(400).json({ error: "Errore dioporco. Riprova meglio!" });
	}
};

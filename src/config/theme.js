import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#10598e", //biru btn
		},
		secondary: {
			main: "#f50057",
		},
		tertiary: {
			main: "#1976D2",
		},
		background: {
			default: "#EEFAFF", //selain form
		},
		error: {
			main: "#d32f2f",
			light: "#ffebee", //muda di tabel
		},
		success: {
			main: "#388E3C",
			light: "#e8f5e9", //muda di tabel
		},
		text: {
			primary: "rgba(10, 10, 10, 1)",
			secondary: "#757575",
		},
	},
	typography: {
		button: {
			fontSize: "16px",
			textTransform: "capitalize",
			fontWeight: 700,
		},
		title: {
			color: "#2B283A",
			fontWeight: 700,
			fontSize: "35px",
		},
		desc: {
			color: "4A4E74",
			fontWeight: 400,
			fontSize: "18px",
			textAlign: "center",
		},
	},
});

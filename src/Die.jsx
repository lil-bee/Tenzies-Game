import { Box, Typography } from "@mui/material";

function Die(props) {
	return (
		<Box
			key={props.id}
			onClick={props.onClick}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "60px",
				height: "60px",
				borderRadius: "4px",
				backgroundColor: props.isKepencet ? "#59E391" : "#fff",
				boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
				"&:hover": {
					cursor: "pointer",
				},
			}}>
			<Typography variant="title">{props.value}</Typography>
		</Box>
	);
}

export default Die;

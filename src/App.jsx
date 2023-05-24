import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./config/theme";
import { ThemeProvider } from "@mui/material/styles";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { Box, Button, Typography } from "@mui/material";
import Die from "./Die";

function App() {
	// dice
	// - 10 kotak
	// - angkanya 1-6
	// - bisa kepencet
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		const allKepencet = dice.every((die) => die.isKepencet);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allKepencet && allSameValue) {
			setTenzies(true);
		}
	}, [dice]);

	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isKepencet: false,
			id: nanoid(),
		};
	}

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function holdDice(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isKepencet: !die.isKepencet } : die;
			})
		);
	}

	function rollDice() {
		if (!tenzies) {
			setDice((oldDice) =>
				oldDice.map((die) => {
					return die.isKepencet ? die : generateNewDie();
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice());
		}
	}

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isKepencet={die.isKepencet}
			onClick={() => holdDice(die.id)}
		/>
	));

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box>
					<Box
						sx={{
							height: "100vh",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							sx={{
								backgroundColor: "#0B2434",
								width: "560px",
								height: "579px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#fff",
									width: "460px",
									height: "479px",
									borderRadius: "10px",
									p: "30px",
								}}>
								{tenzies && <Confetti />}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										marginBottom: "30px",
									}}>
									<Typography variant="title">
										{tenzies ? "Yey Menang" : "Tenzies"}
									</Typography>
									<Typography variant="desc">
										Roll until all dice are the same. Click each die to freeze
										it at its current value between rolls.
									</Typography>
								</div>
								<div
									style={{
										display: "grid",
										gridTemplate: "auto auto / repeat(5,1fr)",
										gap: "20px",
									}}>
									{diceElements}
								</div>

								<Button
									onClick={() => rollDice()}
									variant="contained"
									sx={{
										mt: "30px",
										backgroundColor: "#5035FF",
									}}>
									{tenzies ? "Start Again" : "Roll"}
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;


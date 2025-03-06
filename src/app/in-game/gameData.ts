export const data: {
	open: { number: number; id: string[]; lastCardId: string[] };
	cardsFound: string[];
	isFinishGame: boolean;
	currentDifficulty: "easy" | "medium" | "hard" | "noTime";
} = {
	open: { number: 1, id: [], lastCardId: [] },
	cardsFound: [],
	isFinishGame: false,
	currentDifficulty: "noTime",
};

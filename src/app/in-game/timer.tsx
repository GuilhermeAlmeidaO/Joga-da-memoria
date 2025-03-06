import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { data } from "./gameData";

export function Timer() {
	const searchParams = useSearchParams();
	const difficulty = searchParams.get("difficulty");
	const [difficultGameTime, setDifficultGameTime] = useState<
		number | undefined
	>();
	const [displaySeg, setDisplaySeg] = useState(difficultGameTime);

	useEffect(() => {
		data.currentDifficulty = difficulty as
			| "easy"
			| "medium"
			| "hard"
			| "noTime";
		if (difficulty === "easy") setDifficultGameTime(120);
		if (difficulty === "medium") setDifficultGameTime(80);
		if (difficulty === "hard") setDifficultGameTime(2);

		const countdown = setInterval(() => {
			setDifficultGameTime((prevTime) => {
				if (prevTime === undefined) return;
				if (prevTime <= 0) {
					clearInterval(countdown!);
					return 0;
				}
				return prevTime - 1;
			});
		}, 1000);

		return () => {
			if (countdown) clearInterval(countdown);
		};
	}, [difficulty]);

	useEffect(() => {
		setDisplaySeg(difficultGameTime);
	}, [difficultGameTime]);

	if (difficulty === "noTime") return;
	if (displaySeg !== 0) {
		return (
			<div className="h-[5dvh] flex items-center justify-center">
				<span className="text-xl">{displaySeg}</span>
			</div>
		);
	} else
		return (
			<AlertDialog open={true}>
				<AlertDialogTrigger></AlertDialogTrigger>
				<AlertDialogContent className="bg-neutral-950 text-white border-neutral-700">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-xl">You lose!</AlertDialogTitle>
						<AlertDialogDescription className="text-base">
							Almost you win. Try it again if you have a good memory.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction
							onClick={() =>
								(location.href = `/in-game?difficulty=${difficulty}`)
							}
						>
							Try this level again
						</AlertDialogAction>
						<AlertDialogAction onClick={() => (location.href = "/")}>
							Back to home
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		);
}

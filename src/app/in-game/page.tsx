"use client";

import { Suspense, useEffect, useState } from "react";
import { Cards } from "./cards";
import { Timer } from "./timer";
import { data } from "./gameData";
import {
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function InGame() {
	const [wasClicked, setWasClicked] = useState("");
	const [isFinishGameWin, setIsFinishGameWin] = useState(false);
	useEffect(() => {
		if (data.isFinishGame) setIsFinishGameWin(true);
	}, [wasClicked]);
	return (
		<Suspense>
			<div className="bg-neutral-950 min-h-[100dvh] flex items-center justify-center text-white flex-col ">
				<Timer />
				<Cards setWasClicked={setWasClicked} />
				<AlertDialog open={isFinishGameWin}>
					<AlertDialogTrigger></AlertDialogTrigger>
					<AlertDialogContent className="bg-neutral-950 text-white border-neutral-700">
						<AlertDialogHeader>
							<AlertDialogTitle className="text-xl">You Won!</AlertDialogTitle>
							<AlertDialogDescription className="text-base">
								You were so fast! Congratulations, not everyone can complete it!
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogAction
								onClick={() =>
									(location.href = `/in-game?difficulty=${data.currentDifficulty}`)
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
			</div>
		</Suspense>
	);
}

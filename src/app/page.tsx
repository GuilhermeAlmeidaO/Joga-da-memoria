"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Brain } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
	const [difficulty, setDifficulty] = useState<
		undefined | "easy" | "medium" | "hard" | "noTime"
	>();

	const handleStaterGame = () => {
		if (difficulty === undefined) {
			toast("Choice a difficulty to play", { type: "warning" });
			return;
		}
		location.href = `/in-game?difficulty=${difficulty}`;
	};

	return (
		<div className="bg-neutral-950 min-h-[100dvh] flex items-center justify-center">
			<Card className="bg-transparent text-white">
				<CardHeader>
					<CardTitle className="flex gap-3 text-2xl items-center">
						<Brain />
						Memory Game
					</CardTitle>
					<CardDescription>
						Challenge your memory with this fun game
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<h1 className="font-semibold text-sm">Difficulty</h1>
					<RadioGroup className="flex flex-col gap-4 w-full">
						<div
							className="flex items-center space-x-2"
							onClick={() => setDifficulty("easy")}
						>
							<RadioGroupItem value="easy" id="easy" />
							<Label htmlFor="easy" className="space-y-1 w-full">
								<p>Easy</p>
								<p className="text-neutral-300">
									<span className="text-semibold">time: </span>120s
								</p>
							</Label>
						</div>
						<div
							className="flex items-center space-x-2"
							onClick={() => setDifficulty("medium")}
						>
							<RadioGroupItem value="medium" id="medium" />
							<Label htmlFor="medium" className="space-y-1 w-full">
								<p>Medium</p>
								<p className="text-neutral-300">
									<span className="text-semibold">time: </span>80s
								</p>
							</Label>
						</div>
						<div
							className="flex items-center space-x-2"
							onClick={() => setDifficulty("hard")}
						>
							<RadioGroupItem value="hard" id="hard" />
							<Label htmlFor="hard" className="space-y-1 w-full">
								<p>Hard</p>
								<p className="text-neutral-300">
									<span className="text-semibold">time: </span>50s
								</p>
							</Label>
						</div>
						<div
							className="flex items-center space-x-2"
							onClick={() => setDifficulty("noTime")}
						>
							<RadioGroupItem value="test" id="test" />
							<Label htmlFor="test" className="space-y-1 w-full">
								<p>No time</p>
							</Label>
						</div>
					</RadioGroup>
				</CardContent>
				<CardFooter>
					<Button className="w-full" onClick={handleStaterGame}>
						Start Game
					</Button>
				</CardFooter>
			</Card>
			<div className="text-neutral-500 fixed bottom-0 right-0 m-3 text-sm cursor-default">
				<p>
					Made By{" "}
					<a href="https://devguialmeida.vercel.app" target="_blank">
						<span className="hover:underline cursor-pointer">
							Guilherme Almeida
						</span>
					</a>
				</p>
			</div>
		</div>
	);
}

"use client";

import { useEffect, useState, useMemo } from "react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import * as icons from "lucide-react";
import { showCard } from "./handlers/showCard";

interface Prop {
	setWasClicked: (id: string) => void;
}

export function Cards({ setWasClicked }: Prop) {
	type IconType = ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;

	type ListCardsType = { [key: string]: IconType };

	const listCards: ListCardsType = useMemo(
		() => ({
			envolpe: icons.Mail,
			plus: icons.Plus,
			laptop: icons.Laptop,
			house: icons.House,
			star: icons.Star,
			heart: icons.Heart,
			cloud: icons.Cloud,
			bell: icons.Bell,
			car: icons.Car,
			apple: icons.Apple,
			gear: icons.Settings,
			minus: icons.Minus,
			plane: icons.Plane,
			check: icons.Check,
			folder: icons.Folder,
			atom: icons.Atom,
			bed: icons.Bed,
			box: icons.Box,
			camera: icons.Camera,
			clock: icons.Clock,
			cross: icons.Cross,
			eye: icons.Eye,
		}),
		[]
	);

	const [shuffledCards, setShuffledCards] = useState<[string, IconType][]>([]);

	useEffect(() => {
		const entries = Object.entries(listCards);
		const shuffled = [...entries, ...entries]
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		setShuffledCards(shuffled);
	}, [listCards]);

	return (
		<div className="flex flex-wrap gap-3 w-full justify-center p-4 min-h-[90dvh]">
			{shuffledCards.map(([key, Icon], index) => (
				<div
					key={`${key}-${index}`}
					className="cursor-pointer bg-neutral-900 text-neutral-900 border border-transparent p-3 rounded-lg flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
					id={`${key}-${index}`}
					data-matched="false"
					onClick={() => {
						showCard(`${key}-${index}`);
						setWasClicked(`${key}-${index}`);
					}}
				>
					<Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
				</div>
			))}
		</div>
	);
}

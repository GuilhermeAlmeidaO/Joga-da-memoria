export type InfoCardsType = {
    cardsOpenedID: string[]
    amount: number
    lastCards: string[]
};

export const infoCards: InfoCardsType = {
    "cardsOpenedID": [],
    "amount": 0,
    "lastCards": []
}

export let cardsFound: string[] = [];

export function updateCardsFound(newCardsFound: string) {
    cardsFound.push(newCardsFound)
}
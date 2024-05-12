import styled from 'styled-components'
// import { Link } from 'react-router-dom'

interface IProps {
    children: React.ReactNode
    bgColor: string,
    link: string
}

function PickDifficulty({ children, bgColor, link }: IProps) {
    const Button = styled.button`
        background-color: ${bgColor};
        color: #000;
        border: 1px solid transparent;
        padding: 20px;
        font-size: 2rem;
        border-radius: 50px;
        width: 70%;

        &:hover{
            color: ${bgColor};
            background-color: transparent;
            border: 1px solid ${bgColor};
        }

        @media (max-width: 425px){
            width: 120%;
        }

        @media (max-width: 630px){
            width: 100%;
        }
    `

    const Link = styled.a`
        all: inherit;
        padding: 0;
        width: 100%;
    `

    return (
        <Link href={`/in-game?difficulty=${link}`}>
            <Button>{children}</Button>
        </Link>
    )
}

export default PickDifficulty
import Hero from "../_compornents/Hero/Hero"
import Sheet from "../_compornents/Sheet/Sheet"

type Props = {
    children: React.ReactNode
}

export default function Newslayout({ children }: Props) {
    return (
        <>
            <Hero title='News' sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    )
}
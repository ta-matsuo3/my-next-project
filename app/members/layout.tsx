import Hero from '../_compornents/Hero/Hero'
import Sheet from '../_compornents/Sheet/Sheet'

type Props = {
    children: React.ReactNode
}

export default function ({ children }: Props) {
    return (
        <>
            <Hero title='Member' sub='メンバー' />
            <Sheet>
                {children}
            </Sheet>
        </>
    )
}
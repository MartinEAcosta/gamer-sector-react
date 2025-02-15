import { AuthScreen } from "../auth/components/AuthScreen"
import { Footer } from "../components"
import { Header, Nav } from "../ui"

export const LoginPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <AuthScreen />
            <Footer />
        </>
    )
}

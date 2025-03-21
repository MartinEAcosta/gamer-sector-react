import { AuthLayout, FormLogin } from "../components";
import { Footer } from "../../ui/index";

import { Header, Nav } from "../../ui/components/";

export const LoginPage = () => {

    return (
        <>
            <Header />
            <Nav />
            <AuthLayout title={'Iniciar Sesión'}>
                <FormLogin />
            </AuthLayout>
            <Footer />
        </>
    )
}

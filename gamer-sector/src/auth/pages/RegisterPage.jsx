import { Header , Nav } from "../../ui/components";
import { FormRegister } from "../components/FormRegister";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {

    return (
        <>
            <Header />
            <Nav />
            <AuthLayout title={'Crear una cuenta'} >
                <FormRegister />
            </AuthLayout>
        
        </>
    );
}

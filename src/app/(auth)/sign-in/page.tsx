import { AuthLayout } from "../_components/auth-layout"

export default function SignInPage() {
    return (
        <AuthLayout
            title="Bem-vindo de volta"
            description="Entre com suas credenciais para continuar"   
            footerText="Não tem uma conta ?"
            footerLinkText="Criar conta"
            footerHref="/sign-up"
        >  
        <form>  </form> 
        </AuthLayout>
    )

}
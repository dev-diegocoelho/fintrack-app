import { AuthLayout } from "../_components/auth-layout"

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Criar conta"
            description="Preencha os dados para começar"   
            footerText="Já tem uma conta ?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >  
        <form>  </form> 
        </AuthLayout>
    )

}
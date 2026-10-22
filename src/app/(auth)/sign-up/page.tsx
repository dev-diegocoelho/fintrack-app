import { AuthLayout } from "../auth-layout"
import ArrowIcon from '../../../assets/arrow-icon.png'
import Image from 'next/image'
import { inputClass } from "../_styles/input"

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Criar conta"
            description="Preencha os dados para começar"   
            footerText="Já tem uma conta ?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >  
        <form className="space-y-6 text-[#ffff]"> 
            
             <label className="block text-sm text-zinc-300 mb-2">Nome</label>
                <input 
                type="text" 
                placeholder="Seu nome"
                className={inputClass}>
                </input>

                <label className="block text-sm text-zinc-300 mb-2">E-mail</label>
                <input 
                type="email" 
                placeholder="seu@email.com"
                className={inputClass}>
                </input>
           
            
                <label className="block text-sm text-zinc-300 mb-2">Senha (min. 8 caracteres)</label>
                <input 
                type="password" 
                placeholder="********"
                className={inputClass}>
                </input>
                <button type="submit" className="w-full bg-[#9333EA] flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold cursor-pointer">
                    <span>Criar Conta</span>
                <Image src={ArrowIcon} alt="Ícone de seta"/>
                </button>
            
        </form> 
        </AuthLayout>
    )

}
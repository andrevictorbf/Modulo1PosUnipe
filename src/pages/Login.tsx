import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  login: z
    .string()
    .min(1, {message: "Preenchimento obrigatório"}),
  password: z
    .string()
    .min(1, {message: "Preenchimento obrigatório"})
})

type FormData = z.infer<typeof schema>

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate();

  function OnSubmit(data: FormData){
    
    navigate("/dashboard")
    
  }

  return (
    <main className='flex flex-col gap-7 items-center justify-center min-h-dvh p-4'>
      <div className='flex flex-col md:flex-row gap-5 items-center'>
        <img
          className='w-44'
          src="/images/logo.png"
          alt="Logo"
        />
        <h1 className='text-4xl sm:text-6xl text-center'>Seu Estoque - Login</h1>
      </div>
      <div className="flex justify-center bg-secondary-variation drop-shadow-[0px_4px_32px] drop-shadow-black/25 p-7 w-full max-w-234 rounded-4xl">
        <form
          onSubmit={handleSubmit(OnSubmit)}
          className='flex flex-col gap-4 sm:gap-8 max-w-172 w-full'
        >
          <div className='text-4xl sm:text-6xl'>Login</div>
          <div className="flex flex-col gap-2">
            <label className="text-2xl sm:text-3xl">Usuário:</label>
            <input
              type="text"
              placeholder='Digite o seu usuário'
              className="bg-secondary-variation2 rounded-3xl h-20 px-5 sm:px-10 text-2xl outline-none drop-shadow-[0px_4px_16px] drop-shadow-black/25"
              {...register("login")}
            />
            {errors.login && (
              <span className="text-right text-tertiary text-xl italic text-shadow-[0px_4px_8px] text-shadow-black/25">{errors.login.message?.toString()}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-2xl sm:text-3xl">Senha:</label>
            <input
              type="password"
              placeholder='Digite a sua senha'
              className="bg-secondary-variation2 rounded-3xl h-20 px-5 sm:px-10 text-2xl outline-none drop-shadow-[0px_4px_16px] drop-shadow-black/25"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-right text-tertiary text-xl italic text-shadow-[0px_4px_8px] text-shadow-black/25">{errors.password.message?.toString()}</span>
            )}
          </div>
          <button
            className="bg-secondary-variation3 hover:bg-quaternary transition rounded-2xl text-2xl py-4 drop-shadow-[4px_4px_8px] drop-shadow-black/25 mt-4 w-full max-w-50 mx-auto"
            type="submit"
          >
            Entrar
          </button>
          <div className="mx-auto text-2xl text-shadow-[0px_4px_8px] text-shadow-black/25 hover:text-tertiary hover:underline transition">
            <NavLink to={'/'}>
              Esqueceu a sua senha?
            </NavLink>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-2 self-center lg:self-end mt-4">
        <label className="text-xl max-w-30 text-center text-shadow-[0px_4px_8px] text-shadow-black/25">Precisa de ajuda?</label>
        <NavLink
          to={'/'}
          className='bg-tertiary hover:bg-tertiary/50 transition text-xl text-center p-2 rounded-2xl drop-shadow-[4px_4px_8px] drop-shadow-black/25'
        >
          Suporte
        </NavLink>
      </div>
      
    </main>
  )
}

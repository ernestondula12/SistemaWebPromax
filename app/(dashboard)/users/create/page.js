import PageHeader from "@/components/PageHeader";

export default function page() {
  return (
    <>
        <PageHeader title="Criar um novo usuario">
                Aqui voce pode criar um novo usuario
        </PageHeader>

        <section className="mt-8">
            <form className="max-w-md">
                <div className="flex gap-4">
                    <div className="form-group">
                        <label htmlFor="firstName">Nome:</label>
                        <input type="text" name="firstName" id="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Apelido:</label>
                        <input type="text" name="lastName" id="lastName" required />
                    </div>
                </div>
                <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" required />
                </div>
                <div className="form-group">
                        <label htmlFor="password">Palavra Passe:</label>
                        <input type="password" name="password" id="password" required />
                </div>

                <div className="flex gap-4">
                    <div className="form-group">
                        <label htmlFor="birthday">Data de Nascimento:</label>
                        <input type="date" name="birthday" id="birthday" required />
                    </div>
                    <div className="form-group">
                       <label>Genero</label>
                       <div>
                        <label htmlFor="male">
                            M{""}
                            <input type="radio" value="M"
                             name="gender" 
                             id="male" required />
                        </label>
                        <label htmlFor="female" className="mx-4">
                            F{""}
                            <input type="radio" value="F"
                             name="gender" 
                             id="female" required />
                        </label>
                        <label htmlFor="anonymous">
                            X{""}
                            <input type="radio" value="X"
                             name="gender" 
                             id="anonymous" required />
                        </label>
                       </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="number" name="phone" id="phone" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Função</label>
                        <select  name="role" id="role" className="w-full cursor-pointer">
                            <option value="user">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>
                </div>
                <button 
                className="bg-sky-500
                 hover:bg-sky-600 transition-all p-2
                  text-white disabled:bg-zinc-500 w-full">Criar usúario</button>
            </form>
        </section>
    </>
  )
}

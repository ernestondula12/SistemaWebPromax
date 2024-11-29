import PageHeader from '@/components/PageHeader'
import React from 'react'

export default function page() {
  return (
    <>
        <PageHeader title="Criar um novo produto">
                Aqui voce pode criar um novo produto
        </PageHeader>

        <section className="mt-8">
            <form className="max-w-md">
                <div className="flex gap-4">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marca/Fabricante</label>
                        <input type="text" name="lastName" id="lastName" required />
                    </div>
                </div>
                <div className="flex gap-4">
                <div className="form-group">
                        <label htmlFor="category">Categoria</label>
                        <select  name="category" id="category" className="w-full cursor-pointer">
                            <option value="eletronicos">Eletronicos</option>
                            <option value="Casa e decoracao">Casa e Decoração</option>
                            <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                            <option value="Saude e Beleza">Saúde e Beleza</option>
                            <option value="Esportes e lazer">Esportes e Lazer</option>
                            <option value="Automativo">Automativo</option>
                            <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
                            <option value="Livros e midias">Livros e midias</option>
                            <option value="Ferramentas e Equipamentos">Ferramentas e Equipamentos</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" name="phone" id="phone" required/>
                    </div>
                </div>
                <div className="flex gap-4">
                <div className="form-group">
                        <label htmlFor="cost">Custo de uni(Ao)</label>
                        <input type="number" name="cost" id="cost" required />
                    </div>
                    <div className="form-group">
                            <label htmlFor="price">Preço de venda</label>
                            <input type="number" name="price" id="price" required />
                        </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='description'>Descrição</label>
                    <textarea name='description' id='description' rows="5" className='w-full'>
                            
                    </textarea>
                </div>
                <button 
                className="bg-sky-500
                 hover:bg-sky-600 transition-all p-2
                  text-white disabled:bg-zinc-500 w-full">Criar Produto</button>
            </form>
        </section>
    </>
  )
}

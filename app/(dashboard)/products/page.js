import PageHeader from '@/components/PageHeader'
import ProductTableRow from '@/components/ProductTableRow'
import React from 'react'

export default function page() {
  return (
    //Usando props title para determinado titulo em suas paginas
    <>
        <PageHeader title="Lista de Produtos">
            Aqui voce vai poder listar e visualizar os produtos adicionados no sistema
        </PageHeader>

        <section className="mt-8">
            <p className="mb-4">Total de Usuários Cadastrados: 8</p>

            <table className="w-full">
                <thead className="bg-zinc-700 text-white">
                   <tr className="text-left">
                        <th></th>
                        <th className='p-2'>Nome</th>
                        <th>Categoria</th>
                        <th>Qtd</th>
                        <th>Custo(Ao)</th>
                        <th>Custo Total</th>
                        <th>Preço(Ao)</th>
                        <th>Preço/Total</th>
                        <th>Ações</th>
                   </tr>
                </thead>
                <tbody>
                    <ProductTableRow i={1}/>
                    <ProductTableRow i={2}/>
                    <ProductTableRow i={3}/>
                    <ProductTableRow i={4}/>
                    <ProductTableRow i={5}/>
                    <ProductTableRow i={6}/>
                    <ProductTableRow i={7}/>
                    <ProductTableRow i={8}/>
                </tbody>
            </table>
        </section>

    </>
  )
}

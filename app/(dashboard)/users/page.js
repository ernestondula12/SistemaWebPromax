import PageHeader from '@/components/PageHeader'
import UserTableRow from '@/components/UserTableRow'
import React from 'react'
 
 export default function page() {
    //Usando fragmento do React
   return <>
       
       <PageHeader title="Lista de Usuarios">
            Aqui voce visualizar e listar os usuarios cadastrados no sistema
       </PageHeader>

        <section className="mt-8">
            <p className="mb-4">Total de Usuários Cadastrados: 8</p>

            <table className="w-full">
                <thead className="bg-zinc-700 text-white">
                   <tr className="text-left">
                        <th></th>
                        <th className='p-2'>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                   </tr>
                </thead>
                <tbody>
                    <UserTableRow i={1}/>
                    <UserTableRow i={2}/>
                    <UserTableRow i={3}/>
                    <UserTableRow i={4}/>
                    <UserTableRow i={5}/>
                    <UserTableRow i={6}/>
                    <UserTableRow i={7}/>
                    <UserTableRow i={8}/>
                </tbody>
            </table>
        </section>
   </>
 }
 
import React from 'react'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function UserTableRow({ i }) {
  return (
    <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100">
    <td className="p-2">{i}</td>
    <td className="p-2">Ernesto Ndula</td>
    <td>ernestondulandula@gmail.com</td>
    <td>Admin</td>
    <td>30</td>
    <td>M</td>
    <td>926531706</td>
    <td className="flex gap-2 p-2">
        <Link href="/users/ernesto.com@formulawebpromax.com"
            className="bg-sky-500 w-8 h-8 rounded-md
             text-zinc-900 hover:bg-sky-600 p-1 transition-all">
            <FontAwesomeIcon icon={faPencil} className="w-5" />
        </Link>
        <button
            className="bg-red-500 w-8 h-8 rounded-md
            text-zinc-900 hover:bg-sky-600 p-1 transition-all"
        >
            <FontAwesomeIcon icon={faTrash} className="w-5" />
        </button>
    </td>
</tr> 
  )
}

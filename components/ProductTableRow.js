import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ProductTableRow({ i }) {
  return (
    <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100">
    <td className="p-2">{i}</td>
    <td className="p-2">Computador HP Ryzen 5</td>
    <td>Eletronicos</td>
    <td>50</td>
    <td>250,000.00</td>
    <td>4,000,000.00</td>
    <td>50,000</td>
    <td>5,000.00</td>
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

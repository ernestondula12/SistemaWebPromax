import { faCalendar, faRightFromBracket, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const date = new Date();

  return (
    <nav className="bg-zinc-300 fixed py-2 px-16
    w-[calc(100%-250px)] flex justify-between">
        <div>
            <div>
                <p className="flex gap-1 items-center">
                <FontAwesomeIcon icon={faCalendar} className="w-5"/>
                <span className="font-bold">Data:</span>
                <span>
                    {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                </span>
                </p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <p className="flex items-center">
                <span className="flex mr-1 bg-zinc-900 rounded-full
                text-sky-500 w-8 h-8 items-center justify-center"
                >
                <FontAwesomeIcon icon={faUserShield} className="w-5"/>
                </span>
                <Link href="/users" className="hover:text-sky-500 
                transition-all hover:-translate-y-[2px]"
                >Ernesto Ndula</Link>
            </p>

            <button className="flex item-center justfy-center 
            hover:text-sky-500 transition-all hover:-translate-y-[2px] gap-1"
            >
                <FontAwesomeIcon icon={faRightFromBracket} className="w-5"/>
                <span>Sair</span>
            </button>
        </div>
  </nav>
  )
}

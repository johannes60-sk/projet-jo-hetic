import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
  

const Athletes = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5173/api/athletes')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.error(e))
    }, [])

  return (
    <>
        <h1 className='text-2xl font-bold text-center my-4'>Liste des Athlètes</h1>
        <Input className='mx-auto my-4 w-3/5 rounded-md border-gray-600 placeholder:text-opacity-80' placeholder='Recherchez par nom' />
        <div className="mx-4">
            <Table className=' overflow-hidden caption-top'>
                <TableHeader className=''>
                    <TableRow>
                    <TableHead >Pays</TableHead>
                    <TableHead>Prénom</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead className='text-right'>Nombre de médailles</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>
                    {
                        data.length > 0 ? data.map((athlete, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-xl">{athlete.country}</TableCell>
                                <TableCell>{athlete.firstName}</TableCell>
                                <TableCell>{athlete.lastName}</TableCell>
                                <TableCell className="flex justify-end gap-2">
                                    <div>🥇 {athlete.medails.gold}</div>
                                    <div>🥈 {athlete.medails.silver}</div>
                                    <div>🥉 {athlete.medails.bronze}</div>
                                </TableCell>
                            </TableRow>
                        ))
                        :
                        <TableRow>
                            <TableCell colSpan="4" className="text-center">Aucune donnée disponible</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </div>
    </>
  )
}

export default Athletes
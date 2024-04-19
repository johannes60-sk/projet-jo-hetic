import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
  

const Athletes = () => {
  return (
    <>
        <h1 className='text-2xl font-bold text-center my-4'>Liste des Athlètes</h1>
        <Input className='mx-auto my-4 w-3/5 rounded-md border-gray-600 placeholder:text-opacity-80' placeholder='Recherchez par nom' />
        <div className="mx-4">
            <Table className=' overflow-hidden caption-top'>
                {/* <TableCaption className='text-xl font-bold'>Liste des Athlètes.</TableCaption> */}
                <TableHeader className=''>
                    <TableRow>
                    <TableHead >Pays</TableHead>
                    <TableHead>Prénom</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead className='text-right'>Nombre de médailles</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>
                    <TableRow>
                        <TableCell className="text-xl">🇫🇷</TableCell>
                        <TableCell>Hugo</TableCell>
                        <TableCell>Lhernould</TableCell>
                        <TableCell className="flex justify-end gap-2">
                            <div>🥇 10</div>
                            <div>🥈 40</div>
                            <div>🥉 30</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-xl">🇫🇷</TableCell>
                        <TableCell>Hugo</TableCell>
                        <TableCell>Lhernould</TableCell>
                        <TableCell className="flex justify-end gap-2">
                            <div>🥇 10</div>
                            <div>🥈 40</div>
                            <div>🥉 30</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-xl">🇫🇷</TableCell>
                        <TableCell>Hugo</TableCell>
                        <TableCell>Lhernould</TableCell>
                        <TableCell className="flex justify-end gap-2">
                            <div>🥇 10</div>
                            <div>🥈 40</div>
                            <div>🥉 30</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-xl">🇫🇷</TableCell>
                        <TableCell>Hugo</TableCell>
                        <TableCell>Lhernould</TableCell>
                        <TableCell className="flex justify-end gap-2">
                            <div>🥇 10</div>
                            <div>🥈 40</div>
                            <div>🥉 30</div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </>
  )
}

export default Athletes
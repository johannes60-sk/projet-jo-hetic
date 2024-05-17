import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";

export default function CountryMedals() {
    const [receivedData, setReceivedData] = useState(null)
    const [searchCountry, setSearchCountry] = useState("");
    const [countriesData, setCountriesData] = useState([]);
    const [filterValue, setFilterValue] = useState("all-medals");

    const handleSearchCountry = (value) => {
        setSearchCountry(value);
        
        if(value) {
            setCountriesData(receivedData.filter((countryData) => countryData.name.toLowerCase().includes(value.toLowerCase())));
            return;
        }

        setCountriesData(receivedData)
    }

    const handleFilterChange = (value) => {
        setFilterValue(value);
        switch(value) {
            case "gold-medals":
                setCountriesData(countriesData.sort((currentData, nextData) =>  nextData.medals.gold - currentData.medals.gold));
            break;
            case "silver-medals":
                setCountriesData(countriesData.sort((currentData, nextData) => nextData.medals.silver - currentData.medals.silver));
            break;
            case "bronze-medals":
                setCountriesData(countriesData.sort((currentData, nextData) =>  nextData.medals.bronze - currentData.medals.bronze));
            break;
            case "all-medals":
            default:
                setCountriesData(countriesData.sort((currentData, nextData) => nextData.medals.totals - currentData.medals.totals));
            break;
        }
    }

    useEffect(() => {
        if(!receivedData) {
            fetch('http://localhost:5173/api/medals')
            .then(response => response.json())
            .then(data => {
                setCountriesData(data)
                setReceivedData(data)
            })
            .catch(e => console.log(e));
        }
    }, [receivedData])

    if(!receivedData) {
        return <h1 className='text-2xl flex justify-center items-center h-screen my-4'>Chargement ...</h1>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-4'>Nombre de médailles par pays</h1>
            <Input 
            className='mx-auto my-4 w-3/5 rounded-md border-gray-600 placeholder:text-opacity-80'
            placeholder='Recherchez par pays'
            value={searchCountry}
            onChange={e => handleSearchCountry(e.target.value)}
            />

            <div className="flex justify-center items-center">
                    <RadioGroup className="flex items-center" defaultValue={filterValue} onValueChange={handleFilterChange}>
                    <div className="py-4 mr-4 space-x-2">
                        <RadioGroupItem value="all-medals" id="all-medals" />
                        <Label htmlFor="all-medals">Toutes les médailles</Label>
                    </div>
                    <div className="py-4 mr-4 space-x-2">
                        <RadioGroupItem value="gold-medals" id="gold-medals" />
                        <Label htmlFor="gold-medals">Médailles d&apos;or</Label>
                    </div>
                    <div className="py-4 mr-4 space-x-2">
                        <RadioGroupItem value="silver-medals" id="silver-medals" />
                        <Label htmlFor="silver-medals">Médailles d&apos;argent</Label>
                    </div>
                    <div className="py-4 mr-4 space-x-2">
                        <RadioGroupItem value="bronze-medals" id="bronze-medals" />
                        <Label htmlFor="bronze-medals">Médailles de bronze</Label>
                    </div>
                </RadioGroup>
            </div>

            {countriesData.length > 0 ? 
            <div className="mx-4">
                <Table className=' overflow-hidden caption-top'>
                    <TableHeader className=''>
                        <TableRow>
                            <TableHead />
                            <TableHead>Pays</TableHead>
                            {(filterValue === "all-medals" || filterValue === "gold-medals") && <TableHead>{"Médailles d'or 🥇"}</TableHead>}
                            {(filterValue === "all-medals" || filterValue === "silver-medals") && <TableHead>{"Médailles d'argent 🥈"}</TableHead>}
                            {(filterValue === "all-medals" || filterValue === "bronze-medals") && <TableHead>{"Médailles de bronze 🥉"}</TableHead>}
                            {filterValue === "all-medals" && <TableHead className='text-right'>{"Total"}</TableHead>}
                        </TableRow>
                    </TableHeader>
                    <TableBody className=''>
                        {countriesData.map((countryData) => <TableRow key={countryData.id}>
                            <TableCell />
                            <TableCell>{countryData.name}</TableCell>
                            {(filterValue === "all-medals" || filterValue === "gold-medals") && <TableCell className="bg-amber-200	">{countryData.medals.gold}</TableCell>}
                            {(filterValue === "all-medals" || filterValue === "silver-medals") && <TableCell className="bg-gray-400">{countryData.medals.silver}</TableCell>}
                            {(filterValue === "all-medals" || filterValue === "bronze-medals") && <TableCell className="bg-amber-700">{countryData.medals.bronze}</TableCell>}
                            {filterValue === "all-medals" && <TableCell className="flex justify-end gap-2">{countryData.medals.totals}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            :
            <h1 className='text-2xl text-center my-4'>Aucun résultat</h1>
            }
        </div>);
}
import { IsNotEmpty, Matches } from "class-validator";

export class CreateHouseDTO{
    @IsNotEmpty({message : "The address field cannot be empty"} )
    address: string;
    @IsNotEmpty({message : "The city field cannot be empty"} )
    city: string;
    @IsNotEmpty({message : "The state field cannot be empty"} )
    state: string;
    @IsNotEmpty({message : "The size field cannot be empty"} )
    size: number;
    @IsNotEmpty({message : "The type field cannot be empty"} )
    type: string;
    @IsNotEmpty({message : "The zipCode field cannot be empty"} )
    zipCode: string;
    @IsNotEmpty({message : "The rooms field cannot be empty"} )
    rooms: number;
    @IsNotEmpty({message : "The bathrooms field cannot be empty"} )
    bathrooms: number;
    @IsNotEmpty({message : "The parking field cannot be empty"} )
    parking: boolean;
    @IsNotEmpty({message : "The price field cannot be empty"} )
    price: number;
    @IsNotEmpty({message : "The code field cannot be empty"} )
    @Matches(/^[a-zA-Z]{4}[0-9]{4}$/, {message : "The code must contain 4 letters and 4 numbers"})
    code: string;
    image: string;
}
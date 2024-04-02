import { Body, Controller, Get, Post } from '@nestjs/common';
import { HousesService } from './houses.service';
import { House } from './houses.entity';
import { CreateHouseDTO } from './dto/create-house.dto';

@Controller('houses')
export class HousesController {

    constructor( private readonly housesService: HousesService) {}

    @Post()
    async create(@Body() createHouseDTO : CreateHouseDTO ) : Promise<House>{
        console.log(createHouseDTO);
        return this.housesService.create(createHouseDTO);
    }

    @Get()
    async findAllHouses(): Promise<House[]>{
        return this.housesService.findAllHouses();
    }
}

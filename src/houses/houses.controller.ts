import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    async findOne(@Param('id') id : string) : Promise<House>{
        return this.housesService.findOne(id);
    }

    @Put(':id')
    async updateHouse(@Param('id') id : string,  @Body() updateHouse : CreateHouseDTO){
        return this.housesService.update(id, updateHouse);
    }

    @Delete('id')
    async deleteHouse(@Param('id') id : string) : Promise<boolean>{
        return this.housesService.delete(id);
    }
}



import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { houseSchema } from './house.schema';
import { HousesService } from './houses.service';

@Module({
    imports: [MongooseModule.forFeature([{ name : 'House', schema : houseSchema}])],
    controllers: [HousesController],
    providers: [HousesService],
})
export class HousesModule {}

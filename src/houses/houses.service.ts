import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House } from './houses.entity';
import { Model } from 'mongoose';
import { CreateHouseDTO } from './dto/create-house.dto';

@Injectable()
export class HousesService {
    constructor(@InjectModel('House') private readonly houseModel: Model<House>) {}
        
        async create(createHouseDTO: CreateHouseDTO ){

            const newHouse = new this.houseModel(createHouseDTO);
            console.log(newHouse);
            return newHouse.save();            
        }

        async findAllHouses(): Promise<House[]>{
            return this.houseModel.find();
        }

        async findOne(id: string): Promise<House>{
            try{
                return await this.houseModel.findById(id);
            }catch(error){
                throw new NotFoundException('House not found');
            }
        }

        async update(id: string, houseDTO: CreateHouseDTO): Promise<House>{
            try{
                return await this.houseModel.findByIdAndUpdate(id, houseDTO, { new: true});
            }catch(error){
                throw new NotFoundException('House not found');
            }
        }

        async delete(id: string): Promise<boolean> {
            const house = await this.houseModel.findByIdAndDelete(id);
            try {
                if(!house){
                    throw new NotFoundException('House not found');
                }
            } catch (error) {
                throw new NotFoundException('House not found');
            }
            return true;
        }


    }


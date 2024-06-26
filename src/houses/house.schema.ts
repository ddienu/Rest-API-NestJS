import * as mongoose from "mongoose";

export const houseSchema = new mongoose.Schema({
    
    address : {
        type : String,
        required: true,
    },
    city : {
        type: String,
        required: true,
        validate : async function(city){
            var response = await fetch('https://api-colombia.com/api/v1/City');
            
            var cities = await response.json();
            return cities.some(object => object.name.toUpperCase() === (city.toUpperCase()));
        },
        message : props => `${props.value} not a valid city due is not a Colombian City`
    },
    state : {
        type : String,
        requires : true,
        validate : async function(state){
            var response = await fetch('https://api-colombia.com/api/v1/Department');

            var departments = await response.json();
            return departments.some(department => department.name.toUpperCase() === (state.toUpperCase()));
        },
        message : props => `${props.value} not a valid state due is not a Colombian State`
    },
    size : {
        type : Number,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    zipCode : {
        type : String,
        required : true,
    },
    rooms : {
        type : Number,
        required : true,
    },
    bathrooms : {
        type : Number,
        required : true,
    },
    parking : {
        type : Boolean,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    code : {
        type : String,
        required : true,
        validate : {
            validator : function(code){
                return /^[a-zA-Z]{4}[0-9]{4}$/.test(code);
            },
            message : props => `${props.value} not a valid code, it must be 4 letters and 4 numbers`
        }
    },
    image : {
        type : String
    }
});

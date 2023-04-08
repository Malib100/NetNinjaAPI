import {IsEnum, MinLength} from 'class-validator';

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'nunchuks'], {message:'Use the right weapon buddy!'})
    weapon: 'stars' | 'nunchuks'
}

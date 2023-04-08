import {Controller, Get, Post, Put, Delete, Param, Query, Body, NotFoundException, ImATeapotException} from '@nestjs/common';
import {CreateNinjaDto} from "./dto/create-ninja.dto";
import {UpdateNinjaDto} from "./dto/update-ninja.dto";
import {NinjasService} from "./ninjas.service";

@Controller('ninjas')
export class NinjasController {

  constructor(private readonly ninjasService:NinjasService) {
  }

    // GET /ninjas?weapon= --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchuks') {
    //const service = new NinjasService();

      return this.ninjasService.getNinjas(weapon);
  }

    // GET /ninjas/:id --> {...}
  @Get(':id')
    getOneNinja(@Param('id') id:string){

    try {

      return this.ninjasService.getNinja(+id);

    } catch (err) {
      throw new ImATeapotException()
    }
  }

  // POST /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){

      return this.ninjasService.createNinja(createNinjaDto);
    }

    // PUT ninjas/:id --> {...}
    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() updateNinajDto: UpdateNinjaDto){

      return this.ninjasService.updateNinja(+id, updateNinajDto);
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id:string){

      return this.ninjasService.removeNinja(+id);
    }
}

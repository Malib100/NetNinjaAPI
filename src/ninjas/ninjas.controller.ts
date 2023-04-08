import {Controller, Get, Post, Put, Delete} from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

    // GET /ninjas/ --> []
  @Get()
  getNinjas() {
    return [];
  }

    // GET /ninjas/:id --> {...}
  @Get(':id')
    getOneNinja(){
    return {};
  }

  // POST /ninjas
    @Post()
    createNinja(){
      return {};
    }

    // PUT ninjas/:id --> {...}
    @Put(':id')
    updateNinja(){
      return {};
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(){
      return {};
    }
}

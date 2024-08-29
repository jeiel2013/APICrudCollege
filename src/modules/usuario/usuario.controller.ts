import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';  

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: UsuarioDTO) {
    return this.usuarioService.create(data)
  }

  @Get()
  async findAll(){
    return this.usuarioService.findAll()
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UsuarioDTO) {
    return this.usuarioService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usuarioService.delete(id)
  }
}

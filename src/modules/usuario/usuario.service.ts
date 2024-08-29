import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UsuarioDTO } from './usuario.dto';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) { }
    async create(data: UsuarioDTO) {
        const userExists = await this.prisma.usuario.findFirst({
            where: {
                cpf: data.cpf,
            },
        })
        if (userExists) {
            throw new Error("User already exists")
        }
        const user = await this.prisma.usuario.create({
            data,
        })
        return user
    }

    async findAll(){
        return this.prisma.usuario.findMany()
    }

    async update(id: string, data: UsuarioDTO){
        const usuerExists = await this.prisma.usuario.findUnique({
            where: {
                id,
            },
        })

        if (!usuerExists) {
            throw new Error("User does not exists!")
        }

        return await this.prisma.usuario.update({
            data,
            where: {
                id,
            },
        })
    }

    async delete(id: string) {
        const userExists = await this.prisma.usuario.findUnique({
            where: {
                id,
            },
        })

        if (!userExists) {
            throw new Error ('User does not exists!')
        }

        return await this.prisma.usuario.delete({
            where: {
                id,
            },
        })
    }
}

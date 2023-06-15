import { Injectable } from "@nestjs/common";
import { Seeder } from 'nestjs-seeder';

@Injectable()
export class ServiceSeeder implements Seeder {
    constructor() { }

    async seed(): Promise<any> {
        return {};
    }

    async drop(): Promise<any> {
        return {};
    }

}
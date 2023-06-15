import { DynamicModule, Module } from '@nestjs/common';

let Services = []
@Module({
    imports: [],
    providers: [...Services],
})
export class SharedModule {
    static forRoot(): DynamicModule {
        return {
            module: SharedModule,
            providers: [...Services],
        };
    }
}

import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { DashboardService } from './services/dashboard.service';
import { StorageService } from './storage/storage.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        HttpClientModule
    ],
    declarations: [],
    providers: [
        StorageService,
        DashboardService

    ],
})
export class CoreModule { }

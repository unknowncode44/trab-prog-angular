import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { RouterModule           } from '@angular/router';
import { HttpClientModule       } from '@angular/common/http';

// componentes del modulo
import { ChatComponent          } from '../../components/home/chat/chat.component';
import { TareasComponent        } from '../../components/home/tareas/tareas.component';

// servicios del modulo
import { TareasService          } from '../../services/home/tareas.service';
import { ChatService            } from '../../services/home/chat.service';
import { HomeComponent          } from 'src/app/components/home/home.component';


@NgModule({
    declarations: [
        ChatComponent,
        TareasComponent,
        HomeComponent
    ],

    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '',         component: HomeComponent        },
            { path: 'chat',     component: ChatComponent        },
            { path: 'tareas',   component: TareasComponent      }
        ]),
        HttpClientModule
    ],
    
    providers: [
        ChatService,
        TareasService
    ]
})
export class HomeModule { }
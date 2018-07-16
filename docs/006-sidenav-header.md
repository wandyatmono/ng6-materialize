# Sidenav Header

Header, sebenarnya hanya aksesoris saja, tetapi perannya menjadi penting kala dibutuhkan untuk menghadirkan lingkungan visual yang ramah terhadap user.

**SpecReq:**

0. Absolute, at the top of `sidenav` workspace
1. 100% width of parent, fixed height
2. Nice and colorful image background
3. Angular and Materialize logo
4. Title: 'ngx-materialize'

## Implementation

### Creation

0. Generate Component

    ```bash
    $ ng generate component /features/components/sidenavheader
    ```
1. `FeaturesModule`

    ```typescript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    import { LoremComponent } from './components/lorem/lorem.component';
    import { SidenavComponent } from './components/sidenav/sidenav.component';
    + import { SidenavheaderComponent } from './components/sidenavheader/sidenavheader.component';

    @NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            LoremComponent,
            SidenavComponent,
            SidenavheaderComponent
        ],
        exports: [
            LoremComponent,
            + SidenavComponent
        ]
    })
    export class FeaturesModule { }
    ```
2. Put `SidenavheaderComponent` selector to `SidenavComponent` template

    Selain itu, hapus elements yang menampilkan informasi mengenai hasil keyboard stokes. Element selector dari `LoremComponent`

    `SidenavComponent` template

    ```html
    <div id="sidenav"
        [style.left.px]="x"
        (window:resize)="onResize()"
        (window:keyup)="onKeyUp($event)"
    >
        <div id="dish-container" class="grey lighten-3">
            <div id="dish-wrapper"
                [style.right.px]="-scrollbarWidth"
            >
                <div id="dish-servant">
                    + <app-sidenavheader></app-sidenavheader>
                    - keyboardEvent: any = {{ keyboardEvent }}<br />
                    - alyKey: boolean = {{ altKey }}<br />
                    - charCode: number = {{ charCode }}<br />
                    - code: string = {{ code }}<br />
                    - ctrlKey: boolean = {{ ctrlKey }}<br />
                    - keyCode: number = {{ keyCode }}<br />
                    - keyIdentifier: string = {{ keyIdentifier }}<br />
                    - metaKey: boolean = {{ metaKey }}<br />
                    - shiftKey: boolean = {{ shiftKey }}<br />
                    - timeStamp: number = {{ timeStamp }}<br />
                    - type: string = {{ type }}<br />
                    - which: number = {{ which }}<br />
                    - <app-lorem></app-lorem>
                </div>
            </div>
        </div>
        <div id="flap"
            (mousedown)="onTouchstart($event)"
            (mouseup)="onTouchend($event)"
            (panstart)="onPanStart($event)"
            (panleft)="onPanMove($event)"
            (panright)="onPanMove($event)"
            (panend)="onPanEnd($event)"
        >
            <div id="stripes"></div>
        </div>
    </div>
    ```

### `SidenavheaderComponent`

0. Template

    ```html
    <div id="sidenavheader">
        <div id="angular-logo"></div>
        <div id="header-title-band" class="valign-wrapper">
            <div id="header-title" class="white-text">ngx-materialize</div>
        </div>
    </div>
    ```

1. Style

    ```css
    #sidenavheader {
        position: relative;
        width: 100%; height: 16em;
        background-image: url(/assets/images/nav/header-background/v0.jpg);
        background-size: auto 16em;
        background-repeat: repeat-x;
    }
    #angular-logo {
        position: absolute;
        width: 100%; height: 100%;
        background-image: url(/assets/images/nav/header-logo/v0.svg);
        background-size: auto 10em;
        background-position: 1em 2em;
        background-repeat: no-repeat;
    }
    #header-title-band {
        position: absolute;
        width: 100%; height: 2.5em; bottom: 1em;
        background-image: url(/assets/images/opacity-background-color/black-30-2x2.svg);
    }
    #header-title {
        width: 100%; font-size: 1.4em;  padding-left: 1em;
    }
    ```

    Ada proses kerja yang harus diperhatikan di artworks/ dan penambahan di assets/images/.

    
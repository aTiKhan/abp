import { EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TrackByFunction } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PermissionManagement } from '../models/permission-management';
declare type PermissionWithMargin = PermissionManagement.Permission & {
    margin: number;
};
export declare class PermissionManagementComponent implements OnInit, OnChanges {
    private store;
    private renderer;
    providerName: string;
    providerKey: string;
    hideBadges: boolean;
    protected _visible: any;
    visible: boolean;
    readonly visibleChange: EventEmitter<boolean>;
    groups$: Observable<PermissionManagement.Group[]>;
    entityName$: Observable<string>;
    selectedGroup: PermissionManagement.Group;
    permissions: PermissionManagement.Permission[];
    selectThisTab: boolean;
    selectAllTab: boolean;
    modalBusy: boolean;
    trackByFn: TrackByFunction<PermissionManagement.Group>;
    readonly selectedGroupPermissions$: Observable<PermissionWithMargin[]>;
    constructor(store: Store, renderer: Renderer2);
    ngOnInit(): void;
    getChecked(name: string): boolean;
    isGrantedByOtherProviderName(grantedProviders: PermissionManagement.GrantedProvider[]): boolean;
    onClickCheckbox(clickedPermission: PermissionManagement.Permission, value: any): void;
    setTabCheckboxState(): void;
    setGrantCheckboxState(): void;
    onClickSelectThisTab(): void;
    onClickSelectAll(): void;
    onChangeGroup(group: PermissionManagement.Group): void;
    submit(): void;
    openModal(): void;
    initModal(): void;
    ngOnChanges({ visible }: SimpleChanges): void;
}
export {};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import snq from 'snq';
var HttpErrorWrapperComponent = /** @class */ (function () {
    function HttpErrorWrapperComponent() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
    }
    Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status ? "[" + this.status + "]" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.backgroundColor =
            snq((/**
             * @return {?}
             */
            function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); })) || '#fff';
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.destroy();
        }));
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HttpErrorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-http-error-wrapper',
                    template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                }] }
    ];
    HttpErrorWrapperComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return HttpErrorWrapperComponent;
}());
export { HttpErrorWrapperComponent };
if (false) {
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.appRef;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.cfRes;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.injector;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.status;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.title;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.details;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.customComponent;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.destroy$;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.hideCloseIcon;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.backgroundColor;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.containerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBR0wsU0FBUyxFQUVULFVBQVUsRUFNVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QjtJQUFBO1FBWUUsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFVBQUssR0FBNkIsT0FBTyxDQUFDO1FBRTFDLFlBQU8sR0FBNkIsOEJBQThCLENBQUM7UUFFbkUsb0JBQWUsR0FBYyxJQUFJLENBQUM7UUFJbEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUEyQ3hCLENBQUM7SUFwQ0Msc0JBQUksaURBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsTUFBTSxNQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7OztJQUVELDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlO1lBQ2xCLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEVBQTNFLENBQTJFLEVBQUMsSUFBSSxNQUFNLENBQUM7SUFDckcsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUNsQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6RyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFBLGtCQUFrQixDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hILGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3REO1FBRUQsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWtCLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQTNCLENBQTJCLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7O0lBRWhCLDJDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDg5QkFBa0Q7O2lCQUVuRDs7OytCQXNCRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUF1QzNDLGdDQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E1RFkseUJBQXlCOzs7SUFDcEMsMkNBQXVCOztJQUV2QiwwQ0FBZ0M7O0lBRWhDLDZDQUFtQjs7SUFFbkIsMkNBQVc7O0lBRVgsMENBQTBDOztJQUUxQyw0Q0FBbUU7O0lBRW5FLG9EQUFrQzs7SUFFbEMsNkNBQXdCOztJQUV4QixrREFBc0I7O0lBRXRCLG9EQUF3Qjs7SUFFeEIsaURBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBUeXBlLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1odHRwLWVycm9yLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydodHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZjtcclxuXHJcbiAgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuXHJcbiAgaW5qZWN0b3I6IEluamVjdG9yO1xyXG5cclxuICBzdGF0dXMgPSAwO1xyXG5cclxuICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ09vcHMhJztcclxuXHJcbiAgZGV0YWlsczogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtID0gJ1NvcnJ5LCBhbiBlcnJvciBoYXMgb2NjdXJlZC4nO1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IFR5cGU8YW55PiA9IG51bGw7XHJcblxyXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+O1xyXG5cclxuICBoaWRlQ2xvc2VJY29uID0gZmFsc2U7XHJcblxyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBjb250YWluZXJSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBnZXQgc3RhdHVzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID8gYFske3RoaXMuc3RhdHVzfV1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgc25xKCgpID0+IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSkgfHwgJyNmZmYnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUNvbXBvbmVudFJlZiA9IHRoaXMuY2ZSZXMucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jdXN0b21Db21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgICAgY3VzdG9tQ29tcG9uZW50UmVmLmluc3RhbmNlLmVycm9yU3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95JCA9IHRoaXMuZGVzdHJveSQ7XHJcbiAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCgoY3VzdG9tQ29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG4gICAgICBjdXN0b21Db21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19
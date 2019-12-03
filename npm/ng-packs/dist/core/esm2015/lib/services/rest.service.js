/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { RestOccurError } from '../actions/rest.actions';
import { ConfigState } from '../states/config.state';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngxs/store";
export class RestService {
    /**
     * @param {?} http
     * @param {?} store
     */
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        console.error(err);
        return throwError(err);
    }
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    request(request, config, api) {
        config = config || ((/** @type {?} */ ({})));
        const { observe = "body" /* Body */, skipHandleError } = config;
        /** @type {?} */
        const url = (api || this.store.selectSnapshot(ConfigState.getApiUrl())) + request.url;
        const { method, params } = request, options = tslib_1.__rest(request, ["method", "params"]);
        return this.http
            .request(method, url, (/** @type {?} */ (Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => (Object.assign({}, acc, (typeof params[key] !== 'undefined' && params[key] !== '' && { [key]: params[key] })))), {}),
        }), options))))
            .pipe(observe === "body" /* Body */ ? take(1) : tap(), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            if (skipHandleError) {
                return throwError(err);
            }
            return this.handleError(err);
        })));
    }
}
RestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RestService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
/** @nocollapse */ RestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store)); }, token: RestService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Jlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3JELE1BQU0sT0FBTyxXQUFXOzs7OztJQUN0QixZQUFvQixJQUFnQixFQUFVLEtBQVk7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7OztJQUU5RCxXQUFXLENBQUMsR0FBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFFRCxPQUFPLENBQU8sT0FBeUMsRUFBRSxNQUFvQixFQUFFLEdBQVk7UUFDekYsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFBLEVBQUUsRUFBZSxDQUFDLENBQUM7Y0FDakMsRUFBRSxPQUFPLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU07O2NBQ3pELEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHO2NBQy9FLEVBQUUsTUFBTSxFQUFFLE1BQU0sS0FBaUIsT0FBTyxFQUF0Qix1REFBVTtRQUVsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsT0FBTyxDQUFJLE1BQU0sRUFBRSxHQUFHLEVBQUUsbUNBQ3ZCLE9BQU8sSUFDSixDQUFDLE1BQU0sSUFBSTtZQUNaLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7O1lBQ2hDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsbUJBQ1QsR0FBRyxFQUNILENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ3ZGLEdBQ0YsRUFBRSxDQUNIO1NBQ0YsQ0FBQyxFQUNDLE9BQU8sR0FDSixDQUFDO2FBQ1IsSUFBSSxDQUNILE9BQU8sc0JBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQy9DLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksZUFBZSxFQUFFO2dCQUNuQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtZQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7O1lBMUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhRLFVBQVU7WUFFVixLQUFLOzs7Ozs7OztJQVdBLDJCQUF3Qjs7Ozs7SUFBRSw0QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFJlc3RPY2N1ckVycm9yIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc3RTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnI6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihlcnIpKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0PFQsIFI+KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PFQ+IHwgUmVzdC5SZXF1ZXN0PFQ+LCBjb25maWc/OiBSZXN0LkNvbmZpZywgYXBpPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwgKHt9IGFzIFJlc3QuQ29uZmlnKTtcclxuICAgIGNvbnN0IHsgb2JzZXJ2ZSA9IFJlc3QuT2JzZXJ2ZS5Cb2R5LCBza2lwSGFuZGxlRXJyb3IgfSA9IGNvbmZpZztcclxuICAgIGNvbnN0IHVybCA9IChhcGkgfHwgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcGlVcmwoKSkpICsgcmVxdWVzdC51cmw7XHJcbiAgICBjb25zdCB7IG1ldGhvZCwgcGFyYW1zLCAuLi5vcHRpb25zIH0gPSByZXF1ZXN0O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnJlcXVlc3Q8VD4obWV0aG9kLCB1cmwsIHtcclxuICAgICAgICBvYnNlcnZlLFxyXG4gICAgICAgIC4uLihwYXJhbXMgJiYge1xyXG4gICAgICAgICAgcGFyYW1zOiBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjYywga2V5KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAuLi4odHlwZW9mIHBhcmFtc1trZXldICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNba2V5XSAhPT0gJycgJiYgeyBba2V5XTogcGFyYW1zW2tleV0gfSksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfSBhcyBhbnkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG9ic2VydmUgPT09IFJlc3QuT2JzZXJ2ZS5Cb2R5ID8gdGFrZSgxKSA6IHRhcCgpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgIGlmIChza2lwSGFuZGxlRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=
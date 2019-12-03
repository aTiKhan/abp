/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { uuid } from '../utils';
import * as i0 from "@angular/core";
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService() {
        this.loadedLibraries = {};
    }
    /**
     * @param {?} urlOrUrls
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    LazyLoadService.prototype.load = /**
     * @param {?} urlOrUrls
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    function (urlOrUrls, type, content, targetQuery, position) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (targetQuery === void 0) { targetQuery = 'body'; }
        if (position === void 0) { position = 'beforeend'; }
        if (!urlOrUrls && !content) {
            return throwError('Should pass url or content');
        }
        else if (!urlOrUrls && content) {
            urlOrUrls = [null];
        }
        if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
        }
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            ((/** @type {?} */ (urlOrUrls))).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            function (url, index) {
                /** @type {?} */
                var key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
                if (_this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                _this.loadedLibraries[key] = new ReplaySubject();
                /** @type {?} */
                var library;
                if (type === 'script') {
                    library = document.createElement('script');
                    library.type = 'text/javascript';
                    if (url) {
                        ((/** @type {?} */ (library))).src = url;
                    }
                    ((/** @type {?} */ (library))).text = content;
                }
                else if (url) {
                    library = document.createElement('link');
                    library.type = 'text/css';
                    ((/** @type {?} */ (library))).rel = 'stylesheet';
                    if (url) {
                        ((/** @type {?} */ (library))).href = url;
                    }
                }
                else {
                    library = document.createElement('style');
                    ((/** @type {?} */ (library))).textContent = content;
                }
                library.onload = (/**
                 * @return {?}
                 */
                function () {
                    _this.loadedLibraries[key].next();
                    _this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                });
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            }));
        }));
    };
    LazyLoadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ LazyLoadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    return LazyLoadService;
}());
export { LazyLoadService };
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGF6eS1sb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRWhDO0lBQUE7UUFJRSxvQkFBZSxHQUEyQyxFQUFFLENBQUM7S0FtRTlEOzs7Ozs7Ozs7SUFqRUMsOEJBQUk7Ozs7Ozs7O0lBQUosVUFDRSxTQUE0QixFQUM1QixJQUF3QixFQUN4QixPQUFvQixFQUNwQixXQUE0QixFQUM1QixRQUFzQztRQUx4QyxpQkFnRUM7UUE3REMsd0JBQUEsRUFBQSxZQUFvQjtRQUNwQiw0QkFBQSxFQUFBLG9CQUE0QjtRQUM1Qix5QkFBQSxFQUFBLHNCQUFzQztRQUV0QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFBRTtZQUNoQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFBLFVBQVU7WUFDOUIsQ0FBQyxtQkFBQSxTQUFTLEVBQVksQ0FBQyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSzs7b0JBQ25DLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUU5RCxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0QixPQUFPO2lCQUNSO2dCQUVELEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQzs7b0JBRTVDLE9BQU87Z0JBQ1gsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNyQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsQ0FBQyxtQkFBQSxPQUFPLEVBQXFCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO3FCQUMxQztvQkFFRCxDQUFDLG1CQUFBLE9BQU8sRUFBcUIsQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7aUJBQy9DO3FCQUFNLElBQUksR0FBRyxFQUFFO29CQUNkLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDMUIsQ0FBQyxtQkFBQSxPQUFPLEVBQW1CLENBQUMsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO29CQUVoRCxJQUFJLEdBQUcsRUFBRTt3QkFDUCxDQUFDLG1CQUFBLE9BQU8sRUFBbUIsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7cUJBQ3pDO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQyxDQUFDLG1CQUFBLE9BQU8sRUFBb0IsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7aUJBQ3JEO2dCQUVELE9BQU8sQ0FBQyxNQUFNOzs7Z0JBQUc7b0JBQ2YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFckMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN2QjtnQkFDSCxDQUFDLENBQUEsQ0FBQztnQkFFRixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzswQkFORDtDQTJFQyxBQXZFRCxJQXVFQztTQXBFWSxlQUFlOzs7SUFDMUIsMENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRTZXJ2aWNlIHtcclxuICBsb2FkZWRMaWJyYXJpZXM6IHsgW3VybDogc3RyaW5nXTogUmVwbGF5U3ViamVjdDx2b2lkPiB9ID0ge307XHJcblxyXG4gIGxvYWQoXHJcbiAgICB1cmxPclVybHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgdHlwZTogJ3NjcmlwdCcgfCAnc3R5bGUnLFxyXG4gICAgY29udGVudDogc3RyaW5nID0gJycsXHJcbiAgICB0YXJnZXRRdWVyeTogc3RyaW5nID0gJ2JvZHknLFxyXG4gICAgcG9zaXRpb246IEluc2VydFBvc2l0aW9uID0gJ2JlZm9yZWVuZCcsXHJcbiAgKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBpZiAoIXVybE9yVXJscyAmJiAhY29udGVudCkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignU2hvdWxkIHBhc3MgdXJsIG9yIGNvbnRlbnQnKTtcclxuICAgIH0gZWxzZSBpZiAoIXVybE9yVXJscyAmJiBjb250ZW50KSB7XHJcbiAgICAgIHVybE9yVXJscyA9IFtudWxsXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXJsT3JVcmxzKSkge1xyXG4gICAgICB1cmxPclVybHMgPSBbdXJsT3JVcmxzXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgICh1cmxPclVybHMgYXMgc3RyaW5nW10pLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB1cmwgPyB1cmwuc2xpY2UodXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKSA6IHV1aWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkTGlicmFyaWVzW2tleV0pIHtcclxuICAgICAgICAgIHN1YnNjcmliZXIubmV4dCgpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZWRMaWJyYXJpZXNba2V5XSA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBsaWJyYXJ5O1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgbGlicmFyeS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxTY3JpcHRFbGVtZW50KS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgKGxpYnJhcnkgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnRleHQgPSBjb250ZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsKSB7XHJcbiAgICAgICAgICBsaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgbGlicmFyeS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxMaW5rRWxlbWVudCkucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cclxuICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgKGxpYnJhcnkgYXMgSFRNTExpbmtFbGVtZW50KS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICAgIChsaWJyYXJ5IGFzIEhUTUxTdHlsZUVsZW1lbnQpLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpYnJhcnkub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWRMaWJyYXJpZXNba2V5XS5uZXh0KCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRlZExpYnJhcmllc1trZXldLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSB1cmxPclVybHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoKTtcclxuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0UXVlcnkpLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgbGlicmFyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
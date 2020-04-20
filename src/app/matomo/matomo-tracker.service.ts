import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TrackEvent } from './model/track-event';
import { HeatmapSessionConfig } from './model/heatmap-session-config';

declare var window: {
    [key: string]: any;
    prototype: Window;
    new(): Window;
};


/**
 * Wrapper for functions available for the Matomo Javascript tracker.
 *
 * @export
 */

// @dynamic
@Injectable()
export class MatomoTrackerService implements OnDestroy {
    events: TrackEvent[] = [];
    destroy: Subject<boolean> = new Subject<boolean>();
    timerSearchSubscription: Subscription;
    nameActionClick: string = 'click';
    nameActionHover: string = 'hover';
    nameActionInput: string = 'input';
    nameActionBlur: string = 'onblur';
    idTypeCustomer: number = 1;
    dateTimeBuild: number = 2;

    // mainCategory: string;
    // timerSubscription: Subscription;
    /**
     * Creates an instance of MatomoTracker.
     *
     * @memberof MatomoTracker
     */
    constructor() {
        // if (typeof window._paq === 'undefined') {
        //     console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
        // }
        // Observable.interval(1000)
        //     .pipe(
        //         takeUntil(this.destroy)
        //     )
        //     .subscribe(() => {
        //         const events = JSON.parse(JSON.stringify(this.events));
        //         this.events = [];
        //         for (let i = 0; i < events.length; ++i) {
        //             this.trackEvent(events[i].category, events[i].action, events[i].name, events[i].value);
        //         }
        //     });
    }

    ngOnDestroy() {
        this.destroy.next(true);
    }

    setTypeCustomer(type: string): void {
        this.setCustomDimension(this.idTypeCustomer, type);
    }

    setDateTimeBuild(date: string): void {
        this.setCustomDimension(this.dateTimeBuild, date);
    }

    addTrackEventInQueue(category: string, action: string, name?: string, value?: number): void {
        this.events.push({
            category,
            action,
            name,
            value,
        });
        // if (this.timerSubscription) {
        //     this.timerSubscription.unsubscribe();
        //     this.timerSubscription = null;
        // }
        // this.timerSubscription = Observable.timer(1000)
        //     .pipe(
        //         takeUntil(this.destroy)
        //     )
        //     .subscribe(() => {
        //         console.log('subscribe')
        //         const event = JSON.parse(JSON.stringify(this.events));
        //         this.events = [];
        //         for (let i = 0; i < event.length; ++i) {
        //             this.trackEvent(event[i].category, event[i].action, event[i].name, event[i].value);
        //         }
        //     });
    }

    trackEventClick(category: string, objectName?: string, label?: string, value?: number) {
        if (objectName) {
            objectName += '-' + this.nameActionClick;
        } else {
            objectName = this.nameActionClick;
        }
        this.trackEvent(category, objectName, label, value);
    }

    trackEventHover(category: string, objectName?: string, label?: string, value?: number) {
        if (objectName) {
            objectName += '-' + this.nameActionHover;
        } else {
            objectName = this.nameActionHover;
        }
        this.trackEvent(category, objectName, label, value);
    }

    trackEventBlur(category: string, objectName?: string, label?: string, value?: number) {
        if (objectName) {
            objectName += '-' + this.nameActionBlur;
        } else {
            objectName = this.nameActionBlur;
        }
        this.trackEvent(category, objectName, label, value);
    }

    trackEventInput(category: string, objectName?: string, label?: string, value?: number) {
        if (objectName) {
            objectName += '-' + this.nameActionInput;
        } else {
            objectName = this.nameActionInput;
        }
        this.trackEvent(category, objectName, label, value);
    }

    /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * @param category
     * @param action
     * @param [name]
     * @param [value]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackEvent(category: string, action: string, name?: string, value?: number): void {
        if (!category) {
            return;
        }
        const args: any[] = [category, action];
        if (!!name) {
            args.push(name);
        }
        if (!!value) {
            args.push(value);
        }
        window._paq.push(['trackEvent', ...args]);
    }

    /**
     * Logs a visit to this page.
     *
     * @param [customTitle]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackPageView(customTitle?: string): void {
        const args: any[] = [];
        if (!!customTitle) {
            args.push(customTitle);
        }
        window._paq.push(['trackPageView', ...args]);
    }

    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword
     * @param [category]
     * @param [resultsCount]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackSiteSearch(keyword: string, category?: string, resultsCount?: number): void {
        if (!keyword) {
            return;
        }
        if (this.timerSearchSubscription) {
            this.timerSearchSubscription.unsubscribe();
            this.timerSearchSubscription = null;
        }
        this.timerSearchSubscription = timer(400)
            .pipe(
                takeUntil(this.destroy)
            )
            .subscribe(() => {
                const args: any[] = [keyword];
                if (!!category) {
                    args.push(category);
                }
                if (!!resultsCount) {
                    args.push(resultsCount);
                }
                window._paq.push(['trackSiteSearch', ...args]);
            });
    }

    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal
     * @param [customRevenue]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackGoal(idGoal: number, customRevenue?: number): void {
        const args: any[] = [idGoal];
        if (!!customRevenue) {
            args.push(customRevenue);
        }
        window._paq.push(['trackGoal', ...args]);
    }

    /**
     * Manually logs a click from your own code.
     *
     * @param url: is the full URL which is to be tracked as a click.
     * @param linkType: can either be 'link' for an outlink or 'download' for a download.
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackLink(url: string, linkType: string): void {
        const args: any[] = [url, linkType];
        window._paq.push(['trackLink', ...args]);
    }

    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackAllContentImpressions(): void {
        window._paq.push(['trackAllContentImpressions']);
    }

    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll
     * @param timeIntervalInMs
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackVisibleContentImpressions(checkOnScroll: boolean, timeIntervalInMs: number): void {
        const args: any[] = [checkOnScroll, timeIntervalInMs];
        window._paq.push(['trackVisibleContentImpressions', ...args]);
    }

    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param domNode
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackContentImpressionsWithinNode(domNode: Node): void {
        const args: any[] = [domNode];
        window._paq.push(['trackContentImpressionsWithinNode', ...args]);
    }

    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * @param domNode
     * @param contentInteraction
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackContentInteractionNode(domNode: Node, contentInteraction: string): void {
        const args: any[] = [domNode, contentInteraction];
        window._paq.push(['trackContentInteractionNode', ...args]);
    }

    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackContentImpression(contentName: string, contentPiece: string, contentTarget: string): void {
        const args: any[] = [contentName, contentPiece, contentTarget];
        window._paq.push(['trackContentImpression', ...args]);
    }

    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackContentInteraction(
        contentInteraction: string,
        contentName: string,
        contentPiece: string,
        contentTarget: string
    ): void {
        const args: any[] = [contentInteraction, contentName, contentPiece, contentTarget];
        window._paq.push(['trackContentInteraction', ...args]);
    }

    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    logAllContentBlocksOnPage(): void {
        window._paq.push(['logAllContentBlocksOnPage']);
    }

    /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * @param enable
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableLinkTracking(enable: boolean): void {
        const args: any[] = [enable];
        window._paq.push(['enableLinkTracking', ...args]);
    }

    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * @param delayInSeconds
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableHeartBeatTimer(delayInSeconds: number): void {
        const args: any[] = [delayInSeconds];
        window._paq.push(['enableHeartBeatTimer', ...args]);
    }

    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableCrossDomainLinking(): void {
        window._paq.push(['enableCrossDomainLinking']);
    }

    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCrossDomainLinkingTimeout(timeout: number): void {
        const args: any[] = [timeout];
        window._paq.push(['setCrossDomainLinkingTimeout', ...args]);
    }

    /**
     * Overrides document.title
     *
     * @param title
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setDocumentTitle(title: string): void {
        const args: any[] = [title];
        window._paq.push(['setDocumentTitle', ...args]);
    }

    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * @param domains
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setDomains(domains: string[]): void {
        const args: any[] = [domains];
        window._paq.push(['setDomains', ...args]);
    }

    /**
     * Override the page's reported URL.
     *
     * @param url
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCustomUrl(url: string): void {
        const args: any[] = [url];
        window._paq.push(['setCustomUrl', ...args]);
    }

    /**
     * Overrides the detected Http-Referer.
     *
     * @param url
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setReferrerUrl(url: string): void {
        const args: any[] = [url];
        window._paq.push(['setReferrerUrl', ...args]);
    }

    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param siteId
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setSiteId(siteId: string): void {
        const args: any[] = [siteId];
        window._paq.push(['setSiteId', ...args]);
    }

    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * @param url
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setApiUrl(url: string): void {
        const args: any[] = [url];
        window._paq.push(['setApiUrl', ...args]);
    }

    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param url
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setTrackerUrl(url: string): void {
        const args: any[] = [url];
        window._paq.push(['setTrackerUrl', ...args]);
    }

    /**
     * Returns the Matomo server URL.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getPiwikUrl(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getPiwikUrl())]);
        });
    }

    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getCurrentUrl(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getCurrentUrl())]);
        });
    }

    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setDownloadClasses(classes: string | string[]): void {
        const args: any[] = [classes];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setDownloadExtensions(extensions: string | string[]): void {
        const args: any[] = [extensions];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    addDownloadExtensions(extensions: string | string[]): void {
        const args: any[] = [extensions];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    removeDownloadExtensions(extensions: string | string[]): void {
        const args: any[] = [extensions];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setIgnoreClasses(classes: string | string[]): void {
        const args: any[] = [classes];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setLinkClasses(classes: string | string[]): void {
        const args: any[] = [classes];
        window._paq.push(['setDownloadClasses', ...args]);
    }

    /**
     * Set delay for link tracking (in milliseconds).
     *
     * @param delay
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setLinkTrackingTimer(delay: number): void {
        const args: any[] = [delay];
        window._paq.push(['setLinkTrackingTimer', ...args]);
    }

    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getLinkTrackingTimer(): Observable<number> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getLinkTrackingTimer())]);
        });
    }

    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * @param value
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    discardHashTag(value: boolean): void {
        const args: any[] = [value];
        window._paq.push(['discardHashTag', ...args]);
    }

    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * @param generationTime
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setGenerationTimeMs(generationTime: number): void {
        const args: any[] = [generationTime];
        window._paq.push(['setGenerationTimeMs', ...args]);
    }

    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * @param appendToUrl
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    appendToTrackingUrl(appendToUrl: string): void {
        const args: any[] = [appendToUrl];
        window._paq.push(['appendToTrackingUrl', ...args]);
    }

    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setDoNotTrack(doNotTrack: boolean): void {
        const args: any[] = [doNotTrack];
        window._paq.push(['setDoNotTrack', ...args]);
    }

    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    killFrame(): void {
        window._paq.push(['killFrame']);
    }

    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * @param url
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    redirectFile(url: string): void {
        const args: any[] = [url];
        window._paq.push(['redirectFile', ...args]);
    }

    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * @param minimumVisitLength
     * @param heartBeatDelay
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setHeartBeatTimer(minimumVisitLength: number, heartBeatDelay: number): void {
        const args: any[] = [minimumVisitLength, heartBeatDelay];
        window._paq.push(['setHeartBeatTimer', ...args]);
    }

    /**
     * Returns the 16 characters ID for the visitor
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getVisitorId(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getVisitorId())]);
        });
    }

    /**
     * Returns the visitor cookie contents in an array
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getVisitorInfo(): Observable<any[]> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getVisitorInfo())]);
        });
    }

    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getAttributionInfo(): Observable<any[]> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getAttributionInfo())]);
        });
    }

    /**
     * Returns the attribution campaign name.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getAttributionCampaignName(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getAttributionCampaignName())
            ]);
        });
    }

    /**
     * Returns the attribution campaign keyword.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getAttributionCampaignKeyword(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getAttributionCampaignKeyword())
            ]);
        });
    }

    /**
     * Returns the attribution referrer timestamp.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getAttributionReferrerTimestamp(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getAttributionReferrerTimestamp())
            ]);
        });
    }

    /**
     * Returns the attribution referrer URL.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getAttributionReferrerUrl(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getAttributionReferrerUrl())
            ]);
        });
    }

    /**
     *  Returns the User ID string if it was set.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getUserId(): Observable<string> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().getUserId())]);
        });
    }

    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setUserId(userId: string): void {
        const args: any[] = [userId];
        window._paq.push(['setUserId', ...args]);
    }


    // resetUserId - не работает
    // /**
    //  * Resets the User ID which also generates a new Visitor ID.
    //  *
    //  * @memberof MatomoTracker
    //  */
    // @WithoutReferenceError()
    // resetUserId(): void {
    //       window._paq.push(['resetUserId']);
    // }

    /**
     * Sets a custom variable.
     *
     * @param index: Index, the number from 1 to 5 where this custom variable name is stored for the current page view
     * @param name: Name, the name of the variable, for example: Category, Sub-category, UserType
     * @param value: Value, for example: "Sports", "News", "World", "Business", etc.
     * @param scope: Scope of the custom variable, "page" means the custom variable applies to the current page view
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCustomVariable(index: number, name: string, value: string, scope: string): void {
        const args: any[] = [index, name, value, scope];
        window._paq.push(['setCustomVariable', ...args]);
    }

    /**
     * Deletes a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    deleteCustomVariable(index: number, scope: string): void {
        const args: any[] = [index, scope];
        window._paq.push(['deleteCustomVariable', ...args]);
    }

    /**
     * Retrieves a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getCustomVariable(index: number, scope: string): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getCustomVariable(index, scope))
            ]);
        });
    }

    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    storeCustomVariablesInCookie(): void {
        window._paq.push(['storeCustomVariablesInCookie']);
    }

    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @param customDimensionValue
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCustomDimension(customDimensionId: number, customDimensionValue: string): void {
        const args: any[] = [customDimensionId, customDimensionValue];
        window._paq.push(['setCustomDimension', ...args]);
    }

    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    deleteCustomDimension(customDimensionId: number): void {
        const args: any[] = [customDimensionId];
        window._paq.push(['deleteCustomDimension', ...args]);
    }

    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    getCustomDimension(customDimensionId: number): Observable<string> {
        return new Observable(observer => {
            window._paq.push([
                () => observer.next(window.Piwik.getTracker().getCustomDimension(customDimensionId))
            ]);
        });
    }

    /**
     * Sets campaign name parameter(s).
     *
     * @param name
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCampaignNameKey(name: string): void {
        const args: any[] = [name];
        window._paq.push(['setCampaignNameKey', ...args]);
    }

    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCampaignKeywordKey(keyword: string): void {
        const args: any[] = [keyword];
        window._paq.push(['setCampaignKeywordKey', ...args]);
    }

    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setConversionAttributionFirstReferrer(conversionToFirstReferrer: boolean): void {
        const args: any[] = [conversionToFirstReferrer];
        window._paq.push(['setConversionAttributionFirstReferrer', ...args]);
    }

    /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU
     * @param productName
     * @param categoryName
     * @param price
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setEcommerceView(
        productSKU: string,
        productName: string,
        categoryName: string,
        price: number
    ): void {
        const args: any[] = [productSKU, productName, categoryName, price];
        window._paq.push(['setEcommerceView', ...args]);
    }

    /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * @param productSKU
     * @param [productName]
     * @param [productCategory]
     * @param [price]
     * @param [quantity]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    addEcommerceItem(
        productSKU: string,
        productName?: string,
        productCategory?: string,
        price?: number,
        quantity?: number
    ): void {
        const args: any[] = [productSKU];
        if (!!productName) {
            args.push(productName);
        }
        if (!!productCategory) {
            args.push(productCategory);
        }
        if (!!price) {
            args.push(price);
        }
        if (!!quantity) {
            args.push(quantity);
        }
        window._paq.push(['addEcommerceItem', ...args]);
    }

    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackEcommerceCartUpdate(grandTotal: number): void {
        const args: any[] = [grandTotal];
        window._paq.push(['trackEcommerceCartUpdate', ...args]);
    }

    /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param orderId
     * @param grandTotal
     * @param [subTotal]
     * @param [tax]
     * @param [shipping]
     * @param [discount]
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    trackEcommerceOrder(
        orderId: string,
        grandTotal: number,
        subTotal?: number,
        tax?: number,
        shipping?: number,
        discount?: number
    ): void {
        const args: any[] = [orderId, grandTotal];
        if (!!subTotal) {
            args.push(subTotal);
        }
        if (!!tax) {
            args.push(tax);
        }
        if (!!shipping) {
            args.push(shipping);
        }
        if (!!discount) {
            args.push(discount);
        }
        window._paq.push(['trackEcommerceOrder', ...args]);
    }

    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    disableCookies(): void {
        window._paq.push(['disableCookies']);
    }

    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    deleteCookies(): void {
        window._paq.push(['deleteCookies']);
    }

    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    hasCookies(): Observable<boolean> {
        return new Observable(observer => {
            window._paq.push([() => observer.next(window.Piwik.getTracker().hasCookies())]);
        });
    }

    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * @param prefix
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCookieNamePrefix(prefix: string): void {
        const args: any[] = [prefix];
        window._paq.push(['setCookieNamePrefix', ...args]);
    }

    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * @param domain
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCookieDomain(domain: string): void {
        const args: any[] = [domain];
        window._paq.push(['setCookieDomain', ...args]);
    }

    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * @param path
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCookiePath(path: string): void {
        const args: any[] = [path];
        window._paq.push(['setCookiePath', ...args]);
    }

    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * @param secure
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setSecureCookie(secure: boolean): void {
        const args: any[] = [secure];
        window._paq.push(['setSecureCookie', ...args]);
    }

    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setVisitorCookieTimeout(seconds: number): void {
        const args: any[] = [seconds];
        window._paq.push(['setVisitorCookieTimeout', ...args]);
    }

    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setReferralCookieTimeout(seconds: number): void {
        const args: any[] = [seconds];
        window._paq.push(['setReferralCookieTimeout', ...args]);
    }

    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setSessionCookieTimeout(seconds: number): void {
        const args: any[] = [seconds];
        window._paq.push(['setSessionCookieTimeout', ...args]);
    }

    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * @param element
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    addListener(element: Element): void {
        const args: any[] = [element];
        window._paq.push(['addListener', ...args]);
    }

    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setRequestMethod(method: string): void {
        const args: any[] = [method];
        window._paq.push(['setRequestMethod', ...args]);
    }

    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setCustomRequestProcessing(callback: (queryParameters: string) => void): void {
        const args: any[] = [callback];
        window._paq.push(['setCustomRequestProcessing', ...args]);
    }

    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * @param contentType
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setRequestContentType(contentType: string): void {
        const args: any[] = [contentType];
        window._paq.push(['setRequestContentType', ...args]);
    }

    /**
     * Allows you to completely disable the tracking of any Heatmap or Session Recording data. This is useful if you for example manage
     * multiple websites in your Matomo and there are some websites where you do not want to track any such activities. It is recommended
     * to call this method as early in your tracking code as possible or during the piwikHeatmapSessionRecordingAsyncInit method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    disableHeatmapSessionRecording(): void {
        window._paq.push(['HeatmapSessionRecording::disable']);
    }

    /**
     * If you have disabled the tracking of heatmap and session activities via disable(),
     * you can enable it at a later point via this method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableHeatmapSessionRecording(): void {
        window._paq.push(['HeatmapSessionRecording::enable']);
    }

    /**
     * To support single-page websites and web applications out of the box, Heatmap & Session Recording will automatically
     * detect a new page view when you call the trackPageView method. This applies if you call trackPageView several times
     * without an actual page reload. Matomo will after each call of trackPageView stop the recording of any activities
     * and re-evaluate based on the new URL whether if it should record activities for the new page or not.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    disableAutoDetectNewPageView(): void {
        window._paq.push(['HeatmapSessionRecording::disableAutoDetectNewPageView']);
    }

    /**
     * The automatic detection of new page views is enabled by default. If you disable the auto detection,
     * you can enable it again at a later point using this method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableAutoDetectNewPageView(): void {
        window._paq.push(['HeatmapSessionRecording::enableAutoDetectNewPageView']);
    }

    /**
     * By default, mouse and touch movements will be recorded as they are needed for the "Move Heatmap" and to show
     * mouse movements when replaying a recorded session. You can disable the recording of any movements by calling this method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    disableRecordMovements(): void {
        window._paq.push(['HeatmapSessionRecording::disableRecordMovements']);
    }

    /**
     * The recording of mouse and touch movements is enabled by default, see above. If you disable mouse movements,
     * you can enable them again at a later point by using this method.
     *
     * * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableRecordMovements(): void {
        window._paq.push(['HeatmapSessionRecording::enableRecordMovements']);
    }

    /**
     * If you have disabled the automatic detection of new page views, this method lets you define manually when a visitor views a new page.
     * This means if a recording is currently active, it will be stopped and depending on the changed URL a new recording may be started.
     * If you want to prevent a new recording to be started, or if you want to configure manually whether a new recording should be started,
     * set fetchConfig = false.
     *
     * @param fetchConfig
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setNewPageView(fetchConfig: boolean): void {
        window._paq.push(['HeatmapSessionRecording::setNewPageView', fetchConfig]);
    }

    /**
     * By default, the activities of a visitor is only recorded for up to 10 minutes in a single page view.
     * If you want to record activities for a longer or shorter period, you can change the limit using this method.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setMaxCaptureTime(seconds: number): void {
        window._paq.push(['HeatmapSessionRecording::setMaxCaptureTime', seconds]);
    }

    /**
     * By default, when a user enters text into a form field, we truncate any entered text after 500 characters.
     * If you wanted to record more characters, you can define another limit using this method.
     *
     * @param maxLengthCharacters
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setMaxTextInputLength(maxLengthCharacters: number): void {
        window._paq.push(['HeatmapSessionRecording::setMaxTextInputLength', maxLengthCharacters]);
    }

    /**
     * When you configure a new session recording in Matomo, you can choose whether keystrokes should be recorded or not. If enabled,
     * keystrokes that are entered by a user into text form elements will be recorded and replayed later in the recorded session.
     * If you want to make sure to never record any keystrokes entered by your users, call this method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    disableCaptureKeystrokes(): void {
        window._paq.push(['HeatmapSessionRecording::disableCaptureKeystrokes']);
    }

    /**
     * Lets you enable the recording of keystrokes. When you call this method, the capturing of keystrokes will be enabled even
     * if you configured the session recording in Matomo to not capture keystrokes.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableCaptureKeystrokes(): void {
        window._paq.push(['HeatmapSessionRecording::enableCaptureKeystrokes']);
    }

    /**
     * Lets you customize whether a heatmap or session should be recorded. This lets you for example restrict the recording of activities
     * to certain target groups, to certain times, to certain locations, and more.
     *
     * @param triggerFunc
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    setTrigger(triggerFunc: Function): void {
        window._paq.push(['HeatmapSessionRecording::setTrigger', triggerFunc]);
    }

    /**
     * When you configure a Heatmap or a Session Recording in Matomo, you can define page rules based on URL, URL path and URL parameters to
     * limit the recording to certain pages. By default, these rules are matched against the current browser URL. If you track custom URLs
     * using the setCustomUrl() tracker method and want to apply the configured rules against a possibly set custom URL, call this method.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    matchTrackerUrl(): void {
        window._paq.push(['HeatmapSessionRecording::matchTrackerUrl']);
    }

    /**
     * Enables the debug mode that logs debug information to the developer console of your browser.
     * This should not be enabled in production.
     *
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    enableDebugMode(): void {
        window._paq.push(['HeatmapSessionRecording::enableDebugMode']);
    }

    /**
     * By default, Heatmap & Session Recording configures itself by issuing an HTTP request to your Matomo installation to detect
     * automatically whether any activities should be recorded on the current page. This way you don't need to change your website
     * when you configure new heatmaps or session recordings. This HTTP request is executed on each page view and may add some load
     * to your server. If you want to instead configure manually when to record a heatmap or a session, you can do this calling this
     * method. Please note that you will need to change the tracking code on your website manually if you want to stop or start
     * recording a session or a heatmap. You will also need to detect manually whether a page should be a recorded for example based
     * on its URL. As a benefit of this, it saves you an HTTP request on each page view.
     *
     * @param config
     * @memberof MatomoTracker
     */
    @WithoutReferenceError()
    addHeatmapSessionRecordingConfig(config: HeatmapSessionConfig): void {
        window._paq.push(['HeatmapSessionRecording.addConfig', config]);
    }
}

export function WithoutReferenceError() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            if (window._paq) {
                try {
                    return originalMethod.apply(this, args);
                } catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            }
        };
        return descriptor;
    };
}

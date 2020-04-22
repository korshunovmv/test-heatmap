import { Injectable } from '@angular/core';

declare var window: {
    [key: string]: any;
    prototype: Window;
    new(): Window;
};

/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
@Injectable()
export class MatomoInjectorService {
    siteId: string;
    inited: boolean;

    /**
     * Creates an instance of MatomoInjector.
     *
     * @memberof MatomoInjector
     */
    constructor() {
        window._paq = window._paq || [];
    }

    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url: URL of the Matomo instance to connect to.
     * @param id: SiteId for this application/site.
     * @param usePiwikFileName
     * @memberof MatomoInjector
     */
    init(u: string, fileName: string, id?: string) {
        // window._paq.push(['trackPageView']);
        window._paq.push(['enableLinkTracking']);
        (() => {
            // const u = url;
            // let fileName = 'stat';
            // if (usePiwikFileName) {
            //     fileName = 'piwik';
            // }
            window._paq.push(['setTrackerUrl', u + fileName + '.php']);
            if (id) {
              window._paq.push(['setSiteId', id]);
              this.siteId = id;
            }
            // window._paq.push(['HeatmapSessionRecording::enableRecordMovements']);
            const d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + fileName + '.js';
            s.parentNode.insertBefore(g, s);
            this.inited = true;
        })();
    }

    // setSiteId(id: string) {
    //     if (id === this.siteId) {
    //         return;
    //     }
    //     try {
    //         window._paq.push(['setSiteId', id]);
    //         this.siteId = id;
    //     } catch (e) {
    //         if (!(e instanceof ReferenceError)) {
    //             throw e;
    //         }
    //     }
    // }
}

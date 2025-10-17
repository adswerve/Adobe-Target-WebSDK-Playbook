window.asWebSdkUtils = {
    /**
     * Sends a custom event to the Adobe Experience Platform Edge Network.
     * This acts as the equivalent of an AT.js mboxTrack, primarily used for sending
     * data for profile updates or conversion tracking without requesting a decision.
     * * @param {Object} data - The custom data object to send to Target (must be formatted for __adobe.target).
     * @param {string} [scopeName='__view__'] - The name of the mbox/scope to track the event against.
     */
    trackEvent: function(data, scopeName = '__view__'){
        let targetData;
        if(typeof(data) == 'object'){
            targetData = data;
        }

        alloy("sendEvent", {
            "xdm": {
                // Manually construct the XDM for a proposition display event
                "_experience": {
                    "decisioning": {
                        "propositions": [
                            {
                                "scope": scopeName
                            }
                        ]
                    }
                },
                // The eventType signals this is a Target-related conversion/display event
                "eventType": "decisioning.propositionDisplay"
            },
            // The custom profile data is passed in the standard data object
            "data": {
                "__adobe": {
                    "target": targetData
                }
            }
        });
    }
};
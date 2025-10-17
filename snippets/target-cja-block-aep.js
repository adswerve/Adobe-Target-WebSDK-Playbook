// This configuration prevents the decisioning.propositionFetch event from being
// forwarded to the Adobe Experience Platform (AEP) service, thus preventing 
// data inflation in CJA/RTCDP datasets.

alloy("sendEvent", {
    type: "decisioning.propositionFetch",
    renderDecisions: true,
    personalization: {
        sendDisplayEvent: false
    },
    edgeConfigOverrides: {
        // Explicitly disable the AEP service for this specific call
        com_adobe_experience_platform: {
            enabled: false
        }
    },
    data: _satellite.getVar('Target Web SDK Data')
});
const fetchAndApplyPropositions = function () {
    const personalizationScopes = _satellite.getVar('Personalization Scopes')
    const personalizationSurfaces = _satellite.getVar('Personalization Surfaces')
    const renderAjoCustomCode = _satellite.getVar('Personalization Render AJO Custom Code')
    const edgeConfigOverrides = _satellite.getVar('Personalization Edge Config Overrides')
    const targetData = _satellite.getVar('Target Web SDK Data')
    const applyMboxClickTracking = _satellite.getVar('mboxClickTracking')


    alloy("sendEvent", {
        xdm: {
            eventType: "decisioning.propositionFetch"
        },
        renderDecisions: false,
        personalization: {
            surfaces: personalizationSurfaces.surfaces,
            sendDisplayEvent: !1
        },
        edgeConfigOverrides: edgeConfigOverrides,
        data: targetData,
        decisionScopes: personalizationScopes.scopes
    }).then((function (response) {
        window.webSDKResponse = response;
        const propositions = response.propositions;

        if (propositions.length > 0) {
            let propositionMeta = {}
            if (personalizationScopes.hasOwnProperty('meta')) {
                propositionMeta = personalizationScopes.meta
            }
            else {
                propositions.forEach(proposition => {
                    if (proposition.scopeDetails.decisionProvider == 'TGT') {
                        proposition.items.forEach(item => {
                            propositionMeta[proposition.scope] = {
                                selector: item?.data?.selector || 'head',
                                actionType: 'setHtml'
                            }
                        });
                    }
                });
            }
            alloy("applyPropositions", {
                propositions: propositions,
                metadata: propositionMeta
            })
            
        }

        applyMboxClickTracking(propositions, propositionMeta)

        renderAjoCustomCode(propositions)


        // return response

    }

    ))
}

return fetchAndApplyPropositions
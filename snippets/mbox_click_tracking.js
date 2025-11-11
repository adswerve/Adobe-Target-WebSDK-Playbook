let applyMboxClickTracking = function(propositions, propositionMeta){
    if (propositions.length > 0) {
        propositions.forEach(proposition => {
            if (proposition.scopeDetails.decisionProvider == 'TGT' && proposition.scope != '__view__') {
                const scope = propositionMeta[proposition.scope]
                const selector = scope.selector
                if (selector != 'head') {
                    document.querySelector(selector).addEventListener('click', function () {
                        alloy("sendEvent", {
                            "xdm": {
                                "eventType": "decisioning.propositionInteract", 
                                "_experience": {
                                    "decisioning": {
                                        "propositions": scope
                                    }
                                }
                            }
                        });
                    });
                }
            }
        });
    }
}

return applyMboxClickTracking

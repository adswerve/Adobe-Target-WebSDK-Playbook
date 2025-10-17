// Example of fetching a decision for a specific, non-global mbox.

alloy("sendEvent", {
  type: "decisioning.propositionFetch",
  
  // The decisionScope specifies the name of the mbox/location in Target
  decisionScopes: ['nonglobal-mbox'],
  
  // Set renderDecisions to false if you plan to manually handle rendering
  renderDecisions: false, 
  
  personalization: {
    // Optionally list surfaces if using an Auto-Created element in Target
    surfaces: ['#nonglobal-mbox'],
    sendDisplayEvent: false // Prevents automatic display event (handle manually later)
  },
  
  // Example of an optional override for data ingestion
  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      datasets: {
        event: {
          // Replace with the appropriate Dataset ID
          datasetId: "682bd0ce91abec2aef12bf84" 
        }
      }
    }
  },
  data: _satellite.getVar('Target Web SDK Data')
}).then(function(response){
  const offers = response.propositions
  console.log('Offers received for nonglobal-mbox:', offers)
  window.propositions = offers // Make offers globally accessible if needed
  
  // Manually apply the propositions using the applyPropositions command
  return alloy('applyPropositions', {
    'propositions': offers,
    // Specify the rendering metadata for the decision scope
    'metadata': {
        'nonglobal-mbox': {
            // Target element selector to apply the change
            'selector': 'head', 
            // The action type to apply
            'actionType': 'setHtml' 
        }
    }
  })
});
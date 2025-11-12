alloy("sendEvent", {
  type: "decisioning.propositionFetch",

  // The decisionScope specifies the name of the mbox/location in Target
  decisionScopes: ['__view__'],

  // Set renderDecisions to false if you plan to manually handle rendering
  renderDecisions: true,

  personalization: {
    sendDisplayEvent: true // Prevents automatic display event (handle manually later)
  },

  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      datasets: {
        event: {
          datasetId: _satellite.getVar('Target | Dataset ID')
        }
      }
    }
  },



  data: _satellite.getVar('Target Web SDK Data')
}).then(function (response) {
  const offers = response.propositions
  window.propositions = offers // Make offers globally accessible if needed
  propositions.forEach((proposition, index) => {

    // Each proposition can have multiple 'items', so we loop through them too
    if (Array.isArray(proposition.items)) {
      proposition.items.forEach(item => {
        const meta = item.meta;
        if (meta) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'adobeTargetResponse',
            activityId: meta['activity.id'],
            activityName: meta['activity.name'],
            experienceId: meta['experience.id'],
            experienceName: meta['experience.name'],
            geoCity: meta['geo.city'],
            geoCountry: meta['geo.country']
          })
        }
      });
    }
  });
});
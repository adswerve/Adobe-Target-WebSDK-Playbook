  // Example of how to access and push response tokens to the data layer
  
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
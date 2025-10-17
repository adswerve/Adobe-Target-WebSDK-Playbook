# 3. Custom Data and Regional Mboxes

This section details how to pass custom data for profile enrichment and how to implement non-global personalization requests.

## 3.1 Custom Data (Profile Parameters)

Custom data should be stored in a Launch **Data Element** and passed under the `data` section of the Web SDK Proposition Fetch call.

The data must be structured under the `__adobe.target` object with profile parameters prefixed as `"profile."` to set profile attributes in Target.

*See [`snippets/target-custom-data-element.js`](../snippets/target-custom-data-element.js) for the code.*

## 3.2 Regional Mboxes (Non-Global Decisioning)

To fetch propositions for specific, non-global locations (the equivalent of a non-global mbox in AT.js), you use the `decisionScopes` array and manually apply the propositions.

The implementation involves using the `alloy("sendEvent", ...)` command with `renderDecisions: false` and then chaining the `alloy('applyPropositions', ...)` command to manually render the content based on a selector.

*See [`snippets/target-regional-mbox.js`](../snippets/target-regional-mbox.js) for the code example.*
# 3. Regional Mboxes

This section details how to pass custom data for profile enrichment and how to implement non-global personalization requests.

## 3.1 Regional Mboxes (Non-Global Decisioning)

To fetch propositions for specific, non-global locations (the equivalent of a non-global mbox in AT.js), you use the `decisionScopes` array and manually apply the propositions.

The implementation involves using the `alloy("sendEvent", ...)` command with `renderDecisions: false` and then chaining the `alloy('applyPropositions', ...)` command to manually render the content based on a selector.

*See [`snippets/target-regional-mbox.js`](../snippets/target-regional-mbox.js) for the code example.*
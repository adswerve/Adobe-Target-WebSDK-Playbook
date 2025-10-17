# 4. Advanced Implementations

## 4.1 Implementation without Analytics

If the client is not using Adobe Analytics, you still follow the same base implementation steps: configure the Web SDK, add the **Adobe Target Service** to the Datastream, and use a Launch rule with **Web SDK Send Event** and **Request Personalization**. A4T reporting will not be available.

## 4.2 Response Tokens

Response tokens are implicitly included in the response of the `alloy("sendEvent", ...)` call as part of the `propositions` payload. They can be accessed programmatically by chaining a `.then()` promise to the Web SDK call.

## 4.3 trackEvent Equivalent (Custom Events)

The AT.js `trackEvent` function does not exist in the Web SDK. To fire a custom event to pass data to Target (e.g., conversion tracking or profile update), use a standard `alloy("sendEvent", ...)` call with an `eventType` of `decisioning.propositionDisplay` and include the data payload.

### Utility Function for `trackEvent`

This utility function simplifies the process by wrapping the necessary Web SDK logic. It should be included in a rule that runs early (e.g., at Library Loaded with a high order value like `1`) so it is available globally as `window.asWebSdkUtils.trackEvent`.

*See [`snippets/target-trackevent-utility.js`](../snippets/target-trackevent-utility.js) for the utility function definition.*

### How to Call the Utility

The utility function can be called using the following structure:

**Call Example (Profile Data and Specific Scope Name):**
```javascript
let targetData = {
    "profile.demandbase_isp": _satellite.getVar("demandbase_isp"),
    // ... other profile parameters
}
asWebSdkUtils.trackEvent(targetData, 'myMboxName');
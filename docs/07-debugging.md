# 7. Debugging

## 7.1 Why isn’t Target Firing?

Follow this checklist if you suspect the Target service is not being called:

1.  **Datastream Setup:** Is the **Adobe Target Service** added and enabled in your Datastream configuration?
2.  **Launch Rule Execution:** Is the Launch rule containing the Web SDK **Send Event (Request Personalization)** action firing at the correct time (Library Loaded or History Change)?
3.  **Network Request:** Check the Network tab for the Edge Network request (`/ee`). The payload must include the `personalization` object if configured correctly.

## 7.2 Where to find the activities

Activities are configured and managed within the **Adobe Target UI**. Use the Adobe Experience Platform Debugger to determine the user's Experience Cloud ID (ECID) and use this in Target's activity log view to confirm membership.

## 7.3 How to mbox trace

The `mboxTrace` functionality is replaced by the Web SDK's ability to easily debug the payload being sent and the response received directly in the console using the **Adobe Experience Platform Debugger**.

1.  **Enable Logging:** Use the Debugger extension to enable detailed Web SDK logging.
2.  **Inspect Payload:** The console output will show the full request payload, allowing you to verify profile parameters and decision scopes.
3.  **Inspect Response:** The response payload will contain the `propositions` array, including the content decisions returned by Target.
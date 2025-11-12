# 2. Base Implementation

The base implementation outlines the core configuration required to activate Adobe Target via the Web SDK and integrate it with Adobe Analytics for reporting (A4T).

## 2.1 Timing
The primary rule for global personalization decisions should fire top of page, either at **Library Loaded**, or at a DataLayer push for the top of the page.

* **Launch Rule Timing:** Fire the Launch rule at **Library Loaded (Page Top)**.
* **Single Page Applications (SPAs):** For SPAs, the rule **must** also be configured to fire on **History Change**.
    * *Note:* History Change needs extra QA because it is dependent on how the client app is built.

## 2.2 The Rule
In this rule, you will add the action of **Web SDK Send Event**.

1.  Select the checkbox: **Use Guided Events**.
2.  Select the radio button: **Request Personalization**.
3.  Make a data element called "Target Web SDK Data" and pass your profile parameters into it. *See [`snippets/target-custom--params-data-element.js`](../snippets/target-custom-params-data-element.js) for the code.*

## 2.3 Datastream Configuration

To enable Target, the service must be explicitly added to the relevant Datastream configuration within the Data Collection UI.

1.  Navigate to your Datastream.
2.  Add the **Adobe Target** Service.
3.  **Required Values:** You do not need to enter specific values for Environment, Property, or Third Party ID. Environment will default to Production if left blank.

## 2.4 Integration with Adobe Analytics (A4T)

To enable reporting for Target activities in Analytics (A4T), a one-time provisioning step is necessary, and the Analytics call must properly include the Target data.

1.  **Provisioning:** Analytics needs to be provisioned (refer to Adobe documentation).
    * https://experienceleague.adobe.com/en/docs/target/using/integrate/a4t/a4timplementation
2.  **Analytics Call Configuration:**
    * The Analytics call (via a separate Web SDK Send Event action) should also utilize **Guided Events** for **Collect Analytics**.
    * **Fallback:** If not using Guided Events, ensure the checkbox for **“Include Rendered Propositions”** is explicitly checked on the Analytics Web SDK action.

## 2.5 Conditions
Please match conditions for URLs and respect cookie consent.

## 2.6 Fully Custom Code Implementation (Advanced)

For the most granular control, you can bypass the standard "Web SDK Send Event" action in Adobe Launch and use a "Custom Code" action to build and send the event manually using the `alloy` object.

This advanced approach is useful if you need to:
* Manually handle the response from Target (propositions).
* Delay or programmatically control content rendering.
* Prevent or manage display event tracking separately from the fetch.
* Push Target response metadata into a `dataLayer` for other analytics or debugging tools.

### 2.6.1 Launch Rule Configuration

1.  **Rule Event:** Use the same timing as in section 2.1 (**Library Loaded** and/or **History Change**).
2.  **Action:** Instead of "Web SDK Send Event," add a new **Core > Custom Code** action.
3.  **Language:** Set the language to **JavaScript**.

### 2.6.2 Custom Code Snippet

Paste the following code into the custom code action editor. This code manually constructs the `sendEvent` call to fetch decisions, processes the response, and pushes metadata to the `dataLayer`.

*See [`snippets/target-sendevent-global-mbox.js`](../snippets/target-sendevent-global-mbox.js) for the code.*

> **Note:** This method also incorpoates response tokens from the returned propositions. It also uses a data element called "Target | Dataset ID" as the dataset override to cycle between different environments.
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
3.  Make a data element called "Target Web SDK Data" and pass your profile parameters into it. *See [`snippets/target-custom-data-element.js`](../snippets/target-custom-data-element.js) for the code.*

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
# 8. Functional Details

## 8.1 What is done in Guided Events

**Guided Events** is an option within the Web SDK Launch action that simplifies data mapping by using pre-configured XDM objects for common actions (like page views, cart updates, and purchases).

When you select "Use Guided Events," the Web SDK extension handles the creation of the correct XDM structure for the chosen event type (e.g., setting the `eventType` and other XDM fields).

## 8.2 What does Request Personalization Mean

**Request Personalization** is a specific option available when using **Guided Events**.

* **Function:** It instructs the Web SDK to include the necessary flag in the request payload to the Edge Network, asking the Adobe Target service to evaluate available activities for the current user and return any applicable content (propositions).
* **Context:** When this option is selected for the top-of-page rule, it is equivalent to the global Mbox request in AT.js, ensuring that personalized content is fetched and rendered on the initial page load.
# 6. AT.js References and Limitations

## 6.1 AT.js References

### Parameters

The parameters concept from AT.js is mapped to the Web SDK structure as follows:

| AT.js Concept | Web SDK Implementation | Location in `sendEvent` Payload |
| :--- | :--- | :--- |
| **Mbox Name** | Decision Scope | `decisionScopes` array |
| **Mbox Parameters** | Custom Contextual Data | `data` object (any path, e.g., `data.page.pageName`) |
| **Profile Parameters** | Profile Attributes | `data.__adobe.target` object (must be prefixed with `profile.`) |

## 6.2 Things to Know

### Analytics data stitching limitations

The Experience Cloud ID (ECID) stitching process to link an anonymous user to an existing profile in RTCDP takes approximately **10-15 minutes**.

If immediate personalization based on a known identity is required, you must use a primary identifier (e.g., SSOUUID) and pass it as the **Third Party ID** in the Web SDK configuration. This allows for immediate reference to the stitched profile.
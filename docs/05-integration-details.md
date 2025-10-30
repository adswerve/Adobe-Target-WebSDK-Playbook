# 5. Integration Details (RTCDP and CJA)

## 5.1 RTCDP Integration (Real-Time CDP)

### Stitching Profiles

To enable personalization based off a profile attribute and not data sent in this session, the user profile needs to be stitched.

1.  **Primary Identifier:** Set the primary identifier (i.e., SSOUUID) as the **Third Party ID** in the Web SDK configuration.
2.  **ECID Stitching:** ECID stitching takes 10-15 minutes, but using the SSOUUID as the primary will reference that ID instead of waiting for the ECID stitching.
3.  **Data Availability:** Any data sent in the session is available immediately.

## 5.2 CJA Integration (Customer Journey Analytics)

Because the data from the Target call can inflate AEP/CJA datasets, we need to eith er suppress the Target call data from going to AEP altogether, or have the data go to a separate dataset.

### Option A: Override the Dataset (Recommended)

Direct the Target call data to a separate dataset that is excluded from your primary CJA connection.

* **Setup:** Create a secondary dataset in AEP and add it to the Datastream config.
* **Code:** Use `edgeConfigOverrides` to specify the secondary `datasetId` for the `decisioning.propositionFetch` call.

### Option B: Completely Block AEP Ingestion 

To completely block the call from going to AEP, use `edgeConfigOverrides` to set `enabled: false` for the `com_adobe_experience_platform` service.

*See [`snippets/target-cja-block-aep.js`](../snippets/target-cja-block-aep.js) for the code.*
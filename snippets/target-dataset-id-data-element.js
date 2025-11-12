// This data element function returns the dataset ID
// please replace the dataset ID as needed

let datasetId
if (_satellite.environment.stage == 'development') {
    datasetId = '1234'
} else if (_satellite.environment.stage == 'staging') {
    datasetId = '1234'
} else {
    datasetId = '1234'
}

return datasetId
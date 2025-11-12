// This data element function returns the payload required by the Web SDK
// to pass data as profile attributes to Adobe Target.

var data = {
    // __adobe is the required container for specific product customizations
    __adobe: {
        target: {
            // All custom profile parameters must be prefixed with "profile."
            "profile.demandbase_isp": _satellite.getVar("demandbase_isp"),
            "profile.demandbase_city": _satellite.getVar("demandbase_city"),
            "profile.demandbase_state": _satellite.getVar("demandbase_state"),
            "profile.demandbase_country": _satellite.getVar("demandbase_country"),
            "profile.demandbase_audience": _satellite.getVar("demandbase_audience"),
            "profile.demandbase_industry": _satellite.getVar("demandbase_industry"),
            "profile.demandbase_web_site": _satellite.getVar("demandbase_web_site"),
            "profile.demandbase_parent_name": _satellite.getVar("demandbase_parent_name"),
            "profile.demandbase_primary_sic": _satellite.getVar("demandbase_primary_sic")
        }
    }
}
return data;